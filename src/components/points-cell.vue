
<template>
  <div class="points-cell">
    <div class="shop-view">
      <img class="shop-pic" :src="shopItem.pic" alt="" />
      <!-- <div class="shop-icon"></div> -->
    </div>
    <div class="shop-desc">
      <div class="desc-title">
        {{ shopItem.descTitle }}
      </div>
      <div class="desc-content">{{ shopItem.descContent }}</div>
      <div class="time-bar" v-if="type != 'show'">
        <div class="time-title">{{$t('order.time')}}</div>
        <div class="time">{{shopItem.time}}</div>
      </div>
    </div>

    <template v-if="type == 'show'">
      <div class="shop-operate " :class="shopItem.car?'yecar':'nocar'" @click="handleOpShow">
        <div class="points-item">
          <div class="point-num ed-item">{{ shopItem.pointsNum }}</div>
          <div class="point-text ed-item">{{$t('order.points')}}</div>
        </div>
        <!-- <div class="points-more">
                <div class="more-item">
                  <div class="point-num">{{shopItem.pointsNum}}</div>
                  <div class="point-text">points</div>
                </div>
                <div class="more-icon"></div>
            </div> -->
      </div>
    </template>

    <!-- 购物车 -->
    <template v-if="type == 'shopCar'">
      <div class="shop-operate shopcar-operate">
        <div class="delcart" @click="handleOpShow('del')"></div>
        <div class="shop-item">
          <div class="point-num ed-item">{{ shopItem.pointsNum }}</div>
          <div class="point-text ed-item">{{$t('order.points')}}</div>
        </div>
        <div class="count-bar">
          <div class="sub">
            <van-icon class="count-i" name="minus" @click="handleOpShow('minus')" />
          </div>
          <div class="num">{{shopItem.gouNum}}</div>
          <div class="add" @click="handleOpShow('add')"><van-icon class="count-i" name="plus" /></div>
        </div>
      </div>
    </template>
    <!-- 订单 -->
    <template v-if="type == 'order'">
      <div class="shop-operate shopcar-operate" :class="!shopItem.exchange?'':'exchanged'" @click="handleOpShow"> 
        <div class="shop-item" >
          <div class="point-num ed-item">{{ shopItem.pointsNum }}</div>
          <div class="point-text ed-item">{{$t('order.points')}}</div>
        </div>
        <div class="order-status">
            <!--  -->
            <div class="no" v-if="!shopItem.exchange" :key="new Date()">
              <img src="../static/images/user/no.png" alt="">
            </div>
            <div class="yes" v-else :key="new Date()">
              <!-- <img src="../static/images/user/yes.png" alt=""> -->
              <van-icon name="success" />
            </div>
        </div>
      </div>
    </template>

    <!-- 兑换 -->
    <template v-if="type == 'check'">
      <div class="shop-operate " :class="shopItem.car?'yecar':'nocar'" @click="handleOpShow">
        <div class="points-item">
          <div class="point-num ed-item">{{ shopItem.num }}</div>
          <div class="point-text ed-item">{{$t('order.pieces')}}</div>
        </div>
        <!-- <div class="points-more">
                <div class="more-item">
                  <div class="point-num">{{shopItem.pointsNum}}</div>
                  <div class="point-text">points</div>
                </div>
                <div class="more-icon"></div>
            </div> -->
      </div>
    </template>









    <!--  admin操作 -->
    <!-- <div class="mask-opreate" @click="opShow = false" v-if="opShow">
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
      </div> -->
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  props: {
    shopItem: {
      type: Object,
      default: {
        pic: '',
        icon: "",
        descTitle: "",
        descContent:
          "",
        pointsNum: 0,
        car:false,
        gouNum:0
      },
    },
    type: {
      type: String,
      default: "show",
    },
    shopIndex: {
      type: Number,
      default: 0,
    },
  },
  emits: ["handleCell"],
  setup(props, ctx) {
    const state = reactive({
      opShow: false,
    });
    const isCar = Object.assign({},props.shopItem)
    const isIndex = props.shopIndex

    const handleOpShow = (options) => {
      // state.opShow = true;
      // isCar = !isCar



      console.log('123')
      if(props.type === 'shopCar'){
        console.log(options)
        ctx.emit("handleCell", {
          isIndex,
          options
        });
      }else{
        
        if (props.type === 'order' && props.shopItem.exchange) {
          return
        }


        ctx.emit("handleCell", isIndex);
      }
    };

    const handleEditOrDelete = (type) => {
      // 1 编辑  0 删除
      let operate = {
        0: "delete",
        1: "edite",
      };
      switch (operate[type]) {
        case "edite":
          break;
        case "delete":
          ctx.emit("handleCell", props.shopIndex);
          break;
        default:
          break;
      }
    };
    return {
      ...toRefs(state),
      handleOpShow,
      handleEditOrDelete,
    };
  },
};
</script>

