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
      path: '/statement',
      name:'statement',
      meta:{
        index:1,
        tabbarhidd:true,
        white:true
      },
      component: () => import('../view/statement.vue')
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
        barTitle:'Personal center',
        barTitleZh:'个人中心',
      },
      component: () => import('../view/mine.vue')
    },
    {
      path: '/home',
      name:'home',
      meta:{
        index:1,
        barTitle:'Product Page',
        barTitleZh:'礼品兑换页',
      },
      component: () => import('../view/home.vue')
    },
    {
      path: '/mine/order',
      name:'order',
      meta:{
        index:1,
        barTitle:'My Order',
        barTitleZh:'我的订单',

      },
      component: () => import('../view/order.vue')
    },
    {
      path: '/mine/rank',
      name:'rank',
      meta:{
        index:1,
        barTitle:'Ranking',
        barTitleZh:'排名',
      },
      component: () => import('../view/rank.vue')
    },
    {
      path: '/mine/shoppingCar',
      name:'shoppingCar',
      meta:{
        index:1,
        barTitle:'Shopping Cart',
        barTitleZh:'购物车',
      },
      component: () => import('../view/shopping-car.vue')
    },
    {
      path: '/mine/pointsView',
      name:'pointsView',
      meta:{
        index:1,
        barTitle:'My credits',
        barTitleZh:'我的积分',
      },
      component: () => import('../view/points-view.vue')
    },   
     {
      path: '/mine/exchange',
      name:'exchange',
      meta:{
        index:1,
        barTitle:'Order Details',
        barTitleZh:'订单详情',
      },
      component: () => import('../view/exchange.vue')
    },
     {
      path: '/mine/check',
      name:'check',
      meta:{
        index:1,
        tabbarhidd:true,
        white:true
        // barTitle:'check'
      },
      component: () => import('../view/check.vue')
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