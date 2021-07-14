<template>
  <div class="container mt-5">
    <div class="row">
      <UserProfile />
    </div>
  </div>
</template>

<script>
import UserProfile from "./components/UserProfile.vue";
export default {
  name: "App",
  components: {
    UserProfile,
  },
};
</script>

<style>
</style>
