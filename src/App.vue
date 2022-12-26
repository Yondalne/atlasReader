
<template>
  <div class="flex flex-row">
    <side-bar></side-bar>
    <div class="pl-16 w-full">
      <nav-bar></nav-bar>
      <home-page></home-page>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import SideBar from "./components/user/SideBar.vue"
import NavBar from "./components/user/NavBar.vue"
import HomePage from "./pages/user/HomePage.vue"

export default {
  components: {
    NavBar,
    HomePage,
    SideBar,
  }
}

</script>