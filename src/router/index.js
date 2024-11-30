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
  {path: '/prodetail/:id', component: ProDetail}
]

const router = new VueRouter({
  routes
})

export default router
