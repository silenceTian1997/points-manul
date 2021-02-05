<template>
  <div class="ex-page">
      <div class="title">
          <div class="icon">
              <img src="../static/images/user/jf.png" alt="">
          </div>
          <!-- Please Confirm product information -->
          {{$t('details.pleaseCk')}}
      </div>
      <pointsCell class="cell" :type="'check'"  :shopItem="sItem"></pointsCell>
    <!-- 兑换 -->

    <div class="qritem">
      <!-- <img class="qrcode" :src="codeImg" alt=""> -->
        <div class="btn" :class="isChecked?'checked':'' " @click="handleGoodsEdit">  {{$t('details.confirm')}}</div>
      <!-- Please check the information carefully -->
          {{$t('details.carefully')}}
    </div>
    </div>
</template>

<script>
import { apiGoodsStatus, apiGoodsEdit } from '../request/api.js'
import { reactive, toRefs,onMounted } from 'vue'
import { getInstance } from '../utils/utils'
import { useRoute} from 'vue-router'
import pointsCell from '../components/points-cell'
export default {
  components: {
    pointsCell
  },
  // console.log()
  setup(){
    const instance = getInstance()
    const Route = useRoute()
    const state = reactive({
        // codeImg : ''
        sItem:{
        pic: '',
        icon: "",
        descTitle: "",
        descContent:
          " ",
        pointsNum: 0,
        car:false,
        gouNum:0
      },
      isChecked:0
    })
    const GoodsStatus = async ()=>{
      let {id} = Route.query

      let res = await apiGoodsStatus({id})
      if (res.code === 1) {
        // state.sItem = res.code_img
        let shop = {
            pic: 'http://ep.zerom.cn/' + res.goods.img,
            icon: "",
            descTitle: res.goods.title,
            descContent:res.goods.remark,
            pointsNum: res.goods.integral,
            num:res.goods.num,
            time:res.goods.create_time,
            car:res.goods.status,
            gouNum:0
          }

         state.sItem =  shop
         state.isChecked = res.goods.status
      }else{
        console.log(res.msg)
      }
      console.log(res)
    }
    const handleGoodsEdit = async ()=>{
      if (state.isChecked) {
        // instance.$toast.loading({
        //     message: '已核销',
        //     forbidClick: true,
        // });
        return
      }
      let {id} = Route.query
      let res = await apiGoodsEdit({id})
      if (res.code == 1) {
         state.sItem.car = 1
         state.isChecked = 1
      }
      instance.$toast.loading({
            message: res.msg,
            forbidClick: true,
      });
      console.log(res)
    }
    onMounted(()=>{
      //
      GoodsStatus()
    })

    return {
      ...toRefs(state),
      handleGoodsEdit
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
    padding-top: 10vh;
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
    text-align: center;
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
  .btn{
    width: 1.4rem;
    height: .8rem;
    border-radius: .1rem;
    overflow: hidden;
    background-color: #fb882b;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .28rem;
    margin-bottom: .4rem;
  }
  .btn:active{
    opacity: .8;
  }
  .checked{
    background-color:#eeeae8;
    color: #3c2a26;
  }
</style>