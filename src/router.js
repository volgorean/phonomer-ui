import Vue from 'vue'
import Router from 'vue-router'

// routes
import index from './components/index.vue'
import generate from './components/generate.vue'
import search from './components/search.vue'
import saved from './components/saved.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: index },
    { path: '/generate/:id', component: generate },
    { path: '/search', component: search },
    { path: '/saved', component: saved },
    { path: '*', redirect: '/' }
  ]
})