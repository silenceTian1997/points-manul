<template>
  <div class="load-page">
    <div class="title">
          <img src="../static/images/user/title.png" alt="">

    </div>
    <div class="logo-view" v-if="load">
    <div class="theme">
      <img src="../static/images/user/theme.png" alt="">
    </div>
    <div class="theme-logo">
      <img src="../static/images/user/logo.png" alt="">
    </div>
    </div>
    <div class="lang-view" v-else>
        <div class="lang-item" :class="langInd == 0 ? 'lang-item-active' : ''" @click="handleCheckLang('zh',0)">中文</div>
        <div class="lang-item" :class="langInd == 1 ? 'lang-item-active' : ''" @click="handleCheckLang('en',1)">EN</div>
    </div>
    <div class="go" @click="load? handletoLang():handleGologin()">
      <!-- <img src="../static/images/login/go.png" alt=""> -->
    </div>
    <!-- <div class="check-system" @click="handleCheckSystem">if you are user</div> -->
  </div>
</template>

<script>
import { toRefs, reactive, onMounted ,Vue} from "vue";
import { setLocal , getLocal ,getInstance} from '../utils/utils'

export default {
  setup() {
    const instance = getInstance()
    const state = reactive({
        load:true,
        langInd:0,
        lang:'zh'
    })

    onMounted(() => {
      console.log(instance)
    })

    const handleCheckSystem = ()=>{
      let prvTheme = getLocal('theme')
      let theme = prvTheme === 'admin'? 'staff' :'admin'
      // 配合vuex
      instance.$store.state.themeState = theme
      setLocal('theme',theme)
    }
    const handletoLang = ()=>{
      state.load = false
    }
    const handleCheckLang = (lang,ind)=>{
      state.langInd = ind
      state.lang = lang
    }
    // const handleGologin = ()=>{
    //   if (state.lang == 'zh') {
    //     document.title = '费列罗积分系统';    
    //     instance.$store.state.lang = 'zh'
    //     // instance.$i18n.locale = 'zh'
    //     console.log(instance,'123')
    //   }else{
    //     document.title = 'FERRERO-POINTS';    
    //     instance.$store.state.lang = 'en'
    //     // instance.$i18n.locale = 'en'

    //   }
    //   setLocal('lang',state.lang)
    //   let logined = instance.$store.state.isLogin || getLocal('logined')
    //   if(logined){
    //     instance.$router.push('home')
    //   }else{
    //     instance.$router.push('login')
    //   }
    // }
    return {
      ...toRefs(state),
      handleCheckSystem,
      handletoLang,
      handleCheckLang,
      // handleGologin
    }
  },
 
  methods:{
     handleGologin(){
       console.log(this.lang)
      if (this.lang == 'zh') {
        document.title = '费列罗积分系统';    
        this.$store.state.lang = 'zh'
        this.$i18n.locale = 'zh'
      }else{
        document.title = 'Credits Exchange System';    
        this.$store.state.lang = 'en'
        this.$i18n.locale = 'en'

      }
      setLocal('lang',this.lang)
      let logined = this.$store.state.isLogin || getLocal('logined')
      if(logined){
        this.$router.push('home')
      }else{
        this.$router.push('login')
      }
    }
  }
}
</script>

<style scoped>
 .load-page{
   width: 100%;
   height: 100%;
   padding-top: 14vh;
   /* 端屏 .5rem */
 }
 .title{
   width: 3.17rem;
   height: .4rem;
   margin: 0 auto 11vh;
   /* background-color: #fff; */
 }
 .theme{
  width: 3.82rem;
  height: 2.02rem;
  margin:  0 auto 5vh;
  /* background-color: red; */
 }
 .theme-logo{
   width: 2.47rem;
   height: 2.2rem;
   margin:  0 auto 11vh;
 }
 .go{
   width: 1.1rem;
   height: 1.1rem;
   border-radius: 50%;
   overflow: hidden;
   background-image: url(../static/images/user/go.png);
   background-size: 100%;
   background-repeat: no-repeat;
   margin: 0 auto ;
 }
 .check-system{
   width: fit-content;
   margin: 0 auto;
   font-size: .26rem;
   font-weight: 600;
   color: #3c2a26;
   text-decoration: #3c2a26;
   text-decoration-line: underline;
 }
 img{
   width: 100%;
   vertical-align: top;

 }
 .lang-view{
   width: 3.5rem;
   margin: 0 auto;
   margin-bottom: 29vh;
   /* display: flex; */
 }
 .lang-item{
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: .4rem;
   color: #fb882b;
   height: 1rem;
   border-radius: 1rem;
   background-color: #3c2a26;
   border: .01rem solid #652f23;
   margin-bottom: .4rem;
 }
.lang-item-active{
  background-color: #4f342c;
}
</style>