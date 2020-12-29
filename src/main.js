import { createApp } from 'vue'
import App from './App.vue'
import { Toast , Button , Notify , Form , Field , Cell, List , Search  ,Collapse, CollapseItem , Uploader , Icon ,Picker  ,Popup } from 'vant';
import './static/css/base.css'
import 'vant/lib/index.css';
import store from './store'
import router from './router'
// require('./mockjs')

const Vue = createApp(App)
Vue.use(Toast).use(Notify).use(Button).use(Form).use(Field).use(List).use(Cell).use(Search ).use(Collapse).use(CollapseItem).use(Uploader).use(Icon).use(Picker).use(Popup)
Vue.use(router).use(store)
// 路由拦截

router.beforeEach((to,from,next)=>{
  console.log('to:',to,'from',from,next)
  let isLogin = localStorage.getItem('logined')
  if(to.meta.white){
    next()
  }else{
    //判断有没有授权
    if(store.state.isLogin || isLogin ){
      next()
    }else{
      router.push('login')
    }
  }

})


Vue.mount('#app')
