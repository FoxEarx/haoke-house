import { request } from '@/utils/request'

// 获取城市列表
export const getCityList = (level) => {
  return request({
    url: '/area/city',
    params: { level }
  })
}
// 获取热门城市列表
export const getHotCityList = () => {
  return request({
    url: '/area/hot'
  })
}
// 获取具体城市房源信息
export const getCityHouse = (name) => {
  return request({
    url: '/area/info',
    params: { name }
  })
}
