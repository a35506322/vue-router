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
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        // 子路徑不需要 '/'
        path: 'componentA',
        name: '元件 A',
        component: () => import('../views/ComponentA.vue')
      },
      {
        path: 'componentB',
        name: '元件 B',
        component: () => import('../views/ComponentB.vue')
      },
      {
        path: 'namedView',
        name: '命名視圖',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue')
            }
          },
          {
            path: 'a2b',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB.vue')
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 輸出給其他頁面載入
export default router
