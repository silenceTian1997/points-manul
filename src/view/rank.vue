<template>
  <div class="rank-page">
      <div class="my-bar">
        <div class="my-item">
          <div class="my-r-i">
            <img src="../static/images/user/myrank-icon.png" alt="">
          </div>
          36
        </div>
        <div class="my-line"></div>
        <div class="my-item">
          <div class="my-r-i">
            <img src="../static/images/user/pro-icon.png" alt="">
          </div>
          46.3%
        </div>
        <div class="my-line"></div>

        <div class="my-item">
          <div class="my-r-i">
            <img src="../static/images/user/heighset-icon.png" alt="">
          </div>
            1020
        </div>
        <div class="my-line"></div>
        <div class="my-item">
          <div class="my-r-i">
            <img src="../static/images/user/average-icon.png" alt="">
          </div>
          730
        </div>
      </div>


    <div class="rank-main">
            <div class="title-bar">
        <div class="ranking">Ranking</div>
        <div class="name">Name</div>
        <div class="id">ID</div>
        <div class="points">Points</div>
      </div>
      <div class="main">
        <div class="content-bar" :class="'pm'+(index+1)" v-for="(item,index) in rankList" :key="index">
        <div class="ranking-item">{{ (index +1) < 10 ? '0'+(index +1) : (index+1) }}</div>
        <div class="name-item">{{item.name}}</div>
        <div class="id-item">{{item.group_id}}</div>
        <div class="points-item">
           <div class="i-num"> {{item.integral}}</div>
            <div class="i-en">Points</div>
          </div>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
import { reactive, toRefs ,onMounted } from 'vue'
import { apiRanking } from '../request/api.js'
export default {

  setup(){
      const state = reactive({
          rankList : [
         
          ]
    })
    const getRanking = async ()=>{
      let res = await apiRanking()
      console.log(res.lists)
      if (res.code === 1) {
       state.rankList = res.lists
      }else{
        console.log(res.msg)
      }
    }
    onMounted(()=>{
      getRanking()
    })

    return{
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
  .my-bar{
    width: 7.1rem;
    margin: 0 auto;
    border-radius: .1rem;
    color: #db6841;
    background-color: #3c2a26;
    border: 1px solid #382623;
    overflow: hidden;
    font-size: .38rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: .2rem .05rem;
    margin-bottom: .1rem;
  }
  .my-item{
    width: 1.7rem;
    text-align: center;
  }
  .my-r-i{
    margin-bottom: .2rem;
  }
  .my-line{
    width: 2px;
    height: .6rem;
    
  }
  .rank-main{
    width: 7.1rem;
    margin: 0 auto;
    border-radius: .1rem;
    border: 1px solid #382623;
    background-color: #3c2a26;
    overflow: hidden;

  }
  .title-bar{
    display: flex;
    justify-content: space-around;
    color: #fb882b;
    font-size: .24rem;
    font-weight: 600;
    padding:.14rem  0;
    border-bottom:  1px solid #582d24;
  }
  .ranking{
    width: 1.2rem;
    font-size: .26rem;
    text-align: center;
    background-color: #3c2a26;
  }
  .ranking-item{
    width: 1.2rem;
    font-size: .24rem;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
  }
  .name{
    width: 1.2rem;
    font-size: .26rem;
    text-align: center;
  }
  .name-item{
    width: 1.2rem;
     font-size: .28rem;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
  }
  .id{
    width: 1rem;
    font-size: .26rem;

  }
  .id-item{
    width: 1rem;
    font-size: .26rem;
    font-weight: 600;
    color: #c2bbab;
  }
  .points{
    width: 1rem;
    font-size: .26rem;
  }
  .points-item{
    width: 1rem;
    font-size: .26rem;
    text-align: center;
    color: #fff;
  }
  .i-num{
    font-size: .26rem;
  }
  .i-en{
    font-size: .2rem;
  }
  .content-bar:last-child{
    border: none;
  }
  .content-bar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* height: .8rem; */
    padding:.14rem  0;
    border-bottom:  1px solid #582d24;
  }
  .content-bar.pm1 .ranking-item{
    font-size: .42rem;
    color: #dc6841;
  }
  .content-bar.pm1 .i-num{
    font-size: .32rem;
    color: #f9ca00;
  }
  .content-bar.pm1 .i-en{
    color: #f9ca00;
  }
  .content-bar.pm2 .ranking-item{
    font-size: .38rem;
    color: #fb882b;
  }
  .content-bar.pm2 .i-num{
    font-size: .32rem;
    color: #fb882b;
  }
  .content-bar.pm2 .i-en{
     color: #fb882b;
  }
  .content-bar.pm3 .ranking-item{
    font-size: .3rem;
    color: #d8a647;
  }
  .content-bar.pm3 .i-num{
    font-size: .32rem;
    color: #d8a647;
  }
  .content-bar.pm3 .i-en{
    color: #d8a647;
  }
</style>