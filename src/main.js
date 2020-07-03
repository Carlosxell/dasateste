import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { cleanStrCharacters } from './filters/filters';

Vue.config.productionTip = false;

Vue.filter('cleanStrCharacters', cleanStrCharacters);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
