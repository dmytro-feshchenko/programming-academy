import Dashboard from './components/Dashboard.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Dashboard },
    { path: '*', component: NotFoundPage }
  ]
})

export default router
