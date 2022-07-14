import { request } from '@/utils/request'
export const login = (username, password) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: { username, password }
  })
}
export const userInfo = (token) => {
  console.log(token)
  return request({
    url: '/user',
    method: 'GET',
    headers: { authorization: token }
  })
}
