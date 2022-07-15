<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
:deep(.van-nav-bar__title) {
  color: #fff;
  font-size: 18px;
}
:deep(.van-nav-bar__content) {
  background-color: #21b97a;
}
:deep(.van-icon-arrow-left) {
  color: #fff;
  font-size: 16px;
}
</style>
