import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  mutations: {},
  actions: {}
})

/*

*/
