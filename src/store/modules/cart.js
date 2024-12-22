import { changeCount, getCartList } from '@/api/cart';
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
    },
    toggleCheck(state, goodId) {
      let good = state.cartList.find(item => item.goods_id === goodId)
      good.isChecked = !good.isChecked
    },
    toggleAllCheck(state, flag) {
       state.cartList.forEach(item => {
        item.isChecked = flag
       })
    },
    changeCount(state, { goodsId, goodsNum }) {
      // 根据 id 找到对应商品， 根据传过来的 goodsNum 修改到 goods_num
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.goods_num = goodsNum 
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
    },
    // joshua:"这里实际项目中不能这样.应该后端修改成功以后前端在跟着变"
    async changeCountAction(context, obj) {
      const { goodsId, goodsNum, goodsSkuId } = obj
      // 这里本地修改
      context.commit('changeCount', {goodsId, goodsNum})
      //  后台同步数据
      let res = await changeCount(goodsId, goodsNum, goodsSkuId)
      log(`goods Count update : `, res)
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
    },
    isAllchecked(state) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}