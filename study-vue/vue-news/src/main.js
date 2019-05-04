import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js';

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  //router : router 의 축약 (a:b의 값이 같으면 a,로 표현이 가능하다)
  router , 
}).$mount('#app')
