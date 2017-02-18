import Vue from 'vue'
// import api from '../../utils/api'

const actions = {
  refreshToken: (context, request) => {
    return new Promise((resolve, reject) => {
      Vue.http.post('/api/v1/login', {
        username: 'myuser',
        password: '1234'
      }, {
        emulateJSON: true
      })
        .then((response) => {
          window.localStorage.setItem('id_token', response.data.token)
          context.commit('REFRESH_TOKEN', response.body)
          // Promise.resolve(response)

          // resend original request and resolve the response
          Vue.http(request).then((newResponse) => {
            resolve(newResponse)
          })
        })
        .catch((error) => {
          // context.commit('API_FAILURE', error)
          reject(error)
        })
    })
  },
  checkExpiredToken: (response, request) => {
    return new Promise((resolve, reject) => {
      // response.data.error.code === 'TOKEN-EXPIRED'
      if (response.status === 401) {
        actions.refreshToken(this, request).then(function (response) {
          resolve(response)
        })
      }
      resolve(response)
    })
  }
}

export default actions
