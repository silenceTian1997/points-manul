<template>
  <div class="topbar">
    <div class="icon"></div>
    <div class="bar-title"> {{ barTitle }}</div>
    <div class="bar-points"> {{ barPoints }}Points</div>
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
      default:'Produce Page'
    },
    barPoints:{
      type:Number || String,
      default:0
    }
  }  
}
</script>

<style scoped>
    .topbar{
      display: flex;
      height: 1rem;
      /* background-color: #fff; */
      align-items: center;
    }
    .icon{
      width: .4rem;
      height: .4rem;
      background-color: pink;
    }
    .bar-title{
      color: orange;
      font-size: .48rem;
    }
    .bar-points{
      color: yellow;
      font-size: .48rem;
      margin-left: auto;
    }
</style>