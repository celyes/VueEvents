import axios from 'axios'

var instance = axios.create({
  baseURL : 'http://localhost:3000', // https://my-json-server.typicode.com/celyes/VueEvents
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return instance.get('/events')
  },
  getEvent(id) {
    return instance.get('/events/'+id)
  },
  postEvent(event) {
    return instance.post('/events', event)
  }
}
