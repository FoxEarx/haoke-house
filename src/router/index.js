import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // 根目录跳转
  {
    path: '/',
    redirect: '/layout'
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
  }
]

const router = new VueRouter({
  routes
})

export default router
