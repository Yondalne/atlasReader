
<template>
  <div class="flex flex-row relative h-screen">
    <side-bar></side-bar>
    <div class="pb-16 flex-1 h-full overflow-auto scroll-smooth">
      <nav-bar></nav-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import SideBar from "./components/user/SideBar.vue"
import NavBar from "./components/user/NavBar.vue"

export default {
  components: {
    NavBar,
    SideBar,
  }
}

</script>