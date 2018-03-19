import Vue from 'vue'
import Router from 'vue-router'

const mainView = () => import('@/views/main')
const product = () => import('@/views/product')
const checkout = () => import('@/views/checkout')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainView',
      component: mainView
    },
    {
      path: '/product/:slug',
      name: 'product',
      component: product
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkout
    }
  ]
})
