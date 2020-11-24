<template>
    <ul class="tabbar">
      <router-link tag="li" to="/home" class="nav-list-item">Home</router-link>
      <router-link tag="li" to="/mine" class="nav-list-item">Mine</router-link>
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
  }
  .nav-list-item{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tabbar .router-link-active{
    color: tomato;
  }
</style>