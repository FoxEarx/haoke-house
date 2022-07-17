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
        <p>房屋配套</p>
        <div class="root">
          <ul>
            <li v-for="(item, index) in house.supporting" :key="index">
              <span>123</span>
              <p>{{ house.supporting && house.supporting[index] }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 底部导航 -->
    <div class="tabbar">
      <div><span class="iconfont icon-shoucang">收藏</span></div>
      <div class="tabbar_middle">在线咨询</div>
      <div class="tabbar_bottom">电话预约</div>
    </div>
  </div>
</template>

<script>
import { getHouse } from '@/api/user'
export default {
  data () {
    return {
      house: {}
    }
  },
  created () {
    this.getHouse()
    // console.log(this.$route)
  },
  methods: {
    // 获取房屋具体信息
    async getHouse () {
      try {
        const res = await getHouse(this.$route.query.id)
        this.house = res.data.body
        console.log(this.house)
      } catch (error) {
        this.$toast.fail('请重新获取房屋信息')
        console.log(error)
      }
    },
    onClickLeft () {
      this.$router.back()
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
    // margin: 0 10px 10px 10px;
    padding: 15px 10px;
    border-bottom: 1px solid #cecece;
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
        p {
          height: 28px;
          line-height: 28px;
        }
      }
    }
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
  }
  .tabbar_middle {
    border-left: 1px solid #cecece;
    border-right: 1px solid #cecece;
  }
  .icon-shoucang {
    font-size: 18px;
  }
  .tabbar_bottom {
    background-color: #21b97a;
    color: #fff;
  }
}
</style>
