<template>
  <div>
    <ul>
      <li
        v-for="item in arr"
        :key="item.houseCode"
        @click="toHouse(item.houseCode)"
      >
        <div class="img">
          <img :src="`http://liufusong.top:8080${item.houseImg}`" alt="" />
        </div>
        <div class="rightBox">
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
          <span class="wz">{{ item.tags[0] }}</span>
          <span class="money">{{ item.price }}<i>元/月</i></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      required: true
    }
  },
  methods: {
    toHouse (id) {
      console.log(id)
      localStorage.setItem('houseCode', id)
      this.$store.commit('setHouseCode', id)
      this.$router.push({
        path: '/detail',
        query: { id }
      })
    }
  }
}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-style: normal;
}
li {
  display: flex;
  align-items: center;
  width: 375px;
  height: 120px;
  border-bottom: 1px solid #eee;
  img {
    width: 106px;
    height: 80px;
  }
  .rightBox {
    flex: 1;
    width: 215px;
    padding-left: 12px;
    h4 {
      font-size: 15px;
      color: #394043;
    }
    p {
      font-size: 12px;
      color: #afb2b3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span {
      display: block;
    }
    .wz {
      width: 60px;
      height: 20px;
      font-size: 12px;
      text-align: center;
      line-height: 12px;
      color: #39becd;
      background: #e1f5f8;
      border-radius: 3px;
      padding: 4px 5px;
    }
    .money {
      font-size: 16px;
      font-weight: bolder;
      color: #fa5741;
      i {
        margin-left: 5px;
        font-size: 12px;
      }
    }
  }
}
</style>
