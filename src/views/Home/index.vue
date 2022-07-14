<template>
  <div>
    <div class="swipe">
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
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
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
</style>
