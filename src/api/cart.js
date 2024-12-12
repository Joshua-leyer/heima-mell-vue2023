import request from "@/utils/request.js";

export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId, goodsNum, goodsSkuId
  })
}