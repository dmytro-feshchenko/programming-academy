import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  users: {
    models: [],
    pagination: {
      totalCount: 0,
      perPage: 15,
      page: 1
    }
  },
  user: {
    profile: null
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
