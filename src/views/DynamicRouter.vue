<template>
    <div>DynamicRouter</div>
    <p ref="myP"></p>
</template>

<script>
import axios from 'axios'

export default {
  created () {
    // 可以藉由全域route來取得參數
    // 都是route 只是一個全域一個在index.js接
    const seed = this.$route.params.id
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => { this.$refs.myP.innerText = JSON.stringify(res) })
  }
}
</script>
