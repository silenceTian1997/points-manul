<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <van-button type="primary">主要按钮</van-button>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
  />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { onMounted } from "vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    onMounted(() => {
      (
        //屏幕适应
        function (win, doc) {
          if (!win.addEventListener) return;
          // eslint-disable-next-line no-unused-vars
          var htmltext = document.documentElement;
          function setFont() {
            var htmltext = document.documentElement;
            var k = 750;
            htmltext.style.fontSize = (htmltext.clientWidth / k) * 100 + "px";
          }
          setFont();
          setTimeout(function () {
            setFont();
          }, 300);
          doc.addEventListener("DOMContentLoaded", setFont, false);
          win.addEventListener("resize", setFont, false);
          win.addEventListener("load", setFont, false);
        }
      )(window, document);
    });
  },
};
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
