<template>
  <div class="home-page flex-column">
    <div class="use-guide">
        <div class="parline">
          <span> use guide</span>
        </div>
        <div class="guide-content">ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</div>
    </div>
    <div class="main flex-column">
    <div class="parline">
          <span> use guide</span>
    </div>
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
    </div>

</div>
</template>

<script>
import { onMounted , reactive , toRefs } from 'vue'
import pointsCell from '../components/points-cell'
export default {
  components:{
    pointsCell
  },
  setup(){
    const state = reactive({
      home : 'home hello ',
      list: [{
        pic:'',
        icon:'',
        descTitle:'',
        descContent:'',
        pointsNum:0,
      }],
      loading: false,
      finished: false,
    })
    const   onLoad = ()=> {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
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
        if (state.list.length >= 40) {
          state.finished = true
        }
      }, 1000)
    }

    const handleDelete = (ind)=>{
      console.log(ind,'22')
      state.list.splice(ind,1)
    }

    onMounted(async ()=>{
      state.home = 'home '
      console.log(state.home )
    })
    return {
      ...toRefs(state),
      handleDelete,
      onLoad
    }
  }
}
</script>

<style scoped>
@import '../static/css/mixin.css';

   .test{
    width: 1rem;
    height: 1rem;
    margin:  0 auto;
    background-color: var(--color-red);
    font-size: var(--fontsize-12);
    display: flex;
    justify-content: center;
    align-items: center;
   }

   .main{
     width: 100%;
     flex: 1;
    height: 0;
   }
   .home-list{
     flex: 1;
     height: 0;
     overflow-x:hidden ;
     overflow-y: scroll;
   }
</style>