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
  getEvents(perPage, page) {
    return instance.get('/events?_page='+page+'&_limit='+perPage)
  },
  getEvent(id) {
    return instance.get('/events/'+id)
  },
  postEvent(event) {
    return instance.post('/events', event)
  }
}
