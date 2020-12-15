<template>
  <di class="admin-home">
    <div class="title">
        <img src="../static/images/login/title.png" alt="">
    </div>
    <div class="main">
        <div class="left main-itme" @click="toMannger(1)">
          <img class="pic" src="../static/images/login/adleft.png" alt="">
        </div>
        <div class="right main-itme" @click="toMannger(2)">
          <img class="pic" src="../static/images/login/adright.png" alt="">
        </div>
    </div>
  </di>
</template>

<script>
import { reactive , toRefs} from 'vue'
// import { getInstance  } from "../utils/utils"
import { useRoute, useRouter } from 'vue-router'
export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      adminHome:'adminHome'
    })
    const toMannger = (type) =>{
      // 1 left  , 2 right
      switch (type) {
        case 1:
          router.push('adPointsMa')
          break;
        case 2:
           router.push('adProductMa')
          break;
      
        default:
           router.push('adminhome')
          break;
      }
    }
  
    return{
      ...toRefs(state),
      toMannger
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
  vertical-align: top;
}
.admin-home {
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
.main{
  width: 7.1rem;
  height: 8.63rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.left{
  background-size: cover;
  background-image: url(../static/images/login/left.png);
}
.right{
  background-size: cover;
  background-image: url(../static/images/login/right.png);

}

.main-itme{
  width: 3.48rem;
  height: 8.63rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pic{
  width: 2.1rem;
  height: 2.45rem;
}
</style>