import Vue from 'vue'
import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import App from './App'
import router from './router'
import components from './components/'

// 引入store
import createStore from './store'

Vue.use(Vant)
Vue.use(Vuex)
const store = createStore()

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

router.beforeEach((to, from, next) => {
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
