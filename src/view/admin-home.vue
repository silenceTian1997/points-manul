<template>
  <div>
    {{ adminHome }}
  </div>
</template>

<script>
import { reactive , toRefs} from 'vue'
export default {
  setup(){
    const state = reactive({
      adminHome:'adminHome'
    })
    return{
      ...toRefs(state)
    }
  }
}
</script>

<style>

</style>