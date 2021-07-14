<template>
  <div class="col-3 user-profile__wrapper">
    <div class="card">
      <div class="card-body">
        <CardTitle :userName="user.username" :drafts="drafts.length" />
        <h6 class="card-subtitle mb-2 text-muted">{{ fullName }}</h6>
        <div v-if="user.isAdmin">
          <span class="badge bg-primary">Admin</span>
        </div>
        <strong>Follower : </strong>{{ followers }}
      </div>
      <form class="m-2" @submit.prevent="addNewTwotte">
        <h5>New Teotte <span>[ {{ newTwotteCounet}} / 180 ]</span></h5>
        <div class="mb-3">
          <label for="twotteTitle" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="twotteTitle"
            v-model="newTwotteTitile"
            placeholder="Twotte Title"
          />
        </div>
        <div class="mb-3">
          <label for="twotteContent" class="form-label">Twotte content</label>
          <textarea
            class="form-control"
            :class="{'border border-danger' :newTwotteCounet >180}"
            v-model="newTwotteContent"
            id="twotteContent"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-">
          <label for="twotteType" class="form-label">Twotte Type</label>
          <select
            v-model="newTwotteType"
            class="form-select"
            aria-label="Default select example"
          >
            <option
              :value="option.value"
              v-for="(option, index) in twotteTypes"
              :key="index"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary my-3">Add</button>
        <h6 v-if="errors.length">Please correct the following error(s):</h6>
        <h6
          class="text-danger fs-6"
          v-for="(error, index) in errors"
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
import TwotteItem from "./TwotteItem.vue";
import CardTitle from "./CardTitle.vue";
export default {
  name: "UserProfile",
  components: {
    TwotteItem,
    CardTitle
  },
  data() {
    return {
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
      user: {
        username: "ahmedak",
        firstName: "Ahmed",
        lastName: "Othman",
        email: "ahmedak@gmail.com",
        isAdmin: true,
        twottes: [
          { id: 1, title: "Amazing", content: "Ahmed is amazing", fav: false },
          { id: 2, title: "Greate", content: "Allah Akbar", fav: false },
          { id: 3, title: "Cool", content: "Cool times with ansa", fav: false },
        ],
      },
    };
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
     newTwotteCounet(){
      return this.newTwotteContent.length;
    }
  },
 
  methods: {
    favouriteToggel(id) {
      let index = id - 1;
      this.user.twottes[index].fav = !this.user.twottes[index].fav;
    },

    addNewTwotte() {
      this.errors = [];
      if (this.newTwotteTitile.trim() === "") {
        this.errors.push("Titile required.");
      }
      if (this.newTwotteTitile.length < 3) {
        this.errors.push("Titile must be 3 letter or more.");
      }
      if (this.newTwotteContent.trim() === "") {
        this.errors.push("Titile required.");
      }
      if (this.newTwotteContent.length < 5) {
        this.errors.push("Content must be 5 letter or more.");
      }
      if (this.errors.length === 0) {
        const newTwotte = {
          id: this.user.twottes.length + 1,
          title: this.newTwotteTitile,
          content: this.newTwotteContent,
          fav: false,
        };
        console.log(newTwotte);
        if (this.newTwotteType === "draft") {
          this.drafts.push(newTwotte);
        } else {
          this.user.twottes.push(newTwotte);
        }

        this.newTwotteContent="",
        this.newTwotteTitile=""
      }
    },
    followUser() {
      this.followers++;
    },
  },
};
</script>

<style lang="scss" scoped>
h5{
  & span{
    font-size: 12px;
    font-weight: 100;
  }
}
</style>
