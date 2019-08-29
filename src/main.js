import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:5001'
axios.defaults.headers.common['Authorization'] = 'whatever-you-want'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
