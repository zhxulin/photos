import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: { title: '首页' }
  }
]

const router = new VueRouter({
  mode: 'history', // require service support
  base:"/photos",
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
