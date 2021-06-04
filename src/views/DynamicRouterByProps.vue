<template>
    <div>DynamicRouterByProps</div>
    <p ref="myP"></p>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  created () {
    // 可以透過index.js傳進來
    const seed = this.id
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => { this.$refs.myP.innerText = JSON.stringify(res) })
  }
}
</script>
