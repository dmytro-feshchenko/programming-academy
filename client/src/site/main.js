import Vue from 'vue'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'
import App from './components/App.vue'
import router from './router'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'

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
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
