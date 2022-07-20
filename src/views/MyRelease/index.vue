<template>
  <div>
    <Nav :nav="'发布房源'"></Nav>
    <van-cell-group>
      <!-- 房源信息 -->
      <van-cell title="房源信息" class="info" />
      <!-- 小区名称 -->
      <van-cell title="小区名称" is-link value="请输入小区名" />
      <!-- 租金 -->
      <van-cell value="￥/月">
        <template #title>
          <span class="custom-title">租金</span>
          <input type="text" name="" id="" placeholder="请输入租金/月" />
        </template>
      </van-cell>
      <!-- 房屋面积 -->
      <van-cell title="建筑面积" value="m²">
        <template #title>
          <span class="custom-title">建筑面积</span>
          <input type="text" name="" id="" placeholder="请输入建筑面积" />
        </template>
      </van-cell>
      <!-- 户型 -->
      <van-cell title="户型" v-model="confirmHX" is-link @click="huxingCH" />
      <van-popup v-model="HXshow" position="bottom" :style="{ height: '40%' }">
        <van-picker
          title="户型"
          show-toolbar
          :columns="room"
          @confirm="ChangeHX"
          @cancel="clearHXList"
        />
      </van-popup>
      <!-- 楼层 -->
      <van-cell
        title="所在楼层"
        v-model="confirmLC"
        is-link
        value="请输入小区名"
        @click="loucengCH"
      />
      <van-popup v-model="LCshow" position="bottom" :style="{ height: '40%' }">
        <van-picker
          title="楼层"
          show-toolbar
          :columns="direction"
          @confirm="ChangeLC"
          @cancel="clearLCList"
        />
      </van-popup>
      <!-- 朝向 -->
      <van-cell title="朝向" v-model="confirmCX" is-link @click="chaoxiangCH" />
      <van-popup v-model="CXshow" position="bottom" :style="{ height: '40%' }">
        <van-picker
          title="楼层"
          show-toolbar
          :columns="direction"
          @confirm="ChangeCX"
          @cancel="clearCXList"
        />
      </van-popup>
      <van-cell title="房屋标题" class="biaoti" />
    </van-cell-group>
    <div class="fwinfo">
      <textarea
        name=""
        id=""
        cols="30"
        rows="1"
        placeholder="请输入标题(例如：整租 小区名 2室 5000元)"
      ></textarea>
    </div>
    <van-cell title="房屋图像" />
    <van-field name="uploader">
      <template #input>
        <van-uploader />
      </template>
    </van-field>
    <van-cell title="房屋配置" />
    <van-grid :border="false" column-num="5">
      <van-grid-item :text="item" v-for="(item, index) in icon" :key="index">
        <template #icon>
          <span :class="`iconfont ${iconfont(item)}`"></span>
        </template>
      </van-grid-item>
    </van-grid>
    <van-cell title="房屋描述" />
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      class="housems"
      placeholder="请输入房屋的描述信息"
    ></textarea>
  </div>
</template>

<script>
import Nav from '@/components/navbar'
import { releaseHouseInfo } from '@/api'
export default {
  data () {
    return {
      icon: [],
      confirmLC: '请选择',
      confirmHX: '请选择',
      confirmCX: '请选择',
      HXshow: false,
      LCshow: false,
      CXshow: false,
      room: [],
      floor: [],
      direction: []
    }
  },
  created () {
    this.releaseHouseInfo()
  },
  methods: {
    // 打开户型选择
    huxingCH () {
      this.HXshow = true
    },
    // 关闭户型选择
    clearHXList () {
      this.HXshow = false
    },
    // 打开楼层选择
    loucengCH () {
      this.LCshow = true
    },
    // 关闭楼层选择
    clearLCList () {
      this.LCshow = false
    },
    // 打开朝向
    chaoxiangCH () {
      this.CXshow = true
    },
    // 关闭朝向选择
    clearCXList () {
      this.CXshow = false
    },
    // 选择楼层
    ChangeLC (value) {
      this.LCshow = false
      this.confirmLC = value
    },
    // 选择户型
    ChangeHX (value) {
      this.HXshow = false
      this.confirmHX = value
    },
    // 选择朝向
    ChangeCX (value) {
      this.CXshow = false
      this.confirmCX = value
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
        console.log(data)
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
          return 'icon-shafa'
        case '暖气':
          return 'icon-shuinuanqigongcheng'
        case '天然气':
          return 'icon-meiqitianranqi'
        case '电视':
          return 'icon-dianshi'
        case '热水器':
          return 'icon-yinshuiji-'
        case '冰箱':
          return 'icon-bingxiang'
        case '宽带':
          return 'icon-kuandai'
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
    padding-left: 30px;
    padding-top: 10px;
    font-size: 15px;
    width: 300px;
    height: 30px;
  }
}
.housems {
  border: transparent;
  width: 300px;
  font-size: 14px;
  padding: 10px 20px;
}
.iconfont {
  font-size: 23px;
}
:deep(.van-grid-item__text) {
  font-size: 14px;
}
</style>
