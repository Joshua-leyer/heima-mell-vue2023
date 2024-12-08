import request from '@/utils/request'


//  params 属性: 在 Axios 请求的配置对象中，params 属性用于指定查询参数。
//  Axios 会自动将这些参数转换为查询字符串，并附加到 URL 末尾。
//  例如： https://example.com/search?query=vue&sort=asc
export const getGoodsList = (obj) => {
  const {categoryId, goodsName, page} = obj;
  return request.get('/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}