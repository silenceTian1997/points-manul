<template>
  <div class="login-page">
    <div class="title">
        <img src="../static/images/user/title.png" alt="">
    </div>

    <div class="theme" v-if="themeStyle === 'admin'" :key="new Date()">
      <img src="../static/images/user/theme.png" alt="">
    </div>

    <div class="form">
      <van-form @submit="handleLogin" >
               <div class="form-line">
          <van-field v-model="userId" name="id" label="Id" placeholder="Id" />
        </div>

        <div class="form-line" >
          <van-field v-model="userTel" name="tel" label="Tel" placeholder="Tel" />
        </div>
        <div v-if="themeStyle === 'staff'" :key="new Date()" >
         <div class="form-line">
          <van-field
            v-model="userName"
            name="name"
            label="Name"
            placeholder="Name"
          />
        </div>
        <div class="form-line">
          <van-field v-model="userDept" name="dept" label="Dept" placeholder="Dept" />
        </div>
        </div>
          <van-button  class="go" native-type="submit">
          </van-button>
      </van-form>
    </div>



    <!-- <div class="check-system" @click="handleCheckSystem">ififi</div> -->
  </div>
</template>

<script>
import { reactive, toRefs , onMounted } from "vue"
import { getInstance , getLocal ,setLocal } from "../utils/utils"
export default {
  setup(ctx,cont) {
    const instance = getInstance()
    const state = reactive({
      userName: "",
      userId: "",
      userTel:'',
      userDept:'',
      themeStyle:'staff'
    })
    const handleCheckSystem = () => {
      let prvTheme = getLocal("theme")
      let theme = prvTheme === "admin" ? "staff" : "admin"
      // 配合vuex
      instance.$store.state.themeState = theme
      state.themeStyle = theme
      setLocal("theme", theme)
      // 重置表单
      // console.log(state,'.van-field__control')
      for (const key in state) {
        if (key.includes('user')) {
          state[key] = ''
        }
      }
    }
    const handleLogin = (values)=>{
      console.log('dd',values)
      //成功 跳转 员工 
      console.log(ctx,'c',cont)
      instance.$router.push('home')
    }
    onMounted(()=>{
      state.themeStyle = getLocal("theme")
    })
    return {
      ...toRefs(state),
      handleCheckSystem,
      handleLogin
    }
  },
}
</script>

<style  scoped>
.login-page {
  width: 100%;
  height: 100%;
  padding-top: 2rem;
   /* 端屏 .5rem */
}
.title {
   width: 3.17rem;
   height: .4rem;
   margin: 0 auto 1.6rem;
}
.theme{
  width: 3.82rem;
  height: 2.02rem;
  margin:  0 auto .76rem;
}
.form {
}
.form-line {
  width:5.6rem;
  margin: 0 auto;
  margin-bottom: 0.2rem;
}

.form-line .van-cell {
  width: 5.6rem;
  height: 1rem;
  border-radius: .2rem;
  border: 1px solid#623024;
  overflow: hidden;
  background-color: #3c2a26;
  /* opacity: .8; */
}
 .form-line /deep/.van-field__label{
   width: 1rem;
   line-height: .56rem;
   margin-left: .2rem;
   font-size: .32rem;
   font-weight: 600;
   color: #fb882b;
 }
 .go{
   display: block;
   width: 1.1rem;
   height: 1.1rem;
   border: none !important;
   background-color: transparent !important;
   border-radius: 50%;
   overflow: hidden;
   background-image: url(../static/images/user/go.png);
   background-size: 100%;
   background-repeat: no-repeat;
   margin: 1.2rem auto ;
   /* trans; */
   transform: rotate(90deg);
 }
.check-system{
  width: fit-content;
}
/deep/.van-field__control{
  font-size: .28rem;
  font-weight: 600;
  color: #382623;

}
img{
  width: 100%;
  vertical-align: top;
}

</style>
