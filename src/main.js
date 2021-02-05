import { createApp } from 'vue'
import App from './App.vue'
import { Toast , Button , Notify , Form , Field , Cell, List , Search  ,Collapse, CollapseItem , Uploader , Icon ,Picker  ,Popup ,Locale  } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';
import './static/css/base.css'
import 'vant/lib/index.css';
import store from './store'
import i18n from './common/i18n'
import router from './router'

// require('./mockjs')


const Vue = createApp(App)
Vue.use(Toast).use(Notify).use(Button).use(Form).use(Field).use(List).use(Cell).use(Search ).use(Collapse).use(CollapseItem).use(Uploader).use(Icon).use(Picker).use(Popup)
Vue.use(router).use(store)
Vue.use(i18n)

let lang = localStorage.getItem('lang') || 'zh'
console.log(lang,'132')
if(lang == "en"){
  Locale.use('en-US', enUS);
}



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
