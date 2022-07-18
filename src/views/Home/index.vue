<template>
  <div class="box">
    <div class="top">
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><a href="javascript:;"><img src="./img/1.png" alt="" /></a
        ></van-swipe-item>
        <van-swipe-item
          ><a href="javascript:;"><img src="./img/2.png" alt="" /></a
        ></van-swipe-item>
        <van-swipe-item
          ><a href="javascript:;"><img src="./img/3.png" alt="" /></a
        ></van-swipe-item>
      </van-swipe>
      <van-search
        show-action
        v-model="value"
        placeholder="请输入搜索关键词"
        class="sreach"
      >
        <template #action>
          <span class="iconfont icon-ditu1"></span>
        </template>
        <template #label>
          <div class="sousuo">北京 ▼</div>
        </template>
      </van-search>
      <div class="nav">
        <div>
          <span class="iconfont icon-zufang1"></span>
          <h3>整租</h3>
        </div>
        <div>
          <span class="iconfont icon-31haoyou"></span>
          <h3>合租</h3>
        </div>
        <div>
          <span class="iconfont icon-ditu"></span>
          <h3>地图找房</h3>
        </div>
        <div>
          <span class="iconfont icon-zufang"></span>
          <h3>去出租</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch (val) {
      this.$toast(val)
    },
    onCancel () {
      this.$toast('取消')
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  background-color: #f6f5f6;
  .top {
    position: relative;
    .my-swipe {
      .van-swipe-item {
        height: 212px;
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        // background-color: #39a9ed;
        img {
          width: 100%;
        }
      }
    }
    .sreach {
      position: absolute;
      top: 10px;
      left: 20px;
      .icon-ditu1 {
        font-size: 25px;
        color: #fff;
      }
    }
    :deep(.van-field__left-icon) {
      padding-left: 4px;
      border-left: 1px solid #e5e5e5;
    }
    .van-search {
      background-color: transparent;
      width: 350px;
      .van-search__content {
        background-color: #fff;
      }
    }
    .nav {
      background-color: #fff;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      div {
        padding: 10px 0;
        span {
          display: block;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #f2fbf7;
          text-align: center;
          line-height: 60px;
        }
        h3 {
          text-align: center;
          font-size: 14px;
          color: #333;
          font-weight: normal;
        }
        .iconfont {
          font-size: 35px;
          color: #05b069;
        }
      }
    }
  }
}
</style>
