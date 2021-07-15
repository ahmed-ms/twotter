<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <div class="row">
        <router-view />
      </div>
    </div>
  </div>
</template>



<script>
import NavBar from "./components/NavBar.vue";


export default {
  components: {
    NavBar,
  },
  setup() {
   
    
  },
};
</script>


<style lang="scss">
#app {
  margin: 0;
}
</style>
