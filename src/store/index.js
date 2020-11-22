import { createStore } from 'vuex'

export default createStore({
  state: {
    //服务器地址
    webPath : 'http://ep.zerom.cn/',
    //登录状态
    isLogin : false,
    //登录返回信息
    loginInfo : {},

  },
  mutations: {
    // wsTokenChange(state,str){
    //   state.wsToken = str
    // },

  },
  actions: {

  }
})
