<template>
    <div class="mine-page">
          <!-- {{mine}} -->
          <div class="user-line">
              <div class="user-item flex-cent">
              <div class="avatar"></div>
              </div>
              <div class="user-item">
              <div class="info">
                <div class="info-name ">{{userinfo.name}}</div>
                <div class="info-phone">{{userinfo.phone}}</div>
                <div class="info-id">{{userinfo.id}}</div>
              </div>
              </div>

          </div>

          <div class="points-line ">
              <div class="points-item" @click="handleToPath('view')">
                  <div class="points-icon m-center">
                    <img style="width:.65rem;" src="../static/images/user/jf-icon.png" alt="">
                  </div>
                  <div class="points-text m-center">Remaining score</div>
                  <div class="points-num m-center">{{userinfo.integral}}</div>
              </div>
              <div class="gap-line"></div>
              <div class="points-item" @click="handleToPath('rank')">
                 <div class="points-icon m-center">
                    <img src="../static/images/user/rk-icon.png" alt="">
                 </div>
                  <div class="points-text m-center">Ranking</div>
                  <div class="points-num m-center">{{userinfo.Ranking}}</div>
              </div>
          </div>

          <div class="mine-navbar">
               <van-cell class="navbar" is-link to="/mine/order" >
                  <template #title>
                      <img style="width:.5rem ; margin-right:.4rem" src="../static/images/user/order.png" alt="">
                    <span class="custom-title">Your order</span>
                  </template>
              </van-cell>
               <!-- <van-cell class="navbar" is-link to="/mine/rank" >
                  <template #title>
                    <img style="width:.5rem ; margin-right:.4rem" src="../static/images/user/a1.png" alt="">

                    <span class="custom-title">Rank</span>
                  </template>
              </van-cell> -->
               <van-cell class="navbar" is-link to="/mine/shoppingCar" >
                  <template #title>
                    <img style="width:.5rem ; margin-right:.4rem" src="../static/images/user/cart.png" alt="">

                    <span class="custom-title">shoppingCar</span>
                  </template>
              </van-cell>
               <!-- <van-cell class="navbar" is-link to="/mine/pointsView" >
                  <template #title>
                    <img style="width:.5rem ; margin-right:.4rem" src="../static/images/user/a1.png" alt="">

                    <span class="custom-title">pointsView</span>
                  </template>
              </van-cell> -->
               <!-- <van-cell  class="navbar" is-link to="/mine/more" >
                  <template #title>
                    <img style="width:.5rem ; margin-right:.4rem" src="../static/images/user/set.png" alt="">

                    <span class="custom-title">More</span>
                  </template>
              </van-cell> -->
          </div>
    </div>
</template>

<script>

import { onMounted, reactive , toRefs } from 'vue'
import  { useRouter } from  'vue-router'
import { apiMy } from '../request/api'

export default {
  
  setup(){
    const  Router = useRouter()
    const state = reactive({
      // mine:'mine页面'
      userinfo:{
        en_name: "Keith",
        group_id: 10086,
        id: 1,
        integral: 974,
        name: "Keith",
        number: 1,
        phone: "199****9999",
        status: 1,
        type: 1,
        uid: null
      }
    }) 
    const handleToPath = (type)=>{
      switch (type) {
        case 'view':
          Router.push('/mine/pointsView')
          break;
        case 'rank':
          Router.push('/mine/rank')
          break;
      
        default:
          break;
      }
    }
    const getUserInfo = async ()=>{
      let res = await apiMy()
      state.userinfo = res.user
      console.log(res)
    }
    onMounted(()=>{
      getUserInfo()
    })
    return {
      ...toRefs(state),
      handleToPath
    }
  }
  
}
</script>

<style scoped>
@import '../static/css/mixin.css';
.user-line{
  width: 100%;
  height: 2rem;
  /* background-color: antiquewhite; */
  display: flex;

}
img{
  width: 100%;
  vertical-align: top;
}
.user-item{
  flex: 1;
  display: flex;
  align-items: center;
}
.avatar{
  width: 1.84rem;
  height: 1.84rem;
  border-radius: 50%;
  overflow: hidden;
  /* background-color: var(--color-red); */
  background-image: url(../static/images/user/avar.png);
  background-size: cover;
}
.info-name{
  color: #fff;
  font-size: .46rem;
}
.info-phone, .info-id{
  color: #ccc;
  font-size: .28rem;
  margin: .1rem 0;
}

.points-line{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7.1rem;
  margin: 0 auto .5rem;
  height: 2.1rem;
  background-color: #3c2a26;
  border: 2px solid #402b26;
  border-radius: .2rem;
}
.points-item{
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: pink; */
}
.gap-line{
  width: 2px;
  height: .74rem;
  background-color: #d7762a;
}
.points-item:last-child{
  flex: 1;
  height: 100%;
  /* background-color: rgb(192, 212, 255); */
}
.points-icon{
  width: .75rem;
  height: .65rem;
  /* background-color: #fff; */
  text-align: center;
}
.points-text{
  width: fit-content;
  height: .3rem;
  font-size: .26rem;
  font-weight: 700;
  color: #fb882b;
  margin: .1rem auto;
}
.points-num{
  width: fit-content;
  /* background-color: teal; */
  color: #f9ca00;
  font-size: .4rem;
}

.mine-navbar{
  width: 7.1rem;
  margin: 0 auto;
  border-radius: 2px;
  border: 1px solid #382623;
  overflow: hidden;
  background-color: #3c2a26;
}
.mine-navbar /deep/.van-cell{
  color: #c2bbab;
  background-color: #3c2a26;
}
.mine-navbar /deep/.van-cell::after{
  border: none;
}
.navbar{
  border-top: 1px solid #382623;
}
.navbar:first-child{
  border-top: none;
}
</style>