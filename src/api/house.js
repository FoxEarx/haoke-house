import { request } from '@/utils/request'
export const releaseHouseInfo = () => {
  return request({
    url: '/houses/params'
  })
}

// 发布房源

export const rental = (body) => {
  return request({
    method: 'POST',
    url: '/user/houses',
    data: body
  })
}
