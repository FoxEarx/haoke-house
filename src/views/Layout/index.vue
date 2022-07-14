<template>
  <div>
    <router-view></router-view>
    <van-tabbar active-color="#21b97a" route v-model="active" class="Tabbar">
      <van-tabbar-item to="/layout/home" class="iconfont icon-shouye"
        >首页</van-tabbar-item
      >
      <van-tabbar-item to="/layout/search" class="iconfont icon-sousuo"
        >找房</van-tabbar-item
      >
      <van-tabbar-item to="/layout/information" class="iconfont icon-zixun"
        >咨询</van-tabbar-item
      >
      <van-tabbar-item to="/layout/my" class="iconfont icon-wode"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.Tabbar {
  .iconfont {
    font-size: 22px;
  }
  :deep(.van-tabbar-item__text) {
    font-size: 12px;
  }
}
</style>
