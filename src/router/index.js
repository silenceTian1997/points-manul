import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect:'/load',
   
    },
    {
      path: '/load',
      name:'load',
      meta:{
        index:1,
        tabbarhidd:true,
      },
      component: () => import('../view/load.vue')
    },
    {
      path: '/login',
      name:'login',
      meta:{
        index:1,
        tabbarhidd:true,
      },
      component: () => import('../view/login.vue')
    },
    {
      path: '/mine',
      name:'mine',
      meta:{
        index:1,
      },
      component: () => import('../view/mine.vue')
    },
    {
      path: '/home',
      name:'home',
      meta:{
        index:1,
      },
      component: () => import('../view/home.vue')
    },
    {
      path: '/mine/order',
      name:'order',
      meta:{
        index:1,

      },
      component: () => import('../view/order.vue')
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