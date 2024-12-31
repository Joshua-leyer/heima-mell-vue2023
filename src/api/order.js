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

export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 20,   // 20：自提
    couponId: 0,
    isUsePoints: 0,
    payType: 10,  // 余额支付
    ...obj
  })
}



// 订单类型，all-全部，payment-待支付，delivery-待发货，received-待收货，comment-待评价

export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}