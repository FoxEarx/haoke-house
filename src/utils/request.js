import axios from 'axios'
const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  method: 'POST',
  timeout: 4000
})
export default request
