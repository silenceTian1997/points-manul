<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view></router-view>

<van-button type="primary" @click="clickAdd">主要按钮</van-button>
{{num}}
</template>

<script>

import { onMounted, reactive ,toRefs} from 'vue'
export default {
  name: 'App',

  setup(){

    const state = reactive({
        num : 0,
    })

    onMounted(()=>{
      // console.log(123)
      remJS(window,document)
    })
    const  remJS = function (win, doc) {
        if (!win.addEventListener) return;
        function setFont() {
            var html = document.documentElement;
            var k = 750;
            html.style.fontSize = html.clientWidth / k * 100 + "px";
        }
        setFont();
        setTimeout(function () {
            setFont();
        }, 300);
        doc.addEventListener('DOMContentLoaded', setFont, false);
        win.addEventListener('resize', setFont, false);
        win.addEventListener('load', setFont, false);
        
       var  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

       window.addEventListener(resizeEvt, remJS, false);
        document.addEventListener('DOMContentLoaded', remJS, false);
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        handleFontSize();
    } else {
        document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
    }
    function handleFontSize() {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function() {
            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        });
    }

    }

    const clickAdd = function(){
      console.log(1,state.num)
      state.num =  state.num + 1
    }

    return {
      ...toRefs(state),
      clickAdd
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
