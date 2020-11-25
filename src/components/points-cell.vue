
<template>
  <div class="points-cell">
      <div class="shop-view">
        <img class="shop-pic" :src="shopItem.pic" alt="">
        <!-- <div class="shop-icon"></div> -->
      </div>
      <div class="shop-desc">
          <div class="desc-title">
            {{shopItem.descTitle}}
          </div>
          <div class="desc-content">{{shopItem.descContent}}</div>
      </div>
      <div class="shop-operate" @click="handleOpShow">
          <div class="points-item">
              <div class="point-num">{{shopItem.pointsNum}}</div>
              <div class="point-text">points</div>
          </div>
          <!-- <div class="points-more">
              <div class="more-item">
                 <div class="point-num">{{shopItem.pointsNum}}</div>
                 <div class="point-text">points</div>
              </div>
              <div class="more-icon"></div>
          </div> -->
      </div>
      <div class="mask-opreate" @click="opShow = false" v-if="opShow">
         <div class="shop-operate">
           <div class="op-conten">
              <div class="op-item edit" @click.stop="handleEditOrDelete(1)">
                  Edite
              </div>
              <div class="op-item delete" @click.stop="handleEditOrDelete(0)">
                  Delete
              </div>
           </div>
        
         </div>
      </div>
  </div>  
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  props:{
    shopItem:{
      type:Object,
      default:{
        pic:'',
        icon:'',
        descTitle:'',
        descContent:'',
        pointsNum:0,
      }
    },
    shopIndex:{
      type:Number,
      default:0
    }
  },
  emits:['handleDelete'],
  setup(props, ctx){
    const state = reactive({
        opShow:true,
    })
    
    const handleOpShow = ()=>{
      state.opShow = true
    }

    const handleEditOrDelete = (type)=>{
        // 1 编辑  0 删除
        let operate = {
          '0':'delete',
          '1':'edite'
        }
        switch (operate[type]) {
          case 'edite':
            
            break;
          case 'delete':
            ctx.emit('handleDelete',props.shopIndex)
            break;
          default:
            break;
        }
    }
    return {
      ...toRefs(state),
      handleOpShow,
      handleEditOrDelete
    }
  }
}
</script>

<style scoped>
@import '../static/css/mixin.css';
  .points-cell{
    display: flex;
    height: 2rem;
    background: yellowgreen;
    justify-content: space-between;
    position: relative;
    margin-bottom: .2rem;
  }
  .shop-view{
    width: 2rem;
    height: 2rem;
    position: relative;
    background-color: teal;
  }
  .shop-desc{
    background-color: #0094ff;
    flex: 1;
    width: 0;
  }
  .shop-operate{
    width: 1rem;
    height: 100%;
    background-color: tomato;
    margin-left: auto;
    overflow: hidden;
  }

  .mask-opreate{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .op-conten{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .op-item{
    flex: 1;
    height: 0;
    color: #fff;
  }

</style>