<template>
     <!-- <div class="parline">
          Product
    </div> -->
    <pointsList style="padding-bottom:14%" :list="list"   @handleCellItem='handleCellItem' :cellType="'shopCar'" />
    <!-- :loading='loading' :finished='finished' @ajaxLoad='' -->
    <div class="cartotal">
        <div class="select">{{$t('order.settlement')}}</div>
        <div class="num-bar"> <span class="num">{{ totalPoints }}</span> {{$t('order.points')}}</div>
        <div class="gou" @click="handleInsertOrder"></div>
    </div>
</template>

<script>
import pointsList from '../components/points-list/points-list'
import { reactive, toRefs ,onMounted } from 'vue'
import { apiMyCart ,apiInsertOrder , apiGoodsDel } from '../request/api'
import { getInstance } from '../utils/utils'
export default {
  components:{
    pointsList
  },
  
  setup(){
      const instance = getInstance()
      const state = reactive({
      loading: false,
      finished: false,
      totalPoints:0,
      list:[]
    })
    const ajaxLoad = ()=>{
      console.log('触发加载')
          //  setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          state.list.push({
            pic:'',
            icon:'',
            descTitle:'',
            descContent:'',
            pointsNum:10,
            gouNum:0

          })
        }

        // 加载状态结束
        state.loading = false

        // 数据全部加载完成
        if (state.list.length >= 10) {
          state.finished = true
        }
      }, 1000)
    }
    
    const countTotalPoints = () =>{
      
      
     state.totalPoints = state.list.reduce(function(prev, cur, index, arr) {
          console.log(prev, cur.gouNum, index);
          return prev + (cur.gouNum * cur.pointsNum);
      },0)
    }


    const handleCellItem = async(opt)=>{
      console.log(opt,'22')
      let {options:countType , isIndex} = opt
      switch (countType) {
        case 'add':
            console.log("+")
            if(state.list[isIndex].limitNum >= state.list[isIndex].gouNum + 1){
              state.list[isIndex].gouNum  = state.list[isIndex].gouNum + 1
            }else{
              instance.$toast('超过购买限制')
              // state.list[isIndex].gouNum = 0
            }
            countTotalPoints()
          break;
        case 'minus':
            console.log("-")
            if (state.list[isIndex].gouNum === 0) {
              return
            }
            state.list[isIndex].gouNum  = state.list[isIndex].gouNum - 1
            countTotalPoints()

          break;
        case 'del':
          let id = state.list[isIndex].id
          let res = await apiGoodsDel({id})
          if(res.code == 1){
            state.list.splice(isIndex,1)
          }else{
            instance.$toast(res.msg) }
          break;
        default:
          break;
      }
      // state.list.splice(index,1)

    }
    // 删除
    const handlegoodDel = async (id)=>{
      
    }
    
    // 获取购物车列表
    const getMyCart =  async ()=>{
      let res  = await apiMyCart()
      console.log(res , 'carts')
      let cartList = []
      if(res.code === 1){

        cartList = res.lists.map(item=> new Object({
            id:item.id,
            pid:item.pid,
            pic: 'http://ep.zerom.cn/' +item.img,
            icon:'',
            descTitle:item.title,
            descContent:'',
            pointsNum:item.integral,
            gouNum:1,
            limitNum:item.limit_num
        }))
        console.log(cartList)
        state.list = cartList
        countTotalPoints()

      }else{
        instance.$toast(res.msg)
      }

    }
    // 购买商品
    const handleInsertOrder = async ()=>{
      // 提交数量 不为零  的商品id 数量  和总积分
      let dataObj = {}
      let goodsId = []
      let integral = state.totalPoints
      state.list.map(item=>{
        if (item.gouNum !== 0) {
          goodsId.push(new Object({
            pid:item.pid,
            id:item.id,
            num:item.gouNum
          }))
        }
      })
      dataObj = {
        goodsId,
        integral
      }
      console.log(dataObj)
      if (dataObj.goodsId.length == 0) {
        instance.$toast('请挑选合适的商品')
        return
      }
      let res = await apiInsertOrder(dataObj)
      if (res.code === 1) {
        instance.$toast(res.msg)
        let newList = []
        state.list.map((item,index)=>{
            if (item.gouNum == 0) {
              newList.push(item)
            }
        })
        state.list = newList
        countTotalPoints()
        instance.$store.state.integral = {
                                            integral:res.integral ,
                                            curr_integral:res.curr_integral
                                          }
        // onMounted()
      }else{
        instance.$toast(res.msg)
      }
    }
    onMounted(()=>{
        // console.log('carts')
        getMyCart()
     })

    return{
      ...toRefs(state),
      ajaxLoad,
      handleCellItem,
      handleInsertOrder
    }
  }
}
</script>

<style scoped>
   .parline{
     font-size: .3rem;
     color: #fb882b;
     font-weight: bold;
     padding: .2rem .3rem;
     border-bottom: 1px solid #462f29;
   }
   .cartotal{
     width: 7.1rem;
     height: 1.1rem;
     background-color: #3c2a26;
     position: fixed;
     bottom: 14%;
     left: 50%;
     margin-left:-3.55rem ;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0 .3rem;
   }
   .select{
     font-size: .28rem;
     color: #dc6841;
   }
   .num-bar{
     display: flex;
     justify-content: center;
     align-items: center;
     color: #fff;
     font-size: .16rem;
   }
   .num{
     font-size: .44rem;
     color: #dc6841;
   }
   
   .gou{
     width: .81rem;
     height: .81rem;
     border-radius: 50%;
     overflow: hidden;
     background-size: cover;
     background-image: url(../static/images/user/gou.png);
   }
</style>