<template>
  <div>
    <Nav :nav="'收藏列表'"></Nav>
    <List :arr="userCollectionList"></List>
  </div>
</template>

<script>
import { userCollection } from '@/api/user'
import List from '@/components/List'
import Nav from '@/components/navbar'

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
    // onClickLeft () {
    //   this.$router.back()
    // },
    // 获取列表数据
    async getuserCollection () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await userCollection()
        this.userCollectionList = res.data.body
        console.log(this.userCollectionList)
        console.log('列表信息', res)
        this.$toast.clear() // 关闭加载
      } catch (e) {
        console.log(e)
        this.$toast.fail('请求列表失败')
      } finally {
        this.$toast.clear()
      }
    }
  },
  components: {
    List,
    Nav
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
