<template>
  <div class="box">
    <Nav></Nav>
    <!-- 搜索 -->
    <van-search
      show-action
      v-model="value"
      placeholder="请输入搜索关键词"
      class="sreach"
    >
      <template #action>
        <span class="iconfont icon-ditu1"></span>
      </template>
      <template #label>
        <div class="sousuo" @click="toGityList">
          {{ $store.state.city.label }}
          ▼
        </div>
      </template>
    </van-search>
    <van-tabbar
      id="shaixuan"
      class="shaixuan"
      v-model="active"
      active-color="#21b97a"
      :fixed="false"
    >
      <van-tabbar-item @click="showTJ = true"
        >区域<span>▼</span></van-tabbar-item
      >
      <van-tabbar-item @click="showTJ = true"
        >方式<span>▼</span></van-tabbar-item
      >
      <van-tabbar-item @click="showTJ = true"
        >租金<span>▼</span></van-tabbar-item
      >
      <van-tabbar-item @click="showTJ = true"
        >筛选<span>▼</span></van-tabbar-item
      >
    </van-tabbar>
    <van-popup
      class="popup1"
      v-model="showTJ"
      :style="{ height: '50%' }"
      get-container="#shaixuan"
    >
      <van-picker
        show-toolbar
        :columns="columns"
        toolbar-position="bottom"
        class="change"
      >
        <template #confirm>
          <van-button type="primary" color="#21b97a">确认</van-button>
        </template>
        <template #cancel>
          <van-button type="default">取消</van-button>
        </template>
      </van-picker>
    </van-popup>
  </div>
</template>

<script>
import Nav from '@/components/navbar'
import { SearchHousecondition } from '@/api'
export default {
  data () {
    return {
      search: '',
      value: '',
      active: 0,
      showTJ: false,
      columns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ]
    }
  },
  methods: {
    toGityList () {
      this.$router.push({
        path: '/city'
      })
    },
    async SearchHousecondition () {
      const res = await SearchHousecondition(this.$store.state.city.value)
      console.log(res)
    }
  },
  components: {
    Nav
  },
  created () {
    this.SearchHousecondition()
  }
}
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-style: normal;
}
.box {
  position: relative;
  .shaixuan {
    height: 40px;
    .van-tabbar-item {
      font-size: 17px;
      color: #000;
    }
  }
  :deep(.van-picker__confirm) {
    width: 100%;
    padding: 0;
    flex: 3;
    .van-button {
      width: 100%;
      height: 50px;
      font-size: 18px;
    }
  }
  :deep(.van-picker__cancel) {
    flex: 2;
    padding: 0;
    .van-button {
      width: 100%;
      height: 50px;
      font-size: 18px;
      color: '#21b97a';
    }
  }
  .sreach {
    position: absolute;
    top: 4px;
    left: 40px;
    z-index: 1;
    .icon-ditu1 {
      font-size: 25px;
      color: #fff;
    }
  }
  :deep(.van-field__left-icon) {
    padding-left: 4px;
    border-left: 1px solid #e5e5e5;
  }
  .van-search {
    padding: 0;
    background-color: transparent;
    width: 330px;
    .van-search__content {
      background-color: #fff;
    }
  }
  .popup1 {
    width: 100%;
  }
}
</style>
