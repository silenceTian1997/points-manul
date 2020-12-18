<template>
  <div class="rank-page">
      <div class="title-bar">
        <div class="ranking">Ranking</div>
        <div class="name">Name</div>
        <div class="id">ID</div>
        <div class="points">Points</div>
      </div>
      <div class="main">
        <div class="content-bar" v-for="(item,index) in 5" :key="index">
        <div class="ranking">{{index}}</div>
        <div class="name">Keith</div>
        <div class="id">106886</div>
        <div class="points">
            99
          Points</div>
      </div>
      </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {

  setup(){
      const state = reactive({
 
    })


    return{
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>

  .title-bar{
    display: flex;
    justify-content: space-around;
  }
  .ranking{
    width: 1rem;
    font-size: .26rem;
  }
  .name{
    width: 1rem;
    font-size: .26rem;

  }
  .id{
    width: 1rem;
    font-size: .26rem;

  }
  .points{
    width: 1rem;
    font-size: .26rem;
  }
  .content-bar{
    display: flex;
    justify-content: space-around;
  }

</style>