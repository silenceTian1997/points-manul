import { createApp } from 'vue'
import { Card, Button, Toast } from 'vant'
import App from './App.vue'
import './static/css/base.css'
import 'vant/lib/index.css'; // 全局引入样式

const app = createApp(App) // 创建实例

app.use(Card).use(Button).use(Toast)

app.mount('#app')
