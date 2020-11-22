<template>
    {{mine}}
    12312312
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

<style>

</style>