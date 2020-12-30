<template>
  <div class="remaining">
      <div class="main">
        <div class="title-bar">
          <div class="title-text">remaining score</div>
          <div class="title-points"><span class="total-num">{{totalNum}}</span> points</div>
        </div>
        <div class="data-pic">
          <div style="width:6rem;height:6rem" ref="chart"></div>
        </div>
        <div class="data-detail">
          <div class="detail-item" v-for="(item,index) in sourceArr" :key="index">
            <p class="left" :class="'t'+index">{{item.name}}</p><p class="right">{{item.source}}</p>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import { apiSource } from '../request/api'
const echarts = require('echarts');
export default{
	data () {
	return {
    sourceArr:[],
    totalNum:0
  };
	},
methods: {
	initCharts (indicatorArr,valueArr) {
	let myChart = echarts.init(this.$refs.chart);
  // 绘制图表


	myChart.setOption({
//  title: {
//         text: '基础雷达图'
//     },
    tooltip: {},
    // legend: {
    //     data: ['预算分配（Allocated Budget）']
    // },
    radar: {
        // shape: 'circle',
    
        name: {
            textStyle: {
                color: '#fff',
                // backgroundColor: '#999',
                // borderRadius: 3,
                // padding: [3, 5]
            }
        },
        indicator: indicatorArr,
         splitArea: {
                areaStyle: {
                    color: ['rgba(173, 118, 57, 0.2)',
                        'rgba(173, 118, 57, 0.4)', 'rgba(173, 118, 57, 0.6)',
                        'rgba(173, 118, 57, 0.8)', ],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
        },
         axisLine: {
                lineStyle: {
                    color: 'rgba(0, 0, 0, 0)'
                }
            },
         splitLine: {
                lineStyle: {
                    color: 'rgba(0, 0, 0, 0.5)'
                }
            },
        radius: 80,
    },
        series: [{
        // name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        silent:true,
        
        // 拐点大小
        symbolSize:2,
        // 拐点颜色
        itemStyle:{
                        normal:{
                            width:2,
                            color:'#7a1120',
                            borderColor:'#7a1120',  //拐点边框颜色
                        }
        },
        data: [
            {
                value: valueArr,
                // name: '123',
                areaStyle: {
                  color: 'rgba(255, 255, 255)'
                },
            },

            
         
        ]
    }]
		});
  },
  async getSource(){
    let res = await apiSource()
    let colorObj = [
      '#d19e3e',
      '#fb882b',
      '#00ccff',
      '#33cc99',
      '#9966ff',
      '#cc3300',
      ]
    let valueArr = []
     valueArr = res.lists.map(item=>
         item.integral
     )
     let maxNum = Math.max(...valueArr)
     console.log(maxNum)

     let indicatorArr = []
      indicatorArr = res.lists.map((item,index)=> {
        return new Object({
        name:item.name,
        max:maxNum,
        color:colorObj[index]
      })
      })
    
     this.sourceArr = indicatorArr.map((item,index)=>{
       return new Object({
         name:item.name,
         source:valueArr[index]
       })
     })
    this.totalNum = res.integral
    this.initCharts(indicatorArr,valueArr)
  }
},

mounted () {
  this.getSource()
}
}
</script>

<style scoped>
.main{
  width: 7.1rem;
  margin: 0 auto;
  background-color: #3c2a26;
  border: 1px solid #392723;
  border-radius: .1rem;
  padding-bottom: .6rem;
}
.title-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    padding: 0 .2rem;
    border-bottom: 1px solid #4f2c25;
}
.total-num{
  font-size: .44rem;
}
.title-text{
  width: fit-content;
  font-size: .28rem;
  color: #f4842b;
}
.title-points{
  width: fit-content;
  font-size: .28rem;
  color: #f9ca00;
}
.data-pic{
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.detail-item{
  width: 5.1rem;
  height: .5rem;
  margin: 0 auto .06rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #4f2c25;
}
.left{
  font-size:.26rem ;
}
.right{
  font-size: .24rem;
  font-weight: 600;
  color: #fff;
}
.left , .right{
  width: fit-content;

}
.t0{color:#d19e3e}
.t1{color:#fb882b}
.t2{color:#00ccff}
.t3{color:#33cc99}
.t4{color:#9966ff}
.t5{color:#cc3300}
</style>