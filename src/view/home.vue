<template>
  <div class="home-page">
  <div class="test">
      {{home}}
  </div>
</div>
</template>

<script>
import { onMounted , reactive , toRefs } from 'vue'
export default {
  setup(){
    const state = reactive({
      home : 'home hello ',
    })
    onMounted(async ()=>{
      state.home = 'home '
      console.log(state.home )
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>
@import '../static/css/mixin.css';
   .home-page{
     width: 100%;
     height: 100%;
   }
   .test{
    width: 1rem;
    height: 1rem;
    margin:  0 auto;
    background-color: var(--color-red);
    font-size: var(--fontsize-12);
    display: flex;
    justify-content: center;
    align-items: center;
   }
</style>