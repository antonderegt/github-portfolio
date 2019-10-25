import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Repos from '../views/Repos.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/repos',
    name: 'repos',
    props: true,
    component: Repos
  },
  {
    path: '/repos/:user',
    name: 'repos',
    props: true,
    component: Repos
  },
  {
    path: '/user/:githubuser',
    name: 'user',
    props: true,
    component: User
  },
  {
    path: '/user',
    name: 'user',
    props: true,
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
