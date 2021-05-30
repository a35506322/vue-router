<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/newPage">新增頁面</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
      <router-view></router-view>
  </div>
</template>

<style lang="scss">

</style>
