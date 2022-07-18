<template>
  <div>
    <Nav :nav="'房屋管理'"></Nav>
    <div v-if="HouseList.length === 0" class="nothing">
      您还没有房源，<span>去发布房源</span> 吧~~~~
    </div>
    <List v-else :arr="HouseList"></List>
  </div>
</template>

<script>
import { getHouseList } from '@/api/user'
import List from '@/components/List'
import Nav from '@/components/navbar'
export default {
  data () {
    return {
      HouseList: []
    }
  },
  components: {
    Nav,
    List
  },
  methods: {
    async getHouseList () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: '0'
      })
      try {
        const { data } = await getHouseList()
        console.log(data)
        this.HouseList = data.body
        console.log('所有房源信息', this.HouseList)
      } catch (error) {
        this.$toast.fail('获取列表失败，请刷新重试')
        console.log(error)
      } finally {
        this.$toast.clear()
      }
    }
  },
  created () {
    this.getHouseList()
  }
}
</script>

<style lang="less" scoped>
.nothing {
  text-align: center;
  font-size: 15px;
  height: 300px;
  width: 375px;
  line-height: 300px;
  span {
    color: #33be85;
  }
}
</style>
>
