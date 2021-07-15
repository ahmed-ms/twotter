<template >
  <nav class="navbar navbar-expand-lg navbar-light text-light bg-base mb-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Twotter</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/userprofile/10"
              >Profile</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/admin">Admin</router-link>
          </li>
        </ul>
        <div v-if="user" class="d-flex">@_{{ user.username }}</div>
        <div v-else class="d-flex">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "NavBar",
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);

    return {
      user,
    };
  },
};
</script>
<style lang="scss">
</style>