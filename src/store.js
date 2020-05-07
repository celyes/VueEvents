import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService'

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
    ],
    events: []
  },
  mutations: {
    ADD_EVENT: function(state, event) {
      state.events.push(event)
    },
    SET_EVENTS: function(state, events) {
      state.events = events
    }
  },
  actions: {
    createEvent: function({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvent: function({ commit }) {
      EventService.getEvents()
      .then(response => {
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {console.error('There was an error: ' + error.message)})
    }
  }
})

/*

*/
