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
    events: [],
    eventsTotal: 0, 
    event: {}
  },
  mutations: {
    ADD_EVENT: function(state, event) {
      state.events.push(event)
    },
    SET_EVENTS: function(state, events) {
      state.events = events
    },
    SET_EVENT: function(state, event){
      state.event = event
    }
    ,
    SET_TOTAL_EVENTS: function(state, total){
      state.eventsTotal = total
    }
  },
  actions: {
    createEvent: function({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents: function({ commit }, {perPage, page}) {
      EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS', response.data)
        commit('SET_TOTAL_EVENTS', response.headers['x-total-count'])
      })
      .catch(error => {console.error('There was an error: ' + error.message)})
    },
    fetchEvent: function({ commit, getters }, id) {
      let event = getters.getEventById(id)

      if(event) {
        commit('SET_EVENT', event)
      }else{
        EventService.getEvent(id)
        .then(response => { commit('SET_EVENT', response.data) })
        .catch(error => {console.error(error)});
      }
    }
  },
  getters: {
    getEventById: state => id => state.events.find(event => event.id === id)
  }
})

/*

*/
