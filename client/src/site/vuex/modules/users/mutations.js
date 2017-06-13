import {
  FETCH_USERS,
  FETCH_USER_DETAILS,
  DELETE_USER
} from '../../mutation-types'

export default {
  [FETCH_USERS] (state, { users, totalCount, perPage, page }) {
    state.users.models = users
    state.users.pagination.totalCount = totalCount
    state.users.pagination.perPage = perPage
    state.users.pagination.page = page
  },
  [FETCH_USER_DETAILS] (state, user) {
    state.user.profile = user
  },
  [DELETE_USER] (state) {
  }
}
