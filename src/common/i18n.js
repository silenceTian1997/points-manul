import { createI18n } from 'vue-i18n'
export default  createI18n({
  locale: 'en',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': require('./lang/zh'),   // 中文语言包
    'en': require('./lang/en')    // 英文语言包
  }
})