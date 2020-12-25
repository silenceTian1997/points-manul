<template>
  <div>
    兑换
    <img :src="codeImg" alt="">
    </div>
</template>

<script>
import { apiGoodsCode } from '../request/api.js'
import { reactive, toRefs,onMounted } from 'vue'
import { useRoute} from 'vue-router'
export default {
  // console.log()
  setup(){
    const Route = useRoute()
    const state = reactive({
        codeImg : ''
    })
    const GoodsCode = async ()=>{
      let {queryId:id} = Route.query

      let res = await apiGoodsCode({id})
      if (res.code === 1) {
        state.codeImg = res.code_img
      }else{
        console.log(res.msg)
      }
      console.log(res)
    }
    onMounted(()=>{
      //
      GoodsCode()
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>

</style>