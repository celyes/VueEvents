import EventService from '@/services/EventService'

export const namespaced = true
export const state = {
  events: [],
  eventsTotal: 0,
  event: {}
}
export const mutations = {
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
  }
export const actions = {
  createEvent: function({ commit, dispatch }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
      const notification = {
        type: 'success',
        message: 'Event created successfully!'
      }
      dispatch('notification/add', notification, { root: true })
    })
    .catch(error => {
      const notification = {
        type: 'danger',
        message: 'There was an error: ' + error.message
      }
      dispatch('notification/add', notification, { root: true })
      throw error
    })
  },
  fetchEvents: function({ commit, dispatch }, {perPage, page}) {
    EventService.getEvents(perPage, page)
    .then(response => {
      commit('SET_EVENTS', response.data)
      commit('SET_TOTAL_EVENTS', response.headers['x-total-count'])
    })
    .catch(error => {
      const notification = {
        type: 'danger',
        message: 'There was an error: ' + error.message
      }
      dispatch('notification/add', notification, { root: true })
    })
  },
  fetchEvent: function({ commit, dispatch, getters }, id) {
    let event = getters.getEventById(id)

    if(event) {
      commit('SET_EVENT', event)
    }else{
      EventService.getEvent(id)
      .then(response => { commit('SET_EVENT', response.data) })
      .catch(error => {
        const notification = {
          type: 'danger',
          message: 'There was an error: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      });
    }
  }
}
export const getters = {
  getEventById: state => id => state.events.find(event => event.id === id)
}
