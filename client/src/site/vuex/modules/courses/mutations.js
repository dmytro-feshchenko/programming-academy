import {
  FETCH_COURSES
  // CREATE_COURSE,
  // UPDATE_COURSE,
  // DELETE_COURSE
} from '../../mutation-types'

export default {
  [FETCH_COURSES] (state, courses) {
    state.courses = courses
  }
}
