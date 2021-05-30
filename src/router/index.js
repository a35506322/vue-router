import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 可以選用上面import方式注入或者採用這方式
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/newPage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 輸出給其他頁面載入
export default router
