<template>
  <div class="rank-page">
      <div class="title-bar">
        <div class="ranking">Ranking</div>
        <div class="name">Name</div>
        <div class="id">ID</div>
        <div class="points">Points</div>
      </div>
      <div class="main">
        <div class="content-bar" v-for="(item,index) in rankList" :key="index">
        <div class="ranking">{{index +1 }}</div>
        <div class="name">{{item.name}}</div>
        <div class="id">{{item.group_id}}</div>
        <div class="points">
            {{item.integral}}
          Points</div>
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
          rankList : []
    })
    const getRanking = async ()=>{
      let res = await apiRanking()
      console.log(res)
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