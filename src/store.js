import Vue from 'vue'
import Vuex from 'vuex'
import Vapi from "vuex-rest-api"

Vue.use(Vuex)

/*
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
*/
const backend = new Vapi({
  baseURL: "http://192.168.178.91:18080",
    state: {
      ModuleManager: {}
    },
    getters: {
      ModuleManager: state => state.ModuleManager
    }
  })
  // Step 3
  .get({
    action: "getModuleManager",
    property: "ModuleManager",
    path:  "/ModuleManager"
  })
  // Step 4
  .getStore()

// Step 5
const store = new Vuex.Store(backend);
export default store;