import Vue from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueRouter from 'vue-router'
import Register from './views/Register.vue'
import Logged from './views/Logged.vue'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
  {
   path:'/',
   name:'Home',
   component: Home
  },
  {
  path:'/register',
  name:'Register',
  component: Register,
  },
  {
  path:'/logged',
  name:'Logged',
  component: Logged,
}

]   

const router = new VueRouter({
  routes
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
