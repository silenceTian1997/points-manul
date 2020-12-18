<template>
  <div class="points-ma flex-column">
   <div class="title">
        <img src="../static/images/login/title.png" alt="">
    </div>
    <div class="management-title">
        <img src="../static/images/login/points-title.png" alt="">
    </div>
    <div class="main flex-column">
    <div class="parline">
          <!-- <span> use guide</span> -->
          <div class="add-btn"></div>
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
        pic:require('../static/images/login/j1.png'),
        icon:'',
        descTitle:'A bunch of flowers',
        descContent:'Flower express 33 rose bouquel gift box champagne rose birthday gift proposal to girltriend ',
        pointsNum:85,
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
            pic:require('../static/images/login/j1.png'),
            icon:'',
            descTitle:'A bunch of flowers',
            descContent:'Flower express 33 rose bouquel gift box champagne rose birthday gift proposal to girltriend ',
            pointsNum:85,
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
.points-ma{
   width: 100%;
   height: 100%;
   padding-top: 1.4rem;
   /* 端屏 .5rem */
 }

.title{
   width: 3.17rem;
   height: .4rem;
   margin: 0 auto .6rem;
   /* background-color: #fff; */
 }
 img{
  width: 100%;
  vertical-align: top;
}
 .management-title{
   width: 3.34rem;
   margin: 0 auto;
 }

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
     width: 7.1rem;
     margin: 0 auto;
     flex: 1;
     height: 0;
     background-color: #382623;
     border-radius: .2rem;
   }
   .add-btn{
     width: 6.72rem;
     height: 1rem;
     margin: .2rem auto;
     border-radius: .2rem;
     overflow: hidden;
     background-size: cover;
     background-image: url(../static/images/login/add-text-btn.png);
   }
   .home-list{
     flex: 1;
     height: 0;
     overflow-x:hidden ;
     overflow-y: scroll;
   }
</style>