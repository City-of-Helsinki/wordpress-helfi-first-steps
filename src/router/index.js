import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import CheckList from '@/views/CheckList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checklist',
    name: 'CheckList',
    component: CheckList
  }
]

const router = new VueRouter({
  routes
})

export default router
