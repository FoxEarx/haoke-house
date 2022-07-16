<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
    <ul>
      <li
        v-for="item in userCollectionList"
        :key="item.houseCode"
        @click="toHouse(item.houseCode)"
      >
        <div class="img">
          <img :src="`http://liufusong.top:8080${item.houseImg}`" alt="" />
        </div>
        <div class="rightBox">
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
          <span class="wz">{{ item.tags[0] }}</span>
          <span class="money">{{ item.price }}<i>元/月</i></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { userCollection } from '@/api/user'
export default {
  data () {
    return {
      // 接收列表数据
      userCollectionList: []
    }
  },
  created () {
    // 调用获取列表数据函数
    this.getuserCollection()
  },
  methods: {
    // 返回上一层
    onClickLeft () {
      this.$router.back()
    },
    // 获取列表数据
    async getuserCollection () {
      // this.toast.loading({
      //   message: '加载中...',
      //   forbidClick: true
      //   // duration: 0
      // })
      try {
        const res = await userCollection()
        this.userCollectionList = res.data.body
        console.log(this.userCollectionList)
        console.log(res)
        this.$toast.clear() // 关闭加载
      } catch (e) {
        console.log(e)
        this.$toast.fail('请求列表失败')
      }
    },
    toHouse (id) {
      console.log(id)
      this.$router.push({
        path: '/detail',
        query: { id }
      })
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
  width: 375px;
  height: 120px;
  border-bottom: 1px solid #eee;
  img {
    width: 106px;
    height: 80px;
    background-color: red;
  }
  .rightBox {
    flex: 1;
    width: 215px;
    padding-left: 12px;
    h4 {
      font-size: 15px;
      color: #394043;
    }
    p {
      font-size: 12px;
      color: #afb2b3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span {
      display: block;
    }
    .wz {
      width: 46px;
      height: 20px;
      font-size: 12px;
      text-align: center;
      line-height: 12px;
      color: #39becd;
      background: #e1f5f8;
      border-radius: 3px;
      padding: 4px 5px;
    }
    .money {
      font-size: 16px;
      font-weight: bolder;
      color: #fa5741;
      i {
        margin-left: 5px;
        font-size: 12px;
      }
    }
  }
}
</style>
