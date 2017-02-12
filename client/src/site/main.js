import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import App from './pages/App.vue';
import router from './router';
import store from './vuex/store';
import { sync } from 'vuex-router-sync';

sync(store, router);

Vue.use(VueResource)

const app = new Vue({
   router,
   store,
   render: h => h(App),
}).$mount('#app');
