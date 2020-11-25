<template>
      <div class="home-list theme-bg">
        <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <pointsCell v-for="(item,index) in list" :key="index" :shopItem="item" :shopIndex="index" @handleDelete='handleDelete'/>
      </van-list> 
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
      }]
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
  emits:['ajaxLoad','handleDeleteItem'],
  setup(props,ctx){
    // const state = reactive({
    //   loading: false,
    //   finished: false,
    // })
    const  onLoad = ()=> {
      ctx.emit('ajaxLoad')
      // 异步更新数据
    }
    const handleDelete = (ind)=>{
      // console.log(ind,'22')
      // state.list.splice(ind,1)
      ctx.emit('handleDeleteItem',ind)
    }


    return{
      // ...toRefs(state),
      handleDelete,
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
   }
</style>