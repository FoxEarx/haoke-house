import request from '@/utils/request'
export const login = (username, password) => {
  return request({
    url: '/user/login',
    data: { username, password }
  })
}
