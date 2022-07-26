import Vue from 'vue'
import Vuex from 'vuex'
import {
  getToken,
  setToken,
  getHouseCode,
  setHouseCode,
  getCityinfo,
  setCityinfo
} from '@/utils'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getToken() || {},
    houseCode: getHouseCode() || {},
    city: getCityinfo() || {
      label: '北京',
      pinyin: 'beijing',
      short: 'bj',
      value: 'AREA|88cff55c-aaa4-e2e0'
    }
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
      setToken(payload)
    },
    setHouseCode (state, payload) {
      state.houseCode = payload
      setHouseCode(payload)
    },
    setCity (state, payload) {
      state.city = payload
      setCityinfo(payload)
    }
  }
})
