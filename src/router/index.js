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
      },
      component: () => import('../view/load.vue')
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