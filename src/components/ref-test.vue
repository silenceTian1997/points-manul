<template>
  <div>
      这是一个ref 测试页面
      <div style="color:red">
      {{ data }}
      </div>
      {{ 'num- test:' + num}}
      <button @click="plus">+++===</button>
  </div>
</template>

<script>
import { ref , watch , onMounted , h} from 'vue'
export default {

  setup(props,context){
    const data = ref('REF-TEST! HELLO VUE3!')
    const num = ref(0)
    const plus = function () {
      console.log(num.value ++)
      // console.log(this.$router)
    }
      // console.log(context.root,'setup')
    onMounted(()=>{
      console.log(data.value);
    })
    // watch(num.value,(newnum,oldnum)=>{
    //   console.log(newnum,oldnum,'123')
    // })
  


    return { data , num ,plus}
  }
}
</script>

<style scoped>

</style>