import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'
import Admin from '../views/Admin.vue'
import store from '../store'
import { users } from '../assets/users';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/userprofile/:userId', name: 'UserProfile', component: UserProfile },
  { path: '/admin/', name: 'Admin', component: Admin, meta: { 'requiresAdmin': true } },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {

  

  
    store.dispatch('User/setUser', users[2]);
  
 

  const isAdmin =  store.state.User.user.isAdmin ;

  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({ name: 'Home' })
  else next()
})

export default router
