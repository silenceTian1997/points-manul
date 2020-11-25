<template>
    <div class="mine-page">
          <!-- {{mine}} -->
          <div class="user-line">
              <div class="user-item flex-cent">
              <div class="avatar"></div>
              </div>
              <div class="user-item">
              <div class="info">
                <div class="info-name ">Keith</div>
                <div class="info-phone">199****9999</div>
                <div class="info-id">10086</div>
              </div>
              </div>

          </div>

          <div class="points-line ">
              <div class="points-item">
                  <div class="points-icon m-center"></div>
                  <div class="points-text m-center">remaining score</div>
                  <div class="points-num m-center">123</div>
              </div>
              <div class="gap-line"></div>
              <div class="points-item">
                 <div class="points-icon m-center"></div>
                  <div class="points-text m-center">remaining score</div>
                  <div class="points-num m-center">123</div>
              </div>
          </div>

          <div class="mine-navbar">
               <van-cell  is-link to="/mine/order" >
                  <template #title>
                    <s>333</s>
                    <span class="custom-title">Your order</span>
                  </template>
              </van-cell>
               <van-cell  is-link to="/mine/exchange" >
                  <template #title>
                    <s>333</s>
                    <span class="custom-title">Exchange Code</span>
                  </template>
              </van-cell>
               <van-cell  is-link to="/mine/contacts" >
                  <template #title>
                    <s>333</s>
                    <span class="custom-title">Contacts</span>
                  </template>
              </van-cell>
               <van-cell  is-link to="/mine/more" >
                  <template #title>
                    <s>333</s>
                    <span class="custom-title">More</span>
                  </template>
              </van-cell>
          </div>
    </div>
</template>

<script>

import { onMounted, reactive , toRefs } from 'vue'
export default {
  
  setup(){
    const state = reactive({
      mine:'mine页面'
    })  
    return {
      ...toRefs(state)
    }
  }
  
}
</script>

<style scoped>
@import '../static/css/mixin.css';
.user-line{
  width: 100%;
  height: 2rem;
  background-color: antiquewhite;
  display: flex;

}
.user-item{
  flex: 1;
}
.avatar{
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  overflow: hidden;
  background-color: var(--color-red);
}
.info-name{
  color: #fff;
  font-size: var(--fontsize-20);
}
.info-phone, .info-id{
  color: #ccc;
  font-size: var(--fontsize-12);
}

.points-line{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2rem;
  background-color: #fff;
}
.points-item{
  flex: 1;
  height: 100%;
  background-color: pink;
}
.gap-line{
  width: 2px;
  height: 1rem;
  background-color: blue;
}
.points-item:last-child{
  flex: 1;
  height: 100%;
  background-color: rgb(192, 212, 255);
}
.points-icon{
  width: 1rem;
  height: 1rem;
  background-color: #fff;
}
.points-text{
  width: fit-content;
  height: .3rem;
  background-color: yellowgreen;
  font-size: var(--fontsize-12);
}
.points-num{
  width: fit-content;
  background-color: teal;
  font-size: var(--fontsize-20);
}

.mine-navbar{
  border-radius: 2px;
  border: 1px solid #dedede;
  overflow: hidden;
}
.navbar{
  border-top: 1px solid #dedede;
}
.navbar:first-child{
  border-top: none;
}
</style>