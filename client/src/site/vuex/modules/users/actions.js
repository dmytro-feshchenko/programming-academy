import api from '../../utils/api'

const actions = {
  fetchUsers: (context, { page = 1, perPage = 25 }) => {
    return api.get(`/api/v1/users?page=${page}&per-page=${perPage}`)
      .then((response) => {
        context.commit('FETCH_USERS', {
          users: response.body,
          totalCount: response.headers.get('X-Pagination-Count'),
          perPage: response.headers.get('X-Pagination-Limit'),
          page: response.headers.get('X-Pagination-Page')
        })
      })
      .catch((error) => context.commit('API_FAILURE', error))
  },
  fetchUserDetails: (context, userId) => {
    return api.get(`/api/v1/users/${userId}`)
      .then((response) => {
        context.commit('FETCH_USER_DETAILS', response.body)
      })
      .catch((error) => context.commit('API_FAILURE', error))
  },
  deleteUser: (context, userId) => {
    return api.delete(`/api/v1/users/${userId}`)
      .then((response) => {
        context.commit('DELETE_USER')
      })
      .catch((error) => context.commit('API_FAILURE', error))
  }
}

export default actions
