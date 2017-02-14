import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import SignupPage from './pages/SignupPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import CatalogPage from './pages/CatalogPage.vue'
import AdminLayout from './components/admin/Layout.vue'
import FrontendOneColLayout from './components/frontend/layouts/OneColLayout.vue'
// import FrontendFullPageLayout from './components/frontend/layouts/FullPageLayout.vue'
import CourseDetailsView from './components/frontend/CourseDetailsView.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: FrontendOneColLayout,
      children: [
        { path: '', name: 'home', component: HomePage },
        { path: 'browse', name: 'catalog', component: CatalogPage },
        { path: 'courses/:slug', name: 'course-details', component: CourseDetailsView }
      ]
    },
    {
      path: '/auth',
      component: FrontendOneColLayout,
      children: [
        {
          path: 'login',
          component: LoginPage,
          name: 'login',
          meta: { requiresAuth: false }
        },
        {
          path: 'signup',
          component: SignupPage,
          name: 'signup',
          meta: { requiresAuth: false }
        }
      ]
    },
    {
      path: '/admin',
      component: AdminLayout,
      name: 'admin',
      meta: { adminOnly: true }
    },
    {
      path: '*',
      component: FrontendOneColLayout,
      name: 'page-404',
      children: [
        { path: '', component: NotFoundPage }
      ]
    }
  ]
})

var MyUser = { admin: true }

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.adminOnly)) {
    if (!MyUser.admin) {
      next({
        path: '/'
        // query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
