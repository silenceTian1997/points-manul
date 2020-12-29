import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory('/shop/index/index.html'), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    
    {
      path: '/',
      redirect:'load',
      meta:{
        white:true
      }
    },
    {
      path: '/load',
      name:'load',
      meta:{
        index:1,
        tabbarhidd:true,
        white:true
      },
      component: () => import('../view/load.vue')
    },
    {
      path: '/login',
      name:'login',
      meta:{
        index:1,
        tabbarhidd:true,
        white:true
      },
      component: () => import('../view/login.vue')
    },
    {
      path: '/mine',
      name:'mine',
      meta:{
        index:1,
        barTitle:'Personal center'
      },
      component: () => import('../view/mine.vue')
    },
    {
      path: '/home',
      name:'home',
      meta:{
        index:1,
        barTitle:'Product Page'
      },
      component: () => import('../view/home.vue')
    },
    {
      path: '/mine/order',
      name:'order',
      meta:{
        index:1,
        barTitle:'Your Order'
      },
      component: () => import('../view/order.vue')
    },
    {
      path: '/mine/rank',
      name:'rank',
      meta:{
        index:1,
        barTitle:'Ranking'
      },
      component: () => import('../view/rank.vue')
    },
    {
      path: '/mine/shoppingCar',
      name:'shoppingCar',
      meta:{
        index:1,
        barTitle:'Shopping Cart'
      },
      component: () => import('../view/shopping-car.vue')
    },
    {
      path: '/mine/pointsView',
      name:'pointsView',
      meta:{
        index:1,
        barTitle:'Points view'
      },
      component: () => import('../view/points-view.vue')
    },   
     {
      path: '/mine/exchange',
      name:'exchange',
      meta:{
        index:1,
        barTitle:'Exchange'
      },
      component: () => import('../view/exchange.vue')
    },

    {
      path: '/adminHome',
      name:'adminHome',
      meta:{
        index:1,
        tabbarhidd:true,
      },
      component: () => import('../view/admin-home.vue')
    },
    {
      path: '/adminContacts',
      name:'adminContacts',
      meta:{
        index:1,
        tabbarhidd:true,
      },
      component: () => import('../view/admin-contacts.vue')
    },
    {
      path: '/adPointsMa',
      name:'adPointsMa',
      meta:{
        index:1,
        tabbarhidd:true,
      },
      component: () => import('../view/admin-points-ma.vue')
    },
    {
      path: '/adProductMa',
      name:'adProductMa',
      meta:{
        index:1,
        tabbarhidd:true,
      },
      component: () => import('../view/admin-product-ma.vue')
    },
    {
      path: '/adProductMaPage',
      name:'adProductMaPage',
      meta:{
        index:1,
        tabbarhidd:true,
      },
      component: () => import('../view/admin-product-ma-page.vue')
    },
    {
      path: '/ref',
      name:'ref',
      meta:{
        index:1,
      },
      component: () => import('../components/ref-test.vue')
    },
 
  ]
})

export default  router