import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import SignupPage from './pages/SignupPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import CatalogPage from './pages/CatalogPage.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/catalog', component: CatalogPage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignupPage },
    { path: '*', component: NotFoundPage }
  ]
});

export default router;
