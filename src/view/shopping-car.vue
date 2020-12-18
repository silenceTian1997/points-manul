<template>
     <div class="parline">
          <!-- <span> Product </span> -->
          Product
    </div>
    <pointsList :list="list" :loading='loading' :finished='finished' @ajaxLoad='ajaxLoad' @handleDeleteItem='handleDeleteItem'/>
</template>

<script>
import pointsList from '../components/points-list/points-list'
import { reactive, toRefs } from 'vue'
export default {
  components:{
    pointsList
  },
  setup(){
      const state = reactive({
      loading: false,
      finished: false,
      list:[{
        pic:'',
        icon:'',
        descTitle:'',
        descContent:'',
        pointsNum:0,
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
    const handleDeleteItem =(index)=>{
      // console.log(ind,'22')
      state.list.splice(index,1)
    }
    return{
      ...toRefs(state),
      ajaxLoad,
      handleDeleteItem
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