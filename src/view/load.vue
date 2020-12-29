<template>
  <div class="load-page">
    <div class="title">
          <img src="../static/images/user/title.png" alt="">

    </div>
    <div class="theme">
      <img src="../static/images/user/theme.png" alt="">
    </div>
    <div class="theme-logo">
      <img src="../static/images/user/logo.png" alt="">
    </div>
    <div class="go" @click="handleGologin">
      <!-- <img src="../static/images/login/go.png" alt=""> -->
    </div>
    <!-- <div class="check-system" @click="handleCheckSystem">if you are user</div> -->
  </div>
</template>

<script>
import { toRefs, reactive, onMounted } from "vue";
import { setLocal , getLocal ,getInstance} from '../utils/utils'
export default {
  setup() {
    const instance = getInstance()
    const state = reactive({
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

    const handleGologin = ()=>{
      console.log('ggg')
      let logined = instance.$store.state.isLogin || getLocal('logined')
      if(logined){
        instance.$router.push('home')
      }else{
        instance.$router.push('login')
      }
    }
    return {
      ...toRefs(state),
      handleCheckSystem,
      handleGologin
    }
  },
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

</style>