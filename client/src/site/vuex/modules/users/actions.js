import api from '../../utils/api'

const actions = {
  fetchUsers: (context) => {
    return api.get('/api/v1/users')
      .then((response) => {
        context.commit('FETCH_USERS', response.body)
      })
      .catch((error) => context.commit('API_FAILURE', error))
  }
}

export default actions
