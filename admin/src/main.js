import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from './http'

import './style.scss'

Vue.config.productionTip = false

Vue.prototype.$http = http

Vue.mixin({
  computed: {
    uploadUrl () {
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders () {
      return {
        Authorization: localStorage.token ? 'Bearer ' + localStorage.token : 'Bearer '
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
