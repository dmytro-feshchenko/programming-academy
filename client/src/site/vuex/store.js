import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import coursesModule from './modules/courses/store'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    coursesModule: coursesModule
  },
  strict: debug,
  middlewares: debug ? [createLogger] : []
})
