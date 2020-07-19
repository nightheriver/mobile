import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:{}
  },
  mutations: {
    saveuserinfo(state,vals){
      state.userinfo = vals
    }
  },
  actions: {
  },
  modules: {
  }
})
