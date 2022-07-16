import { request } from '@/utils/request'
export const login = (username, password) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: { username, password }
  })
}
export const userInfo = () => {
  return request({
    url: '/user'
  })
}
export const userCollection = () => {
  return request({
    url: '/user/favorites'
  })
}
export const getHouse = (id) => {
  return request({
    url: `/houses/${id}`,
    path: { id: id }
  })
}
