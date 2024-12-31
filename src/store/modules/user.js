import { getInfo, setInfo } from '@/utils/storage.js';


export default {
  namespaced: true,
  state() {
    return {
      userInfo: getInfo() 
    }
  },
  mutations: {
    setUserInfo(state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  },
  actions: {
    logout(context) {
      // 退出功能作两个步骤
      context.commit('setUserInfo', {})
      // 这里需要跨模块调用 mutations  , vuex 中的命名空间知识点
      context.commit('cart/setCartList', {}, { root: true });
    }
  },
  getters: {},
  modules:{}
}