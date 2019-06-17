import Vue from 'vue'
import Vuex from 'vuex'
import first from './first'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    first
  }
})
export default store
