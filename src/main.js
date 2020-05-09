import Vue from 'vue'
import App from './App.vue'
import store from './store/store' // vuex
import router from './router' // router
import 'bootstrap'; // bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// global components

import NavBar from '@/components/NavBar.vue' // Global component
import NotificationContainer from '@/components/NotificationContainer.vue'


Vue.config.productionTip = false;

Vue.component('NavBar', NavBar)
Vue.component('NotificationContainer', NotificationContainer)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
