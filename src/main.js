import Vue from 'vue'
import VueKonva from 'vue-konva'
Vue.use(VueKonva)
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
