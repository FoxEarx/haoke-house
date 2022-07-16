<template>
  <div class="box">
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <div class="houseimg"><img src="" alt="" /></div>
    <div class="houseinfo">
      <h3>1</h3>
      <span class="wz">123</span>
      <div class="infomain">
        <div class="jj">
          <div class="sum">123</div>
          <i>/月</i>
          <div class="zhushi">租金</div>
        </div>
        <div class="jj">
          <div class="sum">四方</div>
          <div class="zhushi">租金</div>
        </div>
        <div class="jj">
          <div class="sum">123</div>
          <div class="zhushi">租金</div>
        </div>
      </div>
      <div class="lx">
        <div>装修:<span>精装</span></div>
        <div>朝向:<span>北</span></div>
        <div>楼层:<span>高层楼</span></div>
        <div>类型:<span>普通住宅</span></div>
      </div>
    </div>
    <div class="location">
      <div class="name">
        <p>小区：</p>
        <span>天山星城</span>
      </div>
      <div class="map"><img src="" alt="" /></div>
      <div class="some">
        <p>房屋配套</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getHouse } from '@/api/user'
export default {
  data () {
    return {
      house: []
    }
  },
  created () {
    // console.log(this.$route)
    this.getHouse()
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
.box {
  background-color: #f6f5f6;
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
}
.houseinfo {
  background-color: #fff;
  padding: 15px;
  h3 {
    font-weight: 400;
    font-size: 16px;
    color: #333;
    margin: 16px 0;
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
    margin: 0 10px 10px 10px;
    padding: 15px 0;
    border-bottom: 1px solid #cecece;
  }
}
</style>
