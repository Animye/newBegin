const first = {
  state: {
    a: 0
  },
  mutations: {
    addFirst(state) {
      state.a++
    }
  },
  actions: {
    addFirst({ commit }) {
      commit('addFirst')
    }
  }
}
export default first
