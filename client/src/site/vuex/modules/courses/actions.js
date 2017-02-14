import api from '../../utils/api'

const actions = {
  fetchCourses: (context) => {
    return api.get('/api/v1/courses')
      .then((response) => {
        context.commit('FETCH_COURSES', response)
      })
      .catch((error) => context.commit('API_FAILURE', error))
  },
  createCourse: (context, data) => {
    return api.post(data.url, data.request)
      .then((response) => context.commit('CREATE_COURSE', response))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  updateCourse: (context, data) => {
    return api.put(data.url, data.request)
      .then((response) => context.commit('UPDATE_COURSE', response))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  deleteCourse: (context, url) => {
    return api.delete(url)
      .then((response) => context.commit('DELETE_COURSE', response))
      .catch((error) => context.commit('API_FAILURE', error))
  }
}

export default actions