<style scoped>
@import "../static/css/mixin.css";
.points-cell {
  display: flex;
  height: 2.04rem;
  /* background: yellowgreen; */
  justify-content: space-between;
  position: relative;
  margin-bottom: 0.2rem;
  border-radius: 0.14rem;
  overflow: hidden;
}
img {
  width: 100%;
  vertical-align: top;
}
.shop-pic {
  object-fit: cover;
}
.shop-view {
  width: 2.6rem;
  height: 2.04rem;
  position: relative;
  border: 1px solid #392724;
  /* background-color: teal; */
}
.shop-desc {
  padding: 0.2rem;
  background-color: #3c2a26;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 0;
  border: 1px solid #392724;

}
.desc-title {
  font-size: 0.28rem;
  height: .4rem;
  color: #dc6841;
  font-weight: bold;
  margin-bottom: 0.2rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.desc-content {
  font-size: 0.2rem;
  line-height: 1.2;
  color: #8d8176;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.shop-operate {
  width: 1.45rem;
  height: 100%;
  background-color: #fb882b;
  margin-left: auto;
  overflow: hidden;
  border: 1px solid #392724;
  position: relative;
}
.shopcar-operate {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: transparent !important;
}
.shopcar-operate .ed-item {
  color: #fff;
}
.shopcar-operate.exchanged{
  background-color: #fb882b !important;
}
.shopcar-operate.exchanged .shop-item{
  margin-bottom: .1rem;
}
.no{
  width: .69rem;
  height: .13rem;
}
.yes{
  width: .67rem;
  height: .48rem;
  font-size: .6rem;
  text-align: center;
  color: #fff;
}
.points-item {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.shop-item{
  margin-bottom: .4rem;
}
.shop-item .point-num {
  line-height: 1;
}
.count-bar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.add , .sub {
  width: .35rem;
  height: .35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  font-size: .28rem;
}
.num{
  font-size: .32rem;
  font-weight: 700;
  color: #fff;
  margin:  0 .14rem;
}
.point-num {
  font-size: 0.6rem;
  font-weight: bold;
  text-align: center;
  color: #52352d;
  line-height: 2.5;
}
.point-text {
  text-align: center;
  font-size: 0.3rem;
}
.mask-opreate {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.op-conten {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.op-item {
  flex: 1;
  height: 0;
  color: #fff;
  font-size: 0.36rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  line-height: 3;
}
.ed-item {
  height: 50%;
}
.yecar{
  background-color: #c2bbab;
}
.delcart{
  position: absolute;
  width: .3rem;
  height: .3rem;
  top: 0;
  right: 0;
  background-size: 100%;
  background-image: url(../static/images/user/del-icon.png);
}

.time-bar{
  height: .5rem;
}
.time-title{
    font-size: .24rem;
    color: #eee;
    font-weight: 400;
}
.time{
    width: 100%;
    font-size: .22rem;
    color: #ccc;
}
</style>