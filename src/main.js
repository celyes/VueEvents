import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NavBar from '@/components/NavBar.vue' // Global component

// global components
Vue.component('NavBar', NavBar);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
