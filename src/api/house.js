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
// 小区关键词查询
export const SearchCommunity = (body) => {
  return request({
    url: '/area/community',
    params: body
  })
}
//

export const SearchHousecondition = (id) => {
  return request({
    url: '/houses/condition',
    params: { id }
  })
}
