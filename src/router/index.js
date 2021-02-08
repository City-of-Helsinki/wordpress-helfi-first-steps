import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Result from '@/views/Result'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  }
]

const router = new VueRouter({
  routes
})

export default router
