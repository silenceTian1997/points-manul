<template>
  <div class="login-page">
    <div class="title">
      {{ login }}
    </div>

    <div class="theme" v-if="themeStyle === 'admin'" :key="new Date()">

    </div>




    <div class="form">
      <van-form @submit="handleLogin" >
        <div class="form-line">
          <van-field
            v-model="userName"
            name="name"
            label="Name"
            placeholder="Name"
          />
        </div>
        <div class="form-line">
          <van-field v-model="userId" name="id" label="Id" placeholder="Id" />
        </div>
        <div v-if="themeStyle === 'staff'" :key="new Date()" >
        <div class="form-line" >
          <van-field v-model="userTel" name="tel" label="Tel" placeholder="Tel" />
        </div>
        <div class="form-line">
          <van-field v-model="userDept" name="dept" label="Dept" placeholder="Dept" />
        </div>
        </div>
          <van-button  class="go" native-type="submit">
            提交
          </van-button>
      </van-form>
    </div>



    <div class="check-system" @click="handleCheckSystem">ififi</div>
  </div>
</template>

<script>
import { reactive, toRefs , onMounted } from "vue"
import { getInstance , getLocal ,setLocal } from "../utils/utils"
export default {
  setup() {
    const instance = getInstance()
    const state = reactive({
      login: "lo",
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
}
.title {
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
.form {
}
.form-line {
  width: 6.45rem;
  margin: 0 auto;
  margin-bottom: 0.2rem;
}
.form-line .van-cell {
  background-color: #3c2a26;
  /* opacity: .8; */
}
 .go{
   width: .5rem;
   height: .5rem;
   background-color: pink;
   border-radius: 50%;
   overflow: hidden;
 }
.check-system{
  width: fit-content;
}
/deep/.van-field__control{
    color: red;
}

</style>
