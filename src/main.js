import { createApp } from 'vue'
import App from './App.vue'
import { Toast , Button , Notify , Form , Field  } from 'vant';
import './static/css/base.css'
import 'vant/lib/index.css';
import store from './store'
import router from './router'

const Vue = createApp(App)
Vue.use(Toast).use(Button).use(Notify).use(Form).use(Field)
Vue.use(router).use(store)

Vue.mount('#app')
