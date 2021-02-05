<template>
      <div class="home-list theme-bg">
        <van-list v-if="list.length">
        <!-- v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad" -->
        <pointsCell v-for="(item,index) in list" :key="index" :shopItem="item" :shopIndex="index" @handleCell='handleCell' :type="cellType" />
      </van-list> 
      <div class="no-one" v-else>
          {{$t('home.none')}}
      </div>
    </div>
</template>

<script>
import { reactive , toRefs} from 'vue'
import pointsCell from '../points-cell'
 export default {
  components:{
    pointsCell
  },
  props:{
    list:{
      type:Array,
      default: [{
        pic:'',
        icon:'',
        descTitle:'',
        descContent:'',
        pointsNum:0,
        car:false,
        gouNum:0
      }]
    },
    cellType:{
      type:String,
      default:'show'
    },
    loading:{
      type:Boolean,
      default:false,
    },
    finished:{
      type:Boolean,
      default:false,
    }
  },
  emits:['ajaxLoad','handleCellItem'],
  setup(props,ctx){
    // const state = reactive({
    //   loading: false,
    //   finished: false,
    // })
    const  onLoad = ()=> {
      ctx.emit('ajaxLoad')
      // 异步更新数据
    }
    const handleCell = (ind)=>{
      // console.log(ind,'22')
      // state.list.splice(ind,1)
      console.log(ind)
      ctx.emit('handleCellItem',ind)
    }


    return{
      // ...toRefs(state),
      handleCell,
      onLoad
    }
  },

}
</script>

<style>
   .home-list{
     flex: 1;
     height: 0;
     overflow-x:hidden ;
     overflow-y: scroll;
     padding: 0 .2rem;
   }
   .no-one{
     color: #db6841;
    font-size: .38rem;
    font-weight: 600;
    text-align: center;
   }
</style>