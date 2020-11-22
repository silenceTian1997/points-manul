<template>
  <div>
    <router-view></router-view>
    <pointsTabbar/>
    {{ num }}
    <van-button @click="clickAdd">点击加一</van-button>
  </div>

</template>

<script>
import { onMounted, reactive, toRefs, watch ,watchEffect  } from "vue"
import { useRoute } from 'vue-router'
import pointsTabbar from './components/points-tabbar.vue'
export default {
  name: "App",
  components: {
    pointsTabbar
  },
  setup(props,context) {
    const state = reactive({
      num: 0,
      transitionName: 'slide-left'
    });
    console.log(context.root)
    onMounted(() => {
      // console.log(123)
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

    watchEffect(() => {
      const number = `my age is ${state.num}`
      // console.log(number, this.$router)
    })   
    
    const  rouet =  useRoute()  
    const num =  state.num
    watch([rouet,num],([rouet,num],[prvpath,prvnum])=>{
        console.log(prvpath.path,prvnum,'path');
    })
    return {
      ...toRefs(state),
      clickAdd,
    };
  },

};
</script>

<style>
</style>
