import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    host: process.env.NODE_ENV == 'development'? 'https://cjh.nbd.com.cn': 'https://cjh.nbd.com.cn',
    URL: process.env.NODE_ENV == 'development'? 'https://luyan.nbd.com.cn': 'https://luyan.nbd.com.cn',
    article: {}
  },
  mutations: {
      SET_ARTICLE: (state, payload) => {
          state.article = payload
      }
  },
  actions: {
      setArticle({commit}, payload) {
          commit('SET_ARTICLE', payload)
      }
  },
  modules: {
  }
})
