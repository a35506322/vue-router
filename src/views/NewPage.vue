<template>
  <div class="row">
    <div class="col-4">
        <div class="list-group">
            <router-link class="list-group-item list-group-item-action" data-value="A"
            v-on:click="changeStatus" to="/newPage/componentA"> 元件A </router-link>
            <router-link class="list-group-item list-group-item-action" data-value="B"
            v-on:click="changeStatus" to="/newPage/componentB"> 元件B </router-link>
            <router-link class="list-group-item list-group-item-action" data-value="c2a"
            v-on:click="changeStatus" to="/newPage/namedView/c2a">命名視圖c2a</router-link>
            <router-link class="list-group-item list-group-item-action" data-value="a2b"
            v-on:click="changeStatus" to="/newPage/namedView/a2b">命名視圖a2b</router-link>
            <router-link class="list-group-item list-group-item-action" data-value="route"
            v-on:click="changeStatus" to="/newPage/dynamicRouter/449d6dde28a9bfe3">動態路由($route)</router-link>
            <router-link class="list-group-item list-group-item-action" data-value="route_props"
            v-on:click="changeStatus" to="/newPage/dynamicRouterByProps/449d6dde28a9bfe3">動態路由(props)</router-link>
            <router-link class="list-group-item list-group-item-action" data-value="routerNavigation"
            v-on:click="changeStatus" v-bind:class="{'active':link==='routerNavigation'}" to="/newPage/routerNavigation">導覽路由</router-link>
        </div>
    </div>
    <div class="col-8">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      link: ''
    }
  },
  methods: {
    changeStatus (e) {
      const link = e.target.dataset.value
      this.link = link
    }
  }
}
</script>

<style>

</style>
