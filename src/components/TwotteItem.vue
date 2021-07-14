<template >
  <li
    class="list-group-item d-flex m-1 justify-content-between align-items-start"
    @click="favourite(twotte.id)"
  >
    <div class="ms-2 me-auto">
      <h6 class="text-secondary">@_{{ username }}</h6>
      <div class="fw-bold">{{ twotte.title }}</div>
      {{ twotte.content }}
    </div>
    <i v-if="twotte.fav" class="bi bi-heart-fill text-warning"></i>
    <i v-else class="bi bi-heart"></i>
  </li>
</template>
<script>
export default {
  name: "TwotteItem",
  props: {
    twotte: {
      type: Object,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  methods: {
    favourite(id) {
      this.$emit("fav", id);
    },
  },
};
</script>
<style scoped>
li:hover {
  cursor: pointer;
  box-shadow: 8px 8px 8px rgb(204, 199, 250);
  transition: all 0.5s ease;
  transform: scale(1.05, 1.05);
}
</style>