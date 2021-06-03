<template>
  <div class="row">
    <div class="col-4">
        <div class="list-group">
            <router-link class="list-group-item list-group-item-action" data-value="A"
            v-on:click="changeStatus" v-bind:class="{'active':link==='A'}" to="/newPage/componentA"> 元件A </router-link>
            <router-link class="list-group-item list-group-item-action" data-value="B"
            v-on:click="changeStatus" v-bind:class="{'active':link==='B'}" to="/newPage/componentB"> 元件B </router-link>
            <router-link class="list-group-item list-group-item-action" data-value="c2a"
            v-on:click="changeStatus" v-bind:class="{'active':link==='c2a'}" to="/newPage/namedView/c2a">c2a</router-link>
            <router-link class="list-group-item list-group-item-action" data-value="a2b"
            v-on:click="changeStatus" v-bind:class="{'active':link==='a2b'}" to="/newPage/namedView/a2b">a2b</router-link>
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
