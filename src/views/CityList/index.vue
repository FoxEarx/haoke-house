<template>
  <div>
    <Nav :nav="'城市列表'"></Nav>
    <van-index-bar :index-list="indexList" select highlight-color="green">
      <!-- 当前城市 -->
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell :title="nowCity" />

      <!-- 热门城市 -->
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        :title="item.label"
        v-for="item in hotCityList"
        :key="item.value"
        @click="clickCity(item)"
      />
      <!-- 所有城市 -->
      <div v-for="(item, index) in indexList1" :key="index">
        <van-index-anchor :index="item">{{ item }}</van-index-anchor>
        <van-cell
          :title="ele.label"
          v-for="(ele, index) in cityList"
          :key="index"
          v-show="ele.short.substring(0, 1) === item.toLowerCase()"
          @click="clickCity(ele)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import Nav from '@/components/navbar'
import { getCityList, getHotCityList } from '@/api/'
export default {
  data () {
    return {
      indexList: [
        '#',
        '热',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      indexList1: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      cityList: [],
      nowCity: '北京',
      hotCityList: []
    }
  },
  components: {
    Nav
  },
  methods: {
    // 获取城市列表
    async getCityList () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        // 城市列表
        const { data } = await getCityList(1)
        this.cityList = data.body
        console.log('城市列表数据', data)
        // 热门城市列表
        const res = await getHotCityList()
        this.hotCityList = res.data.body
        console.log('热门城市列表', res)
      } catch (error) {
        console.log(error)
        this.$toast.fail('获取城市列表失败')
      }
      this.$toast.clear()
    },
    async clickCity (city) {
      this.nowCity = city.label
      // 城市房源信息
      this.$store.commit('setCity', city)
      console.log(city)
      this.$router.go(-1)
    }
  },
  created () {
    if (this.$store.state.city.value) {
      this.nowCity = this.$store.state.city.label
    }
    this.getCityList()
  }
}
</script>

<style scoped lang="less">
.van-cell {
  height: 50px;
  padding: 0 15px;
  .van-cell__title {
    font-size: 16px;
    color: #333;
    line-height: 50px;
    font-weight: normal;
  }
}
:deep(.van-index-anchor) {
  font-size: 14px;
  color: #999;
}
:deep(.van-index-bar__index) {
  margin: 0 10px 6px 0;
  padding: 0;
  font-size: 14px;
  color: #333;
  border-radius: 50%;
}
:deep(.van-index-bar__index--active) {
  background-color: #21b97a;
}
</style>
