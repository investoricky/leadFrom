import Vue from 'vue'
// import VueAxios from 'vue-axios'
// import axios from 'axios'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
// Vue.use(VueAxios, axios)

const getDefaultState = () => {
  return {
    token: '',
    user: {}
  }
}

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn: state => {
      return state.token
    },
    getUser: state => {
      return state.user
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    RESET: state => {
      Object.assign(state, getDefaultState())
    }
  },
  actions: {
    login: ({ commit }, { token, user }) => {
      commit('SET_TOKEN', token)
      commit('SET_USER', user)
    },
    logout: ({ commit }) => {
      commit('RESET', '')
    }
  },
  modules: {
  }
})
