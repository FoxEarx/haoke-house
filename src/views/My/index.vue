<template>
  <div class="mybox">
    <div class="box">
      <img
        class="mainimg"
        :src="isLogin ? `http://liufusong.top:8080${userData.avatar}` : imgBgc"
        alt=""
      />
      <div class="login">
        <div class="touxiang">
          <img
            :src="
              isLogin ? `http://liufusong.top:8080${userData.avatar}` : imgSrc
            "
            alt=""
          />
        </div>
        <p>{{ isLogin ? userData.nickname : '游客' }}</p>
        <van-button type="primary" size="small" @click="login">{{
          isLogin ? '退出' : '去登陆'
        }}</van-button>
        <p v-show="isLogin" class="bjzl">编辑个人资料➡</p>
      </div>
    </div>
    <div class="list">
      <ul>
        <li @click="toCollection">
          <div>
            <span class="iconfont icon-shoucang"></span>
            <p>我的收藏</p>
          </div>
        </li>
        <li @click="toRent">
          <div>
            <span class="iconfont icon-shouye"></span>
            <p>我的出租</p>
          </div>
        </li>
        <li>
          <div>
            <span class="iconfont icon-lishijilu_o"></span>
            <p>看房记录</p>
          </div>
        </li>
        <li>
          <div>
            <span class="iconfont icon-shoucang"></span>
            <p>成为房主</p>
          </div>
        </li>
        <li>
          <div>
            <span class="iconfont icon-gerenziliao"></span>
            <p>个人资料</p>
          </div>
        </li>
        <li>
          <div>
            <span class="iconfont icon-lianxiwomen"></span>
            <p>联系我们</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="join">
      <img src="./img/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { userInfo } from '@/api/user'
import imgSrc from './img/avatar.png'
import imgBgc from './img/mybgc.png'
import { removeToken } from '@/utils'

export default {
  computed: {
    isLogin () {
      return !!this.$store.state.user.token
    }
  },
  data () {
    return {
      imgBgc,
      imgSrc,
      userData: {}
    }
  },
  async created () {
    const res = await userInfo()
    // if (res.data.status !== 200) {
    //   return this.$router.push('/login')
    // }
    this.userData = res.data.body
    console.log('用户信息', res)
  },
  methods: {
    login () {
      if (this.isLogin) {
        // this.userData = []
        this.$dialog
          .confirm({
            title: '标题',
            message: '弹窗内容'
          })
          .then(() => {
            removeToken()
            this.$store.commit('setUser', {})
          })
          .catch(() => {
            // on cancel
          })
        return
      }
      this.$router.push({
        path: '/login'
      })
    },
    toCollection () {
      if (this.$store.state.user.token) {
        this.$router.push({
          path: '/mycollection'
        })
      } else {
        this.$router.push({
          path: '/login'
        })
      }
    },
    toRent () {
      if (this.$store.state.user.token) {
        this.$router.push({
          path: '/rent'
        })
      } else {
        this.$router.push({
          path: '/login'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.mybox {
  .box {
    width: 100%;
    height: 310px;
    overflow: hidden;
    .mainimg {
      width: 100%;

      // height: 191px;
    }
  }
  position: relative;

  .login {
    position: absolute;
    top: 90px;
    left: 50%;
    width: 319px;
    transform: translateX(-50%);
    height: 170px;
    background-color: #fff;
    margin: 50px 0 0;
    padding: 0 20px;
    box-shadow: 0 0 10px 3px #ddd;
    .touxiang {
      position: relative;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 5px solid #f5f5f5;
      box-shadow: 0 2px 2px #bdbdbd;
      img {
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
    p {
      margin-top: -30px;
      margin-bottom: 10px;
      font-size: 16px;
      text-align: center;
    }
    .van-button {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 8px;
      width: 69px;
      height: 30px;
    }
    .bjzl {
      margin-top: 15px;
      font-size: 12px;
      color: #999;
    }
  }
  .list {
    padding-top: 20px;
    ul {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li:active {
        background-color: rgb(187, 182, 182);
      }
      li {
        height: 95px;
        width: 125px;
        padding: 15px 0;
        div {
          width: 100%;
          height: 65px;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          p {
            font-size: 15px;
            color: #333;
          }
          span {
            font-size: 25px;
          }
        }
      }
    }
  }
  .join {
    width: 345px;
    height: 85px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
}
</style>
