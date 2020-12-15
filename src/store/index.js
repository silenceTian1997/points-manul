import { createStore } from 'vuex'

export default createStore({
  state: {
    //服务器地址
    webPath : 'http://192.168.1.141:8086',
    //登录状态
    isLogin : false,
    //登录返回信息
    loginInfo : {},
    // 主题状态
    themeState : 'staff'
  },
  mutations: {
    // wsTokenChange(state,str){
    //   state.wsToken = str
    // },

  },
  actions: {

  }
})
