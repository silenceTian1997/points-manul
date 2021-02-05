<template>
     <div class="parline">
          <!-- <span> Product </span> -->
          {{$t('order.product')}}
    </div>
    <pointsList :list="list" :loading='loading' :finished='finished' @ajaxLoad='ajaxLoad' @handleCellItem='handleCellItem' :cellType="'order'"/>
</template>

<script>
import pointsList from '../components/points-list/points-list'
import { onMounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { apimyOrder } from '../request/api'
export default {
  components:{
    pointsList
  },
  setup(){
      const Router = useRouter()
      const state = reactive({
      loading: false,
      finished: false,
      list:[{
        id:'',
        pic:'',
        icon:'',
        descTitle:'',
        descContent:'',
        craeteTime:'',
        pointsNum:0,
        exchange:true,
      }]
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
            pointsNum:0,
            exchange:false
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

    const myorder = async ()=>{
      let res = await apimyOrder()
      console.log(res,'dd')
      let orderList = []
      if (res.code === 1) {
        orderList = res.lists.map(item=>{
            // let obj = {}
            return {
              id:item.id,
              pic:'http://ep.zerom.cn/'+item.img,
              descTitle:item.title,
              exchange:item.status,
              pointsNum: item.num * item.integral,
              time:item.create_time,
            }

        })
      }
      state.list = orderList
    }
    

    const handleCellItem =(index)=>{
      console.log(index)
      // 判断状态
      let exchangeFlag = state.list[index].status
      let queryId = state.list[index].id
      if (!exchangeFlag) {
        // 进入核销订单
        Router.push({
          path:'/mine/exchange',
          query:{
            queryId
          }
        })
        // Router.push('/mine/exchange')
      }

      // state.list.splice(index,1)
    }
    onMounted(()=>{
      myorder()
    })
    return{
      ...toRefs(state),
      ajaxLoad,
      handleCellItem
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
</style>