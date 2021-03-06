import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import Monitor from './views/Monitor.vue'
import Prog from './views/Prog.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },/*
    {
      path: '/monitor',
      name: 'monitor',
      component: Monitor
    },*/
    {
      path: '/prog',
      name: 'prog',
      component: Prog
    }
  ]
})
