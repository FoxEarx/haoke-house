import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全部Vue
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入适配
import 'amfe-flexible'
// 引入icon font字体图标
import '@/assets/fonts/iconfont.css'
Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
