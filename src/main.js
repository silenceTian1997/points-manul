import { createApp } from 'vue'
import App from './App.vue'
import { Toast , Button , Notify , Form , Field , Cell, List , Search  ,Collapse, CollapseItem} from 'vant';
import './static/css/base.css'
import 'vant/lib/index.css';
import store from './store'
import router from './router'

const Vue = createApp(App)
Vue.use(Toast).use(Notify).use(Button).use(Form).use(Field).use(List).use(Cell).use(Search ).use(Collapse).use(CollapseItem)
Vue.use(router).use(store)

Vue.mount('#app')
