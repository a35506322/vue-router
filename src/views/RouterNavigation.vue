<template>
  <button type="button" class="btn btn-secondary" v-on:click="getRoute">getRoute</button>
  <button type="button" class="btn btn-success" v-on:click="push">Push</button>
  <button type="button" class="btn btn-danger" v-on:click="replace">Replace</button>
  <button type="button" class="btn btn-warning" v-on:click="go">Go</button>
  <hr/>
  <button type="button" class="btn btn-info" v-on:click="addRoute">新增路由</button>
</template>

<script>
export default {
  methods: {
    getRoute () {
      // 取得路由屬性
      console.log(this.$route)

      // 取得路由的方法
      console.log(this.$router)
    },
    // 有歷史紀錄
    push () {
      this.$router.push('/newPage/componentA')
      // this.$router({
      //   name: '元件 A'
      // })
    },
    // 沒有歷史紀錄
    replace () {
      this.$router.replace({
        name: '元件 A'
      })
    },
    go () {
      // 上一頁前一夜
      this.$router.go(-1)
    },
    addRoute () {
      // 新增路由
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // 可以選用上面import方式注入或者採用這方式
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      })
    }
  }
}
</script>
