import axios from 'axios';
import { Toast } from 'vant';
import store from '@/store'

// 发起一个post请求
const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  timeout: 5000,
  headers: {
    platform: 'H5'
  }
});
// Q: 不添加headers 会导致问题 | A: https://blog.csdn.net/qq_63041328/article/details/140390468

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  // 开启loding显示, 禁止背景点击(节流处理，)
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0 // 不会自动消失, 看Vant官网
  });

  // 在 添加购物车，购买，支付相关的请求的时候需要携带token ,以确认用户
  // 只要有 token ,在请求前需要
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});






// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么 (axios默认会给返回的数据包一层data，导致数据层级太深了)
  const res = response.data;
  if (res.status !== 200) {
    // toast是单例模式，后面的新的会覆盖前面的效果。
    Toast(res.message)
    // 抛出一个错误的 Promise对象
    return Promise.reject(res.message)
  } else {
    Toast.clear();
  }
  return response.data;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance;