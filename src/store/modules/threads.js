import axios from "axios"

export default {
  namespaced: true,

  state: {
    items: []
  },
  getters: {

  },
  actions: {
    fetchThreads ({ state, commit}, data) {
      return axios.get(`/api/v1/threads?meetupId=${data}`).then(res => {
        const threads = res.data
        commit('setItems', { resource:'threads', items:threads }, { root: true})
        return state.items
      })
    }
  },
  mutations: {
    
  }
}