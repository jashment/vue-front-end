import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import { routes } from './router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter ({
  routes,
  mode: 'history'
})

new Vue({
  apolloProvider: createProvider(),
  router,
  render: h => h(App)
}).$mount('#app')
