<template>
  <div class="col-3 user-profile__wrapper">
    <div class="card">
      <div class="card-body">
        <CardTitle :userName="user.username" :drafts="state.drafts.length" />
        <h6 class="card-subtitle mb-2 text-muted">{{'asA' }}</h6>
        <div v-if="user.isAdmin">
          <span class="badge bg-base">Admin</span>
        </div>
        <strong>Follower : </strong>{{ state.followers }}
      </div>
    </div>
    <h5 class="my-2">
      New Teotte <span>[ {{ newTwotteCount }} / 180 ]</span>
    </h5>

    <div class="card">
      <form class="m-2" @submit.prevent="addNewTwotte">
        <div class="mb-3">
          <label for="twotteTitle" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="twotteTitle"
            v-model="state.newTwotteTitile"
            placeholder="Twotte Title"
          />
        </div>
        <div class="mb-3">
          <label for="twotteContent" class="form-label">Twotte content</label>
          <textarea
            class="form-control"
            :class="{ 'border border-danger': newTwotteCount > 180 }"
            v-model="state.newTwotteContent"
            id="twotteContent"
          ></textarea>
        </div>
        <div class="mb-2">
          <label for="twotteType" class="form-label">Twotte Type</label>
          <div class="d-flex justify-content-between align-items-center">
            <select
              v-model="state.newTwotteType"
              class="form-select form-select-sm"
              aria-label="Default select example"
            >
              <option
                :value="option.value"
                v-for="(option, index) in state.twotteTypes"
                :key="index"
              >
                {{ option.name }}
              </option>
            </select>
            <button type="submit" class="btn btn-primary bg-base my-3">
              Add
            </button>
          </div>
        </div>

        <h6 v-if="state.errors.length">
          Please correct the following error(s):
        </h6>
        <h6
          class="text-danger fs-6"
          v-for="(error, index) in state.errors"
          :key="index"
        >
          {{ error }}
        </h6>
      </form>
    </div>
  </div>
  <div class="col user-__wrapptwotteser">
    <ol class="list-group list-group-numbered">
      <TwotteItem
        v-for="twotte in user.twottes"
        :key="twotte.id"
        @fav="favouriteToggel"
        :username="user.username"
        :twotte="twotte"
      />
    </ol>
  </div>
</template>

<script>
import TwotteItem from "../components/TwotteItem.vue";
import CardTitle from "../components/CardTitle.vue";
import { reactive, computed } from "vue";
import { useStore } from "vuex";
//import { useRoute } from "vue-router";
//import {users} from "../assets/users";

export default {
  name: "UserProfile",
  components: {
    TwotteItem,
    CardTitle,
  },
  setup() {
    const store = useStore();
    const c_user = computed(() => store.state.user);
    const user=c_user.value;
    const state = reactive({
      newTwotteTitile: "",
      newTwotteContent: "",
      newTwotteType: "instance",
      twotteTypes: [
        { value: "draft", name: "Draft" },
        { value: "instance", name: "Instance" },
      ],
      drafts: [],
      errors: [],
      followers: 0,
    });
    const newTwotteCount = computed(() => state.newTwotteContent.length);
    function favouriteToggel(id) {
      let index = id - 1;
      user.twottes[index].fav = !user.twottes[index].fav;
    }

    function addNewTwotte() {
      state.errors = [];
      if (state.newTwotteTitile.trim() === "") {
        state.errors.push("Titile required.");
      }
      if (state.newTwotteTitile.length < 3) {
        state.errors.push("Titile must be 3 letter or more.");
      }
      if (state.newTwotteContent.trim() === "") {
        state.errors.push("Titile required.");
      }
      if (state.newTwotteContent.length < 5) {
        state.errors.push("Content must be 5 letter or more.");
      }
      if (state.errors.length === 0) {
        const newTwotte = {
          id: user.twottes.length + 1,
          title: state.newTwotteTitile,
          content: state.newTwotteContent,
          fav: false,
        };
        if (state.newTwotteType === "draft") {
          state.drafts.push(newTwotte);
        } else {
          user.twottes.push(newTwotte);
        }

        (state.newTwotteContent = ""), (state.newTwotteTitile = "");
      }
    }

    return {
      state,
      newTwotteCount,
      favouriteToggel,
      addNewTwotte,
      user,
    };
  },
};
</script>

<style lang="scss" scoped>
h5 {
  & span {
    font-size: 12px;
    font-weight: 100;
  }
}
select {
  height: 39px;
  width: 150px;
}
</style>
