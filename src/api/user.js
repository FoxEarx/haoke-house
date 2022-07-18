import { request } from '@/utils/request'
// 用户登录接口
export const login = (username, password) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: { username, password }
  })
}
// 获取用户信息
export const userInfo = () => {
  return request({
    url: '/user'
  })
}
// 查看收藏列表
export const userCollection = () => {
  return request({
    url: '/user/favorites'
  })
}
// 查询房屋具体信息
export const getHouse = (id) => {
  return request({
    url: `/houses/${id}`,
    path: { id: id }
  })
}
// 查看已发布房源列表
export const getHouseList = () => {
  return request({
    url: '/user/houses'
  })
}
// 房屋是否收藏
export const isCollection = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    path: { id: id }
  })
}
// 添加收藏
export const addCollection = (id) => {
  return request({
    method: 'POST',
    url: `/user/favorites/${id}`,
    path: { id: id }
  })
}
// 删除收藏
export const delCollection = (id) => {
  return request({
    method: 'DELETE',
    url: `/user/favorites/${id}`,
    path: { id: id }
  })
}
