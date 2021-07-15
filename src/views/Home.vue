<template>
 <h2>Home</h2>
 <ul class="list-group">
  <li class="list-group-item" v-for="(user,index) in allUsers" :key="index">
    <router-link :to="{name:'UserProfile',params:{'userId':user.id}}">{{fullName(user)}}</router-link>
  </li>
  
</ul>
</template>

<script>
// @ is an alias to /src
import {users} from "../assets/users";

export default {

  name: "Home",
 
  setup() {
      const allUsers=users;
      function fullName(user){
        return `${user.firstName} ${user.lastName}`;
      }
      return{
        allUsers,
        fullName
      }
    }
};
</script>
