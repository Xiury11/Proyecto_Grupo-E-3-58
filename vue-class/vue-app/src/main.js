import Vue from 'vue';
import App from './App.vue';
import router  from '@/router';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
axios.default.baseURL = 'http://localhost:3000';


Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')