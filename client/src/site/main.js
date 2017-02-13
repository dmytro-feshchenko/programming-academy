import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './components/App.vue'
import router from './router'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
