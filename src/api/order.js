import request from '@/utils/request.js';


// mode : cart  -> obj { cartIds }
// mode : buyNow -> obj { goodsId goodsNum goodsSkuId }
// 需要看一下接口文档，知道不同模式下发送请求携带的参数不同
export const checkOrder = (mode, obj) => {
  // log(`checkOrder api`, mode , obj)  有趣，js log 只能输出最后一个对象
  return request.get('/checkout/order', {
    params: {
      mode,
      delivery: 10,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }
  })
}