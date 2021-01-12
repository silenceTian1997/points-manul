<template>
  <div class="login-page">
    <div class="title">
      <img src="../static/images/user/title.png" alt="" />
    </div>

    <div class="theme" v-if="themeStyle === 'admin'" :key="new Date()">
      <img src="../static/images/user/theme.png" alt="" />
    </div>

    <div class="form">
      <van-form @submit="handleLogin">
        <div class="form-line">
          <van-field v-model="userId" name="number" label="Id" placeholder="Id" />
        </div>

        <div class="form-line">
          <van-field
            v-model="userTel"
            name="phone"
            label="Tel"
            placeholder="Tel"
          />
        </div>
        <!-- <div v-if="themeStyle === 'staff'" :key="new Date()" > -->
        <div class="form-line">
          <van-field
            v-model="userName"
            name="name"
            label="Name"
            placeholder="Name"
          />
        </div>
        <div class="form-line">
          <div class="xiala"></div>

          <van-field
            readonly
            clickable
            label="Dept"
            name="group_id"
            v-model="userDept"
            placeholder="Dept"
            @click="showPicker = true"
          />

        
        <van-popup v-model:show="showPicker" round position="bottom">
  <van-picker
    :columns="deptNameList"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</van-popup>
        
        
        </div>
        <!-- </div> -->
        <van-button class="go" native-type="submit"> </van-button>
      </van-form>
    </div>

    <!-- <div class="check-system" @click="handleCheckSystem">ififi</div> -->
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, ref } from "vue";
import { getInstance, getLocal, setLocal } from "../utils/utils";
import { apiInsertUser , apiGetGroup } from '../request/api'
export default {
  setup(ctx, cont) {
    const instance = getInstance();
    const state = reactive({
      userName: "",
      userId: "",
      userTel: "",
      userDept: "",
      themeStyle: "staff",
      value: "",
      showPicker: false,
      deptList:'',
      deptNameList: ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华", "衢州"],
    });
    const handleCheckSystem = () => {
      let prvTheme = getLocal("theme");
      let theme = prvTheme === "admin" ? "staff" : "admin";
      // 配合vuex
      instance.$store.state.themeState = theme;
      state.themeStyle = theme;
      setLocal("theme", theme);
      // 重置表单
      // console.log(state,'.van-field__control')
      for (const key in state) {
        if (key.includes("user")) {
          state[key] = "";
        }
      }
    };
    const onConfirm = (value) => {
      console.log(value);
      state.userDept = value;
      console.log(state.userDept);
      state.showPicker = false;
    };
    const handleLogin = async (values) => {
      console.log("dd", values);

      // 字转id
      let dataObj = values
      let {group_id}  = dataObj
      let id = ''
       state.deptList.map(item=>{
          if (item.name === group_id) {
              id = item.id
          }
      })
      dataObj.group_id = id
      console.log(dataObj)      
      //成功 跳转 员工
      // return
      // 不能为空
       let phoneReg = /^1[3456789]\d{9}$/
      for (const key in dataObj) {
     
         
        if (dataObj[key] == '') {

          instance.$toast.loading({
            message: '请填写完整',
            forbidClick: true,
          });
            return
        }
        if (!phoneReg.test(dataObj['phone'])) {
          instance.$toast('手机号有误')
          return
        }
      }


      let res = await apiInsertUser(dataObj)
      if (res.code == 1) {
        instance.$store.state.isLogin
         setLocal('logined',true)
         instance.$router.push("home");
      }else{
        instance.$toast.loading({
            message: res.msg,
            forbidClick: true,
          })
      }
  
    };
    const getGroup = async() =>{
      
        let res =  await apiGetGroup()
        console.log(res)
        if (res.code == 1) {
          state.deptList  = res.lists
          let deptNameLisi = []
          deptNameLisi = res.lists.map(item=>{
              return  item.name
        })
          state.deptNameList  = deptNameLisi
      }
    }
    onMounted(() => {
      getGroup()
      state.themeStyle = getLocal("theme");
    });
    return {
      ...toRefs(state),
      handleCheckSystem,
      handleLogin,
      onConfirm,
    };
  },
};
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
  height: 0.4rem;
  margin: 0 auto 1.6rem;
}
.theme {
  width: 3.82rem;
  height: 2.02rem;
  margin: 0 auto 0.76rem;
}

.form-line {
  width: 5.6rem;
  margin: 0 auto;
  margin-bottom: 0.2rem;
  position: relative;
}
.xiala {
  position: absolute;
  right: 6%;
  top: 40%;
  width: 0.17rem;
  height: 0.09rem;
  z-index: 9;
  background-size: 100%;
  background-image: url(../static/images/user/xiala.png);
}

.form-line .van-cell {
  width: 5.6rem;
  height: 1rem;
  border-radius: 0.2rem;
  border: 1px solid#623024;
  overflow: hidden;
  background-color: #3c2a26;
  /* opacity: .8; */
}
.form-line /deep/.van-field__label {
  width: 1rem;
  line-height: 0.56rem;
  margin-left: 0.2rem;
  font-size: 0.32rem;
  font-weight: 600;
  color: #fb882b;
}


.go {
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
  margin: 1.2rem auto;
  /* trans; */
  transform: rotate(90deg);
}
.check-system {
  width: fit-content;
}
/deep/.van-field__control {
  font-size: 0.28rem;
  font-weight: 600;
  color: #fff;
}
/deep/.van-cell::after {
  border: none;
}
img {
  width: 100%;
  vertical-align: top;
}
</style>
