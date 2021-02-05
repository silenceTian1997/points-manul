<template>
  <div class="topbar">
    <div class="icon">
      <img :src="icon" alt="">
    </div>
    <div class="bar-title"> {{ barTitle }}</div>
    <div class="bar-points" v-if="barTitle != 'Points view'">
      <!-- <div class="points-num">{{ barPoints }}</div>  -->
      <!-- <div class="points-text">Points</div> -->
      <div class="points-item">
          
          <div class="points-totals"><div class="total">{{$t('home.total')}}   </div> <div class="total-num">{{barPoints.integral}}</div></div>
          <div class="points-available"> <div class="score">{{$t('home.my')}}  </div>
            <div class="score-num">{{barPoints.curr_integral}}</div>
             </div>
      </div>
      </div>
  </div>
</template>

<script>

export default {
  props:{
    icon:{
      type:String,
      default:''
    },
    barTitle:{
      type:String,
      default:'Points '
    },
    barPoints:{
      type:Object,
      default:{
        integral:0,
        curr_integral:0
      }
    }
  }  
}
</script>

<style scoped>
  img{
    width: 100%;
    vertical-align: top;
    
  }
    .topbar{
      display: flex;
      height: 1.2rem;
      /* background-color: #fff; */
      align-items: center;
      padding: 0 .2rem;
    }
    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      width: .8rem;
      height: .8rem;
      margin-left: .2rem;
    }
    .bar-title{
      color: #dc6841;
      font-size: .34rem;
      margin-left: .2rem;
    }
    .bar-points{
      color: #f9ca00;
      font-size: .24rem;
      margin-left: auto;
      display: flex;
      align-items: center;
      font-weight: bold;
    }
    .points-num{
      font-size: .38rem;
      margin-right: .2rem;
    }
    .poinst-item{
      text-align: right;
    }
    .points-totals,.points-available{
      display: flex;
      justify-content: space-between;
    }
    .total{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .total-num ,.score-num{
      font-size: .4rem;
      line-height: 1;
    }
    .score {
    width: fit-content;
    /* font-size: .18rem; */
  }
</style>