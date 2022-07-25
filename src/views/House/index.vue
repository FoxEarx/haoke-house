<template>
  <div class="box">
    <!-- navbar -->
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      :title="house.community"
    />
    <!-- 房屋图片 -->
    <div class="houseimg">
      <van-swipe
        :height="250"
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        :loop="false"
      >
        <van-swipe-item v-for="(item, index) in house.houseImg" :key="index"
          ><img :src="`http://liufusong.top:8080${item}`" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 房屋信息 -->
    <div class="houseinfo">
      <h3>{{ house.title }}</h3>
      <span class="wz">{{ house.tags && house.tags[0] }}</span>
      <div class="infomain">
        <div class="jj">
          <div class="sum">{{ house.price }}</div>
          <i>/月</i>
          <div class="zhushi">租金</div>
        </div>
        <div class="jj">
          <div class="sum">{{ house.roomType }}</div>
          <div class="zhushi">房型</div>
        </div>
        <div class="jj">
          <div class="sum">{{ house.size }}平方米</div>
          <div class="zhushi">面积</div>
        </div>
      </div>
      <div class="lx">
        <div>装修:<span>精装</span></div>
        <div>
          朝向:<span>{{ house.oriented && house.oriented[0] }}</span>
        </div>
        <div>
          楼层:<span>{{ house.floor }}</span>
        </div>
        <div>类型:<span>普通住宅</span></div>
      </div>
    </div>
    <!-- 房屋信息 -->
    <div class="location">
      <div class="name">
        <p>小区：</p>
        <span>天山星城</span>
      </div>
      <div class="map"><img src="" alt="" /></div>
      <div class="some">
        <p class="some_p">房屋配套</p>
        <div class="root">
          <ul>
            <li v-for="(item, index) in house.supporting" :key="index">
              <span :class="`iconfont ${iconfont(item)}`"></span>
              <p>{{ house.supporting && house.supporting[index] }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 房主描述 -->
    <div class="describe">
      <p class="describe_p">房源概况</p>
      <div></div>
      <div>{{ house.description }}</div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="describe">
      <p class="describe_p">猜你喜欢</p>
    </div>
    <!-- 底部导航 -->
    <div class="tabbar">
      <div @click="changeCollection">
        <span
          :class="state ? 'iconfont icon-shoucang1' : 'iconfont icon-shoucang'"
        ></span
        >收藏
      </div>
      <div class="tabbar_middle">在线咨询</div>
      <div class="tabbar_bottom">电话预约</div>
    </div>
  </div>
</template>

<script>
import {
  getHouse,
  isCollection,
  addCollection,
  delCollection
} from '@/api/user'

export default {
  data () {
    return {
      house: {},
      state: ''
    }
  },
  created () {
    this.getHouse()
    this.isCollection()
    // console.log(this.$route)
  },
  methods: {
    // 获取房屋具体信息
    async getHouse () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await getHouse(this.$route.query.id)
        this.house = res.data.body
        console.log('当前房屋信息', this.house)
      } catch (error) {
        this.$toast.fail('请重新获取房屋信息')
        console.log(error)
      } finally {
        this.$toast.clear()
      }
    },
    // 返回上一层
    onClickLeft () {
      this.$toast.clear()
      this.$router.back()
    },
    // 字体图标匹配
    iconfont (item) {
      switch (item) {
        case '衣柜':
          return 'icon-yigui'
        case '洗衣机':
          return 'icon-xiyiji'
        case '空调':
          return 'icon-kongtiao'
        case '沙发':
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
    },
    // 房屋收藏状态
    async isCollection () {
      try {
        const { data } = await isCollection(this.$store.state.houseCode)
        console.log('是否收藏', data)
        this.state = data.body.isFavorite
      } catch (error) {
        this.$toast.fail('查询收藏状态失败，请刷新')
      }
    },
    // 改变房屋收藏状态
    async changeCollection () {
      // 如果已收藏则删除收藏 否则添加收藏
      try {
        if (this.state) {
          const res = await delCollection(this.$store.state.houseCode)
          console.log('删除房屋收藏', res)
          this.$toast.success('删除收藏成功')
          this.isCollection()
        } else {
          const res = await addCollection(this.$store.state.houseCode)
          console.log('添加房屋收藏', res)
          this.$toast.success('添加收藏成功')
          this.isCollection()
        }
      } catch (error) {
        this.$toast.fail('更新状态失败请重试')
      }
    }
  }
}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-style: normal;
}
:deep(.van-nav-bar__title) {
  color: #fff;
  font-size: 18px;
}
.box {
  background-color: #f6f5f6;
  margin-bottom: 50px;
}
:deep(.van-nav-bar__content) {
  background-color: #21b97a;
}
:deep(.van-icon-arrow-left) {
  color: #fff;
  font-size: 16px;
}
.houseimg {
  width: 100%;
  height: 250px;
  background-color: #f6f5f6;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.houseinfo {
  background-color: #fff;
  padding: 15px;
  h3 {
    font-weight: 400;
    font-size: 16px;
    color: #333;
    margin: 16px 0 5px 0;
  }
  .wz {
    display: inline-block;
    height: 20px;
    font-size: 12px;
    border-radius: 3px;
    padding: 4px 5px;
    margin-right: 5px;
    line-height: 12px;
    color: #39becd;
    background: #e1f5f8;
    // margin-top: -5px;
  }
  .infomain {
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
    padding: 15px 0;
    margin: 15px 0;
    .jj {
      color: #fa5741;
      font-size: 18px;
      font-weight: bolder;
      .sum {
        display: inline;
      }
    }
    i {
      font-size: 12px;
      font-weight: 400;
    }
    .zhushi {
      text-align: center;
      color: #999;
      font-size: 14px;
    }
  }
  .lx {
    display: flex;
    flex-wrap: wrap;
    div {
      width: 50%;
      color: #999;
      padding-right: 5px;
      line-height: 26px;
      font-size: 13px;
      span {
        color: #000;
        padding-left: 8px;
      }
    }
  }
}
.location {
  .name {
    width: 375px;
    height: 44px;
    margin-top: 10px;
    padding: 0 10px;
    line-height: 44px;
    color: #666;
    background-color: #fff;
    font-size: 14px;
    p {
      display: inline;
    }
    span {
      color: #000;
    }
  }
  .map {
    background-color: #fff;
    width: 375px;
    height: 145px;
  }
  .some {
    background-color: #fff;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
    padding: 15px 10px;
    .some_p {
      padding-bottom: 10px;
      border-bottom: 1px solid #cecece;
    }
  }
  .root {
    background-color: #fff;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 20%;
        height: 52px;
        margin: 10px 0;
        padding-top: 8px;
        text-align: center;
        color: #333333;
        font-style: 23px;
        font-weight: normal;
        .iconfont {
          font-size: 23px;
        }
        p {
          height: 28px;
          line-height: 28px;
        }
      }
    }
  }
}
.describe {
  margin: 10px 0;
  padding: 10px;
  line-height: 150%;
  background: #fff;
  font-size: 15px;
  .describe_p {
    padding-bottom: 10px;
    border-bottom: 1px solid #cecece;
    font-weight: 900;
  }
}
.tabbar {
  display: flex;
  border-top: 0.5px solid #cecece;
  position: fixed;
  height: 50px;
  width: 100%;
  bottom: 0;
  line-height: 50px;
  left: 0;
  background-color: #fff;
  font-size: 17px;
  color: #999;
  div {
    flex: 1;
    text-align: center;
    font-size: 18px;
  }
  .tabbar_middle {
    border-left: 1px solid #cecece;
    border-right: 1px solid #cecece;
  }
  .iconfont {
    font-size: 18px;
  }
  .icon-shoucang1 {
    color: #ff4f00;
  }
  .tabbar_bottom {
    background-color: #21b97a;
    color: #fff;
  }
}
</style>
