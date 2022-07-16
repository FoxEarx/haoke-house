<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
    <ul>
      <li>
        <div class="img"><img src="" alt="" /></div>
        <div>
          <h4></h4>
          <p></p>
          <span></span>
          <span></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
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
li {
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  border-bottom: 1px solid #eee;
  img {
    width: 160px;
    height: 80px;
    background-color: red;
  }
}
</style>
