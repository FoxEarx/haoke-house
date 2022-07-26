<template>
  <div>
    <form action="/">
      <van-search
        v-model="search"
        show-action
        placeholder="请输入小区或者地址"
        @search="onSearch"
        @cancel="$router.go(-1)"
        @input="SearchCommunity"
      />
      <van-cell
        :title="item.communityName"
        v-for="item in Community"
        :key="item.community"
        @click="toRelease(item.communityName, item.community)"
      />
    </form>
  </div>
</template>

<script>
import { SearchCommunity } from '@/api'
export default {
  data () {
    return {
      search: '',
      Community: '',
      timer: ''
    }
  },
  methods: {
    onSearch (val) {},
    SearchCommunity () {
      clearTimeout(this.timer)
      this.timer = setTimeout(async () => {
        try {
          const { data } = await SearchCommunity({
            name: this.search,
            id: this.$store.state.city.value
          })
          this.Community = data.body
          console.log(this.Community)
        } catch (error) {
          console.log(error)
        }
      }, 500)
    },
    toRelease (name, value) {
      this.$router.push({
        path: '/release',
        query: {
          name,
          value
        }
      })
    }
  }
}
</script>

<style scoped lang="less"></style>
