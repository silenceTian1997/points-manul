<template>
  <div class="container" :class="themeStyle === 'staff'?'staff':'admin'">
    <pointsTopbar :barTitle="topTitle" :barPoints="jfNum" :icon="icon" v-if="topTitle" />
    <router-view class="content-view"></router-view>
    <pointsTabbar v-if="tabbarHidd"/>
 
  </div>
 
</template>

<script>
import { onMounted, reactive, toRefs,  } from "vue"
// watch ,watchEffect 
// import { useRoute } from 'vue-router'
import { setLocal , getLocal , getInstance } from './utils/utils'
import pointsTabbar from './components/points-tabbar.vue'
import pointsTopbar from './components/points-topbar.vue'
import { apiLogin }from './request/api.js'
import axios from 'axios'
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
      topTitle:'points',
      icon :'',
      themeStyle:'staff',
      jfNum:0
    });

     const getUrl = (name)=>{
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }

    const wxAuth = ()=>{
      var _this = instance
      let code = getUrl("code");

    if (code == "" || code == null) {
      
    axios.post('index/shop/login').then(response => {
        console.log(response)
        _this.rescode = response.data.code
        if(response.data.code == 202){ 
          let redirectUrl = window.location.href;
          redirectUrl = encodeURIComponent(redirectUrl);
          console.log(redirectUrl);
          const appid = "wxc65719486704e260";
          window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`;
        }
        if(response.data.code == 203){ 
              _this.$store.state.integral =  response.data.integral
        }
        
    }).catch(err=>{
        console.log(err,'报错')
    })
    
    } else {
      _this.code = code;
      var data = {
        code: _this.code,
      };
      if(_this.rescode == 203) {
           if(response.data.count != 0){
           _this.$store.state.isLogin  = true
              setLocal('logined',true)
              // _this.$router.push("home");
          }else{
              _this.$store.state.isLogin  = false
              localStorage.setItem('logined',false)
          }
        return
        }
      axios.post('/index/shop/login',data).then(response => {
        console.log(response)
        _this.rescode = response.data.code
        if (response.data.code == 203) {
              _this.$store.state.integral =  response.data.integral
          
        }
        if(response.data.op == null) {
        window.location.href = 'http://ep.zerom.cn/shop/index/index.html'
        return
        }
        // _this.$store.commit('op', response.data.op);
          _this.$store.state.isLogin  = response.data.op

          if(response.data.count != 0){
           _this.$store.state.isLogin  = true
              setLocal('logined',true)
              console.log('set')
            _this.$store.state.integral =  response.data.integral
              // _this.$router.push("home");
          }else{
              _this.$store.state.isLogin  = false
              localStorage.setItem('logined',false)
          }
    }).catch(err=>{
        console.log(err,'报错2')
        window.location.href = 'http://ep.zerom.cn/shop/index/index.html'
    })
    //   this.getopenid_data(data);
    }
    }



    onMounted(() => {
      // console.log(123)
      handleApi()
      wxAuth()
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
    const  handleApi = async ()=>{
        // let res = await apiIndex()
        // console.log(res)
    }

    return {
      ...toRefs(state),
      clickAdd,
    };
  },
   watch: {
    "$store.state.themeState"(newval, olval) {
      console.log(newval,'route');
      this.themeStyle = newval
    },
    '$route'(newpath,oldpath){
      console.log(newpath,oldpath)
            const topIconObj = {
      'Personal center':require('./static/images/user/gr.png'),
      'Product Page':require('./static/images/user/jf.png'),
      'Your Order':require('./static/images/user/dd.png'),
      'Ranking':require('./static/images/user/pm.png'),
      'Shopping Cart':require('./static/images/user/gw.png'),
      'Points view':require('./static/images/user/ck.png'),
    }

       this.tabbarHidd = !newpath.meta.tabbarhidd
       this.topTitle = newpath.meta.barTitle
       this.icon = topIconObj[this.topTitle]
       console.log(this.icon)
    },
    '$store.state.integral'(newval, olval) {
      console.log(newval,'route');
      // this.themeStyle = newval
      this.jfNum = newval
    },
}

};
</script>

<style>

.container{
  position: fixed;
  width: 100%;
  height: 100%;
  /* background-color: #3e2b27; */
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
  /* background: #3e2b27 ; */
  background-size: cover;
  background-image: url(./static/images/user/bg.png);
}
.admin {
  /* background: #c2bbab ; */
  background-size: cover;
  background-image: url(./static/images/login/di1.png);
}
</style>
