import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // 根目录跳转
  {
    path: '/',
    redirect: '/layout/home'
  },
  // 登录页面路由
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  // 主页面
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: 'my',
        component: () => import('@/views/My')
      },
      {
        path: 'information',
        component: () => import('@/views/Information')
      },
      {
        path: 'search',
        component: () => import('@/views/Search')
      },
      {
        path: 'home',
        component: () => import('@/views/Home')
      }
    ]
  },
  // 我的收藏
  {
    path: '/mycollection',
    component: () => import('@/views/MyCollection')
  },
  // 房源信息
  {
    path: '/detail',
    component: () => import('@/views/House')
  },
  // 我的出租
  {
    path: '/rent',
    component: () => import('@/views/MyRent')
  },
  // 城市列表
  {
    path: '/city',
    component: () => import('@/views/CityList')
  }
]

const router = new VueRouter({
  routes
})

export default router
