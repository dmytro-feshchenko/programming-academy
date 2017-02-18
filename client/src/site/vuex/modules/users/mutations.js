import {
  FETCH_USERS
} from '../../mutation-types'

export default {
  [FETCH_USERS] (state, users) {
    state.users = users
  }
}
