import Vue, { CreateElement } from 'vue';

import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h: CreateElement) => h(App)
}).$mount('#app');
