import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'router-active',
  routes: Routes
})

export default router
