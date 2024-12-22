import { getCartList } from '@/api/cart';
import { getInfo, setInfo } from '@/utils/storage.js';


export default {
  namespaced: true,
  state() {
    return {
      cartList: []
    }
  },
  mutations: {
    setCartList(state, newList) {
      state.cartList = newList
    }
  },
  actions: {
    async getCartAction(context) {
      const {data} = await getCartList();
      data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', data.list)
      // log(res);
    }
  },
  getters: {
    // 所有商品的总数
    cartTotal(state) {
      return state.cartList.reduce((sum, item, index) => sum + item.goods_num, 0)
    },
    // 选中的商品项
    selCartList(state) {
      return state.cartList.filter(item => item.isChecked)
    },
    // 选中总数
    /**
     * ？ 怎么在一个 getters 访问另一个 getters 
     */
    selCount(state, getters) {
      return getters.selCartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    // 选中总价
    selPrice(state, getters) {
      return getters.selCartList.reduce((sum, item) => {
        return sum + item.goods_num * item.goods.goods_price_min
      }, 0).toFixed(2) //保留两位小数
    }
  }
}