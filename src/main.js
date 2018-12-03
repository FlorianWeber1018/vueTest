import Vue from 'vue'
import VueKonva from 'vue-konva'
Vue.use(VueKonva)
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import { mapActions} from 'vuex'
new Vue({
  router,
  store,
  render: h => h(App),
  created: function () {
    this.getModuleManager();

    this.interval = setInterval(function () {
      this.getModuleManager();
    }.bind(this), 500); 
  },
  methods: {
    ...mapActions([
      "getModuleManager"
    ])
  }
}).$mount('#app')
