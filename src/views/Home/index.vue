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
      <!-- 搜索框 -->
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
          <div class="sousuo" @click="toGityList">
            {{ city }}
            ▼
          </div>
        </template>
      </van-search>
      <!-- nav -->
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
      <div class="group">
        <h3>租房小组</h3>
        <span>更多</span>
      </div>
      <van-grid column-num="2" gutter="10px" direction="horizontal">
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      city: '北京'
    }
  },
  methods: {
    onSearch (val) {
      this.$toast(val)
    },
    onCancel () {
      this.$toast('取消')
    },
    toGityList () {
      this.$router.push({
        path: '/city'
      })
    }
  },
  created () {
    if (localStorage.getItem('CITY')) {
      this.city = JSON.parse(localStorage.getItem('CITY'))
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
    .group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 10px 15px 10px;
      font-size: 15px;
      height: 25px;
      h3 {
        color: #333;
        font-size: 15px;
      }
      span {
        font-size: 14px;
        color: #787d82;
      }
    }
  }
}
</style>
