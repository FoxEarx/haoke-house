import { request } from '@/utils/request'
export const releaseHouseInfo = () => {
  return request({
    url: '/houses/params'
  })
}
