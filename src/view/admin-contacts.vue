<template>
  <div class="contacts-page">
    {{ adminContacts }}

      my Contacts
    <div class="contacts-list-container">
      <div class="contacts-list-search">
            <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      input-align="center"
    />
      </div>
      <div class="contacts-list">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item :title="'标题'+item" v-for="(item,index) in 4" :key="index" :name="index">
              <div>{{ item }}</div>
              <div>{{ item }}</div>
              <div>{{ item }}</div>
              <div>{{ item }}</div>
            
              <div class="panel-item">
                <div class="avar"></div>
                <div class="uesr-info">
                    <div class="user-name"></div>
                    <div class="user-tel"></div>
                </div>
                <div class="count-bar">
                    <div class="count-reduce" @click="handleCount('reduce')" ><span v-show="pointsNum != 0"> -</span> </div>
                    <div class="count-num">
                      <input type="number" :value="pointsNum"> 
                    </div>
                    <div class="count-plus"  @click="handleCount('plus')">+</div>
                </div>
              </div>

          </van-collapse-item>

        </van-collapse>
      </div>
    </div>

    
  </div>
</template>

<script>
import { reactive , toRefs} from 'vue'
export default {
  setup(){
    const state = reactive({
      adminContacts:'adminContacts',
      activeName: '0',
      value:'',  
      pointsNum:0
    })
    const handleCount = ( type) =>{
      // state.pointsNum 
      switch (type) {
        case 'reduce':
            if(state.pointsNum == 0)  return
            state.pointsNum = state.pointsNum - 1
            
          break;
        case 'plus':
            state.pointsNum = state.pointsNum + 1
          break;
      
        default:
          break;
      }
    }
    return{
      ...toRefs(state),
      handleCount
    }
  }
}
</script>

<style scoped >
  .panel-item{
    display: flex;
    align-items: center;
  }
  .avar{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: red;

  }
  .uesr-info{
    /* width: 50%; */
    flex: 1;
  }

  .count-bar{
    display: flex;
  }
  .count-num{
    width: 1rem;
    background-color: #ccc;
  }
  .count-num input{
    width: 100%;
    text-align: center;
    border:none;
    background-color: transparent;
  }
</style>