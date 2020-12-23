<template>
    <ul class="tabbar">
      <router-link tag="li" to="/home" class="nav-list-item">
      <div class="home-icon"></div>
      <div class="home-icon-a"></div>
      <div class="text">Home page</div>
      </router-link>
      <router-link tag="li" to="/mine" class="nav-list-item">
        <div class="mine-icon"></div>
        <div class="mine-icon-a"></div>
        <div class="text">Personal center</div>
      </router-link>
      <!-- <router-link tag="li" to="/ref">reftest</router-link> -->
    </ul>
</template>

<script>
import { onMounted, toRefs, reactive } from "vue";
export default {
  name:'points-tabbar',
  setup() {
    const state = reactive({
 
    })
    return{
      ...toRefs(state),
    }
  },
};
</script>

<style scoped>

  .tabbar{
    display: flex;
    height: 1.4rem;
    font-size: .2rem;
    color: #e7e5e5;
    justify-content: center;
  }
  .nav-list-item{
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #e7e5e5;
    width: fit-content;
    margin-right: 1.7rem;
  }
  .nav-list-item:last-child{
    margin: 0;
  }
  .tabbar .router-link-active{
    color: tomato;
  }
  .text{
    margin-top: .1rem;
  }
  .home-icon{
    width: .55rem;
    height: .54rem;
    background-size: 100%;
    background-image: url(../static/images/user/home.png);
  }
  .home-icon-a{
    display: none;
    width: .55rem;
    height: .54rem;
    background-size: 100%;
    background-image: url(../static/images/user/home-a.png);
  }
   .tabbar .router-link-active .home-icon-a{
    display: block;
  }
   .tabbar .router-link-active .home-icon{
    display: none;
  }
  .mine-icon{
    display: block;
    width: .48rem;
    height: .52rem;
    background-size: 100%;
    background-image: url(../static/images/user/mine.png);
  }
  .tabbar .router-link-active .mine-icon-a{
    display: block;
  }
  .tabbar .router-link-active .mine-icon{
    display: none;
  }
  .mine-icon-a{
    display: none;
    width: .48rem;
    height: .52rem;
    background-size: 100%;
    background-image: url(../static/images/user/mine-a.png);
  }
</style>