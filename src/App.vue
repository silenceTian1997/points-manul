<template>
  <div class="container" :class="themeStyle === 'staff'?'staff':'admin'">
    <!-- <pointsTopbar :barTitle="'Hello'" :barPoints="1213"/> -->
    <router-view class="content-view"></router-view>
    <pointsTabbar v-if="tabbarHidd"/>
    <!-- {{ num }}
    <van-button @click="clickAdd" type="info">点击加一</van-button> -->
  </div>
 
</template>

<script>
import { onMounted, reactive, toRefs,  } from "vue"
// watch ,watchEffect 
// import { useRoute } from 'vue-router'
import { setLocal , getLocal , getInstance } from './utils/utils'
import pointsTabbar from './components/points-tabbar.vue'
import pointsTopbar from './components/points-topbar.vue'
// import {apiIndex}from './request/api.js'
export default {
  name: "App",
  components: {
    pointsTabbar,
    pointsTopbar
  },
  setup(props,context) {
    const instance = getInstance()

    const state = reactive({
      num: 0,
      transitionName: 'slide-left',
      tabbarHidd:false,
      themeStyle:'staff'
    });

    onMounted(() => {
      // console.log(123)
      // apiIndex()
     let orgtheme =  getLocal('theme') 
      if(!orgtheme) {
       setLocal('theme','staff')
       orgtheme = 'staff'
      }
       state.themeStyle = orgtheme
    
      remJS(window, document);
    });

    const remJS = function (win, doc) {
      if (!win.addEventListener) return;
      function setFont() {
        var html = document.documentElement;
        var k = 750;
        html.style.fontSize = (html.clientWidth / k) * 100 + "px";
      }
      setFont();
      setTimeout(function () {
        setFont();
      }, 300);
      doc.addEventListener("DOMContentLoaded", setFont, false);
      win.addEventListener("resize", setFont, false);
      win.addEventListener("load", setFont, false);

      var resizeEvt =
        "orientationchange" in window ? "orientationchange" : "resize";

      window.addEventListener(resizeEvt, remJS, false);
      document.addEventListener("DOMContentLoaded", remJS, false);
      if (
        typeof WeixinJSBridge == "object" &&
        typeof WeixinJSBridge.invoke == "function"
      ) {
        handleFontSize();
      } else {
        document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
      }
      function handleFontSize() {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke("setFontSizeCallback", { fontSize: 0 });
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on("menu:setfont", function () {
          WeixinJSBridge.invoke("setFontSizeCallback", { fontSize: 0 });
        });
      }
    };

    const clickAdd = function () {
      console.log(1, state.num);
      state.num = state.num + 1;
    };

    // watchEffect(() => {
    //   const number = `my age is ${state.num}`
    //   // console.log(number, this.$router)
    // })   
    
    // const  rouet =  useRoute()  
    // const  theme  =  instance.$store.state.themeState
    // watch([rouet,theme],([curpath,curtheme],[prvpath,pavtheme])=>{
    //     console.log(curpath.meta, curtheme ,prvpath,pavtheme,'path');
    //     console.log(theme,'theme')
    //     // 是否 隐藏tabbar
    // })

    return {
      ...toRefs(state),
      clickAdd,
    };
  },
   watch: {
    "$store.state.themeState"(newval, olval) {
      console.log(newval);
      this.themeStyle = newval

    },
    '$route'(newpath,oldpath){
      console.log(newpath,oldpath)
       this.tabbarHidd = !newpath.meta.tabbarhidd

    }
}

};
</script>

<style>
.container{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #3e2b27;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content-view{
  width: 100%;
  /* height: 100%; */
  overflow-y: scroll;
  flex: 1;
  padding-bottom: .4rem;
}
.staff{
  background: #3e2b27 ;
}
.admin {
  /* background: #c2bbab ; */
  background-size: cover;
  background-image: url(./static/images/login/di1.png);
}
</style>
