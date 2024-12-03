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
  actions: {},
  getters: {},
  modules:{}
}