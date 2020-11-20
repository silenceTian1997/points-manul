<template>

  <div class="test">
      {{home}}
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
   .test{
    width: 1rem;
    height: 1rem;
    margin:  0 auto;
    background-color: pink;
    font-size: .24rem;
    display: flex;
    justify-content: center;
    align-items: center;
   }
</style>