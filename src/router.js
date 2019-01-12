import Vue from 'vue'
import Router from 'vue-router'

// routes
import index from './components/index.vue'
import generate from './components/list.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: index },
    { path: '/generate/:id', component: generate },
    { path: '*', redirect: '/' }
  ]
})