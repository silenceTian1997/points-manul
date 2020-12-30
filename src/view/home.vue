<template>
  <div class="home-page flex-column">
    <div class="use-guide">
        <div class="parline">
          <span> use guide</span>
        </div>
        <div class="guide-content"> Employees can get 1000 points per month as exchange points. If
  they don't use it, they will be cleared one year later, Please
  remember to exchange.remember to exchange.
</div>
    </div>
    <div class="main flex-column">
    <div class="parline">
          <span> Product</span>
    </div>
    <div class="home-list theme-bg">
        <van-list
      >
        <!-- v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了" -->
        <!-- @load="onLoad" -->
        <pointsCell v-for="(item,index) in list" :key="index" :shopItem="item" :shopIndex="index" @handleCell='handleCell'/>
      </van-list> 
    </div>
    </div>
  <div class="car" @click="toCar">
      <div class="dot-tip">
        <span v-if="carNum > 10">10+</span>
        <span v-else>{{carNum}}</span>
      </div>
  </div>
</div>

</template>

<script>
import { onMounted , reactive , toRefs } from 'vue'
import { useRouter  } from 'vue-router'
import { apiGetGoods , apiGoodsAdd , apiGoodsDel } from '../request/api'
import { getInstance } from '../utils/utils'
import pointsCell from '../components/points-cell'

export default {
  components:{
    pointsCell
  },
  setup(){
    const router = useRouter();
    const instance = getInstance()

    const state = reactive({
      home : 'home hello ',
      list: [{
      pic:require('../static/images/login/j1.png'),
      icon:'',
      descTitle:'A bunch of flowers',
      descContent:'Flower express 33 rose bouquel gift box champagne rose birthday gift proposal to girltriend ',
      pointsNum:85,
      car:true
      }],
      carNum:0,
      loading: false,
      finished: false,
    })
    const getGoods = async ()=>{
       let res = await apiGetGoods()
        console.log(res)
        if (res.code === 1) {
          let goodlist = []
            goodlist =  res.lists.map(item => new Object({
              pid:item.id,
              pic:  'http://ep.zerom.cn/' + item.img,
              pointsNum:item.integral,
              descTitle:item.title,
              descContent:item.remark,
              icon:item.label,
              car:item.mycart,
              car_id:item.mycart_id
            }) 
           )
           state.list = goodlist
           instance.$store.state.integral =  res.integral
           totalItem()
           console.log('res',state)
          
        }else{
          instance.$toast(res.msg)
          localStorage.removeItem('logined')
        }
    }

       // 记录所有添加的个数
    const totalItem = ()=>{
        let num = 0
        state.list.map((item,index)=>{
          if(item.car == true) {
            num = num + 1
          }
        })
        state.carNum = num 
    }


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
            car:true
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

    const handleCell = async (ind)=>{
      console.log(ind,'22')
      // state.list.splice(ind,1)
      let pid = state.list[ind].pid
      let cart_id = state.list[ind].car_id
      // 判断 取消还是添加
      let res = cart_id ?  await apiGoodsDel({id:cart_id}) : await apiGoodsAdd({pid}) 
    
      if (res.code === 1) {
      if(cart_id){
        state.list[ind].car_id = 0
      }else{
        state.list[ind].car_id = res.id
      }
        state.list[ind].car = !state.list[ind].car
        totalItem()
      }
      }

    const toCar = ()=>{
      // Router
      router.push('/mine/shoppingCar')
    }

    onMounted(async ()=>{
      getGoods()

    })
    return {
      ...toRefs(state),
      handleCell,
      toCar,
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
     width: 7.1rem;
     margin: 0 auto;
     flex: 1;
    height: 0;
   }
   .use-guide{
     width: 7.1rem;
     /* height: 2.06rem; */
     margin: 0 auto;
     background-color: #3c2a26;
     border: 1px solid #382623;
     border-radius: .2rem;
   }
   .home-list{
     flex: 1;
     height: 0;
     overflow-x:hidden ;
     overflow-y: scroll;
   }
   .parline{
     font-size: .3rem;
     color: #fb882b;
     font-weight: bold;
     padding: .2rem .3rem;
     border-bottom: 1px solid #462f29;
   }
   .guide-content{
     padding: .3rem;
     font-size: .2rem;
     color: #c2bbab;
   }
   .car{
     width: 1.04rem;
     height: 1.04rem;
     position: fixed;
     bottom: 14%;
     left: .2rem;
     border-radius: 50%;
     background-size: cover;
     background-position: center;
     background-image: url(../static/images/user/car.png);
   }
   .dot-tip{
     width: .36rem;
     height: .36rem;
     border-radius: 50%;
     background-color: #ff0000;
     color: #fff;
     position: absolute;
     right: 0;
     font-size: .26rem;
     display: flex;
     justify-content: center;
     align-items: center;
   }
</style>