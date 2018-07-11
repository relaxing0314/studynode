import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import Router from './router'
import components from './components/'

Vue.use(ElementUI)

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  Router,
  components: { App },
  template: '<App/>'
})
