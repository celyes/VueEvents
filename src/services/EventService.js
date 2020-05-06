import axios from 'axios'

var instance = axios.create({
  baseURL : 'https://my-json-server.typicode.com/celyes/VueEvents',
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
    return instance.get('/events/'+id);
  }
}
