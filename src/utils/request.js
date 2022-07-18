import axios from 'axios'
import store from '@/store'
export const request = axios.create({
  baseURL: 'http://liufusong.top:8080'
  // timeout: 10000
})
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = store.state.user.token
    if (token) {
      config.headers.authorization = token
    }
    return config
  },
  (error) => {
    return Promise.request(error)
  }
)
