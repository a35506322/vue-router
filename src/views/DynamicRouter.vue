<template>
    <div>DynamicRouter</div>
</template>

<script>
import axios from 'axios'

export default {
  created () {
    // 可以藉由全域route來取得參數
    const seed = this.$route.params.id
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => { console.log(res) })
  }
}
</script>
