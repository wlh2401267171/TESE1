import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    login: window.sessionStorage.getItem('user_login') == 'true' ? true : false
  },
  mutations: {
    setlogin(state, status) {
      window.sessionStorage.setItem('user-login', status);
      state.login = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
