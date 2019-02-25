import httpbinapi from '@/service/api/httpbin-api'

export default {
  namespaced: true,
  state: {
    gets: {}
  },
  mutations: {
    SET_GETS(state, payload) {
      state.gets = payload
    }
  },

  actions: {
    get(context, config) {
      return httpbinapi.get()
        .then(gets => {
          context.commit('SET_GETS', gets)
        })
        .catch(err => console.log(err))
        .finally(() => {
          this.loading = false
        })
    }
  }
}
