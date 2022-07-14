<template>
  <div class="login">
    <!-- navbar头部栏 -->
    <van-nav-bar title="账号登录" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <!-- form表单 -->
    <van-form @submit="onSubmit" class="form">
      <van-field
        v-model="username"
        :name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请填写账号', trigger: 'onChange' }
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        :name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码', trigger: 'onChange' }
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div>
      <p>还没有账号，快去注册~</p>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data () {
    return {
      username: '',
      password: '',
      login: false
    }
  },

  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async onSubmit () {
      try {
        const res = await login(this.username, this.password)
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true
        })
        this.$toast.success(res.data.description)
        localStorage.setItem('token', res.data.body.token)
        this.$router.push({
          path: '/layout/my'
        })
        console.log(res)
      } catch (e) {
        console.log('错误', e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  div {
    text-align: center;
    p {
      font-size: 14px;
      color: #666;
    }
  }
  :deep(.van-nav-bar__content) {
    background-color: #21b97a;
  }
  :deep(.van-nav-bar__title) {
    color: #fff;
    font-size: 18px;
  }
  .van-icon {
    color: #fff;
    font-size: 18px;
  }
}
.form {
  .van-button--block {
    background-color: #21b97a;
    height: 50px;
  }
  .van-button__content {
    font-size: 18px;
  }
  :deep(.van-field__control) {
    height: 60px;
    font-size: 17px;
  }
}
</style>
>
