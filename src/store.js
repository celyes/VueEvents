import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    user: { id: "0x01", name: "Ilyes Chouia" },
    categories: [
      'food',
      'sports',
      'technology',
      'culture',
      'society',
      'entertainment'
    ]
  },
  mutations: {
    INCREMENT_COUNT: function(state, value) {
      state.count += value;
    }
  },
  actions: {
    updateCount: function({state, commit}, value) {
      if(state.user) {
        commit('INCREMENT_COUNT', value)
      }
    }
  }
})

/*

*/
