import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      name:'load',
      redirect:'/load',
      meta:{
        index:1,
      },
      component: () => import('../components/HelloWorld.vue')
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
 
  ]
})

export default  router