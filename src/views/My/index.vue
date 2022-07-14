<template>
  <div class="mybox">
    <div class="box">
      <img class="mainimg" src="./img/mybgc.png" alt="" />
      <div class="login">
        <div class="touxiang">
          <img src="./img/avatar.png" alt="" />
        </div>
        <p>游客</p>
        <van-button type="primary" size="small" @click="login"
          >去登陆</van-button
        >
      </div>
    </div>
    <div class="list">
      <ul>
        <li>
          <div>
            <span class="iconfont icon-shoucang"></span>
            <p>我的收藏</p>
          </div>
        </li>
        <li>
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

export default {
  data () {
    return {
      token: ''
    }
  },
  async created () {
    const res = await userInfo(localStorage.getItem('token'))
    console.log(res)
  },
  methods: {
    login () {
      this.$router.push({
        path: '/login'
      })
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
    height: 310px;
  }
  position: relative;
  .mainimg {
    width: 100%;
    height: 191px;
  }
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
  }
  .list {
    padding-top: 20px;
    ul {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
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
