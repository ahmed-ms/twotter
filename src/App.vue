<template>
  <div class="">
    <NavBar />
    <div class="container">
      <div class="row">
        <UserProfile />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfile from "./components/UserProfile.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    UserProfile,
    NavBar,
  },
};
</script>

<style lang="scss">
#app {
  display: block;
}
</style>
