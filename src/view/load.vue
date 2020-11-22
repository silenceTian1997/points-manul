<template>
  <div>
    {{load}}
  </div>
</template>

<script>
import { toRefs, reactive, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      load: "loading",
    })
    onMounted(() => {
      console.log(123213)
    })
    return {
      ...toRefs(state)
    }
  },
}
</script>

<style scoped>


</style>