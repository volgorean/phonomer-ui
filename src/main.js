import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixin'

// handy global aliases
Vue.prototype.$s = store
Vue.prototype.$d = store.state

window.$vivi = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
