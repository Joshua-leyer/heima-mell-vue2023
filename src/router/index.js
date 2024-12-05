import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Search from '@/views/search'
import SearchList from '@/views/searchlist'
import ProDetail from '@/views/prodetail'
import Pay from '@/views/pay'
import Login from '@/views/login'
import MyOrder from '@/views/myorder'

import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'
import store from '@/store'


Vue.use(VueRouter)

const routes = [
  {path: '/login', component: Login},
  {path: '/', component: Layout, 
   redirect: '/home',
   children: [
      {path: '/home',component: Home},
      {path: '/category',component: Category},
      {path: '/cart',component: Cart},
      {path: '/user',component: User},
  ]},
  {path: '/search', component: Search},
  {path: '/searchlist', component: SearchList},
  {path: '/prodetail/:id', component: ProDetail},
  {path: '/pay', component: Pay}
]

const router = new VueRouter({
  routes
})

// 定义一个数组，用来存放所有需要权限访问的页面
const authUrl = [
  '/pay', '/myorder'
]

// 所有路由在真正被访问到之前，都会经过全局前置守卫函数；只有守卫函数放行了，才会到达对应的页面。
router.beforeEach((to, from ,next) => {
  log(`beforeEach log...`,to)
  if (!authUrl.includes(to.path)) {
    // 非权限页面，直接放行
    next()
    return
  }
  //权限页面，需要验证
  const token = store.state.user.userInfo.token
  log(`获取到的 token 是`, token)
  if(token) {
    log(`有 token 放行`)
    next()
  } else {
    log(`没有 token , 返回/login页面`)
    next('/login')
  }
  
})
export default router
