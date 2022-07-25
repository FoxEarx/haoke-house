<template>
  <div>
    <Nav :nav="'发布房源'"></Nav>
    <div class="box">
      <van-cell-group>
        <!-- 房源信息 -->
        <van-cell title="房源信息" class="info" />
        <!-- 小区名称 -->
        <van-cell title="小区名称" is-link value="请输入小区名" />
        <!-- 租金 -->
        <van-cell value="￥/月">
          <template #title>
            <span class="custom-title">租金</span>
            <input
              type="text"
              name=""
              id=""
              placeholder="请输入租金/月"
              v-model="money"
            />
          </template>
        </van-cell>
        <!-- 房屋面积 -->
        <van-cell title="建筑面积" value="m²">
          <template #title>
            <span class="custom-title">建筑面积</span>
            <input
              type="text"
              name=""
              id=""
              placeholder="请输入建筑面积"
              v-model="housesize"
            />
          </template>
        </van-cell>
        <!-- 户型 -->
        <van-cell
          title="户型"
          v-model="confirmHX"
          is-link
          @click="HXshow = true"
        />
        <van-popup
          v-model="HXshow"
          position="bottom"
          :style="{ height: '40%' }"
        >
          <van-picker
            title="户型"
            show-toolbar
            :columns="room"
            @confirm="ChangeHX"
            @cancel="HXshow = false"
          />
        </van-popup>
        <!-- 楼层 -->
        <van-cell
          title="所在楼层"
          v-model="confirmLC"
          is-link
          value="请输入小区名"
          @click="LCshow = true"
        />
        <van-popup
          v-model="LCshow"
          position="bottom"
          :style="{ height: '40%' }"
        >
          <van-picker
            title="楼层"
            show-toolbar
            :columns="floor"
            @confirm="ChangeLC"
            @cancel="LCshow = false"
          />
        </van-popup>
        <!-- 朝向 -->
        <van-cell
          title="朝向"
          v-model="confirmCX"
          is-link
          @click="CXshow = true"
        />
        <van-popup
          v-model="CXshow"
          position="bottom"
          :style="{ height: '40%' }"
        >
          <van-picker
            title="朝向"
            show-toolbar
            :columns="direction"
            @confirm="ChangeCX"
            @cancel="CXshow = false"
          />
        </van-popup>
        <van-cell title="房屋标题" class="biaoti" />
      </van-cell-group>
      <div class="fwinfo">
        <van-field
          v-model="biaoti"
          rows="1"
          autosize
          type="textarea"
          placeholder="请输入标题(例如：整租 小区名 2室 5000元)"
        />
      </div>
      <van-cell title="房屋图像" />
      <van-field name="uploader">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <van-cell title="房屋配置" />
      <van-grid :border="false" column-num="5">
        <van-grid-item
          :text="item"
          v-for="(item, index) in icon"
          :key="index"
          :style="
            housePZ.some((ele) => ele === item) ? 'color:#4cbd87' : 'color:#000'
          "
          @click="housePZfn(item)"
        >
          <template #icon>
            <span :class="`iconfont ${iconfont(item)}`"></span>
          </template>
        </van-grid-item>
      </van-grid>
      <van-cell title="房屋描述" class="fangwuMS" />
      <van-field
        v-model="houseinfo"
        rows="10"
        autosize
        type="textarea"
        placeholder="请输入描述信息"
      />
    </div>
    <div class="tabbar_bottom">
      <van-button type="default" @click="close">取消</van-button
      ><van-button type="primary" @click="rental">提交</van-button>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/navbar'
import { releaseHouseInfo, rental } from '@/api'
export default {
  data () {
    return {
      icon: [],
      info: [],
      housesize: '',
      confirmLC: '请选择',
      confirmHX: '请选择',
      confirmCX: '请选择',
      LCvalue: '',
      HXvalue: '',
      CXvalue: '',
      HXshow: false,
      LCshow: false,
      CXshow: false,
      room: [],
      floor: [],
      direction: [],
      houseinfo: '',
      biaoti: '',
      money: '',
      housePZ: [],
      uploader: []
    }
  },
  created () {
    this.releaseHouseInfo()
  },
  methods: {
    // 选择楼层
    ChangeLC (value, index) {
      this.LCshow = false
      this.confirmLC = value
      this.LCvalue = this.info.floor[index].value
      this.LCvalue = console.log(this.confirmLC)
    },
    // 选择户型
    ChangeHX (value, index) {
      this.HXshow = false
      this.confirmHX = value
      this.HXvalue = this.info.roomType[index].value
      console.log(this.HXvalue)
    },
    // 选择朝向
    ChangeCX (value, index) {
      this.CXshow = false
      this.confirmCX = value
      this.CXvalue = this.info.oriented[index].value
    },
    // 发布房源的应填数据
    async releaseHouseInfo () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data } = await releaseHouseInfo()
        this.info = data.body
        for (let i = 0; i < data.body.roomType.length; i++) {
          this.room.push(data.body.roomType[i].label)
        }
        for (let i = 0; i < data.body.floor.length; i++) {
          this.floor.push(data.body.floor[i].label)
        }
        for (let i = 0; i < data.body.oriented.length; i++) {
          this.direction.push(data.body.oriented[i].label)
        }
        for (let i = 0; i < data.body.supporting.length; i++) {
          this.icon.push(data.body.supporting[i].label)
        }
        console.log(this.info)
      } catch (error) {
        console.log(error)
        this.$toast.fail('获取发布房源信息失败')
      }
      this.$toast.clear()
    },
    iconfont (item) {
      switch (item) {
        case '衣柜':
          return 'icon-yigui'
        case '洗衣机':
          return 'icon-xiyiji'
        case '空调':
          return 'icon-kongtiao'
        case '床':
          return 'icon-chuang'
        case '暖气':
          return 'icon-shuinuanqigongcheng'
        case '天然气':
          return 'icon-meiqitianranqi'
        case '电视':
          return 'icon-dianshi'
        case '热水器':
          return 'icon-jiajukongzhi-reshuiqi'
        case '冰箱':
          return 'icon-bingxiang'
        case '宽带':
          return 'icon-kuandai'
      }
    },
    close () {
      this.$dialog
        .confirm({
          title: '提示',
          message: '放弃发布房源？',
          confirmButtonText: '继续编辑',
          confirmButtonColor: '#108ee9',
          cancelButtonText: '放弃'
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          this.$router.go(-1)
        })
    },
    async rental () {
      try {
        const res = await rental({
          title: '11', // 小区名称
          description: this.houseinfo, // 装修描述
          houseImg: this.uploader, // 房屋图片
          oriented: this.confirmCX, // 房子朝向
          supporting: this.housePZ, // 房屋配置
          price: this.money, // 房屋价格
          roomType: this.confirmHX, // 房屋类型
          size: this.housesize, // 房屋大小
          floor: this.confirmLC, // 房屋层数
          community: '11' // 所属社区
        })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
    housePZfn (pz) {
      if (this.housePZ.some((ele) => ele === pz)) {
        this.housePZ = this.housePZ.filter((ele) => ele !== pz)
      } else {
        this.housePZ.push(pz)
      }
    }
  },
  components: {
    Nav
  }
}
</script>

<style lang="less" scoped>
.info {
  color: #21b97a;
  font-size: 15px;
}
.van-cell__title {
  display: flex;
  span {
    display: inline-block;
    width: 60px;
    text-align-last: justify;
    padding-right: 25px;
  }
  input {
    width: 200px;
    border: transparent;
  }
}
.biaoti {
  input {
    display: inline-block;
  }
}
.fwinfo {
  textarea {
    border: transparent;
    // padding-left: 30px;
    padding-top: 10px;
    font-size: 15px;
    width: 371px;
    height: 30px;
  }
}
.iconfont {
  font-size: 23px;
}
:deep(.van-grid-item__text) {
  font-size: 14px;
}
.box {
  background-color: #f6f5f6;
  .fangwuMS {
    margin-top: 20px;
  }
}
.tabbar_bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  .van-button {
    flex: 1;
  }
  width: 100%;
}
</style>
