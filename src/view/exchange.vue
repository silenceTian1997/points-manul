<template>
  <div class="ex-page">
      <div class="title">
          <div class="icon">
              <img src="../static/images/user/jf.png" alt="">
          </div>
          Please show the exchange code 
      </div>
      <pointsCell class="cell"></pointsCell>
    <!-- 兑换 -->

    <div class="qritem">
      <img class="qrcode" :src="codeImg" alt="">
      Please show the QR code for verification and collection
    </div>
    </div>
</template>

<script>
import { apiGoodsCode } from '../request/api.js'
import { reactive, toRefs,onMounted } from 'vue'
import { useRoute} from 'vue-router'
import pointsCell from '../components/points-cell'
export default {
  components: {
    pointsCell
  },
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
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>
  img{
    width: 100%;
    vertical-align: top;
  }
  .ex-page{
    width: 7.1rem;
    height: 8rem;
    margin: 0 auto;
    background-color: #3c2a26;
  }
  .title{
    width: 2.4rem;
    margin: 0 auto .8rem;
    font-size: .28rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #cd623e;
    font-weight: 600;
  }
  .cell{
    margin-bottom: 1rem;
  }
  .icon{
    width: .8rem;
    height: .8rem;
  }
 .qritem{
    width: 3.1rem;
    margin: 0 auto;
    color: #fff;
    font-size: .24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .qrcode{
    display: block;
    width: 2rem;
    border-radius: .1rem;
    overflow: hidden;
    margin-bottom: .5rem;
  }

</style>