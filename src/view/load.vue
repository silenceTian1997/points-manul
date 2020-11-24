<template>
  <div class="load-page">
    
    <div class="title"></div>
    <div class="theme"></div>
    <div class="theme-logo"></div>
    <div class="go" @click="handleGologin"></div>
    <div class="check-system" @click="handleCheckSystem">ififi</div>
  </div>
</template>

<script>
import { toRefs, reactive, onMounted } from "vue";
import { setLocal , getLocal ,getInstance} from '../utils/utils'
export default {
  setup() {
    const instance = getInstance()
    const state = reactive({
      load: "loading",
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
      instance.$router.push('login')
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
 }
 .title{
   width: 2rem;
   height: 1rem;
   margin: 0 auto;
   background-color: #fff;
 }
 .theme{
  width: 3rem;
  height: 2rem;
  margin:  0 auto;
  background-color: red;
 }
 .theme-logo{
   width: 1rem;
   height: 1rem;
 }
 .go{
   width: .5rem;
   height: .5rem;
   background-color: pink;
   border-radius: 50%;
   overflow: hidden;
 }
 .check-system{
   font-size: .2rem;
   color: orange;
 }

</style>