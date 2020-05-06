import Vue from 'vue'
import App from './App.vue'
import store from './store' // vuex
import router from './router' // router
import 'bootstrap'; // bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '@/components/NavBar.vue' // Global component

// global components
Vue.component('NavBar', NavBar);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
