import Vue from 'vue'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'
import App from './components/App.vue'
import router from './router'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import auth from './vuex/modules/auth/actions'

sync(store, router)

Vue.use(VueResource)
Vue.use(VueI18n)

// ready translated locales
var locales = {
  en: require('./lang/en'),
  ru: require('./lang/ru'),
  ua: require('./lang/ua'),
  ja: require('./lang/ja')
}

// set lang
Vue.config.lang = 'en'
Vue.config.fallbackLang = 'en'

// set locales
Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang])
})

Vue.http.interceptors.push((request, next) => {
  console.log('ENTERING ROUTE')
  // add jwt token to all requests
  request.headers.set('Authorization', 'Bearer ' + window.localStorage.getItem('id_token'))
  // request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNDg3NDI3Nzc3LCJuYW1lIjoiRG1pdHJ5aSBGZXNjaGVua28ifQ.7mLA4_B7rnyvrMoJ2bSSro_AItI7Le7nK2mcxi1IsMU')
  console.log(request)
  // skip storing token refresh requests
  next((response) => {
    // check for expired token response, if expired,
    // refresh token and resubmit original request
    if (response.headers['Authorization']) {
      const token = response.headers['Authorization']
      window.localStorage.setItem('id_token', token)
    }
    auth.checkExpiredToken(response, request).then((response) => {
      return response
    })
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
