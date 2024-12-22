import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user.js'
import cart from './modules/cart.js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 你的状态
    count: 3,
    userInfo : {
      token: '',
      userId: ''
    }
  },
  mutations: {
    // 你的变更方法
    increment(state) {
      state.count++;
    },
    setUserInfo(state, obj) {
      state.userInfo = obj
    }
  },
  actions: {
    // 你的异步操作
  },
  getters: {
    token(state) {
      return state.user.userInfo.token
    }
  },
  modules: {
    // 你的模块
    user,
    cart
  }
});