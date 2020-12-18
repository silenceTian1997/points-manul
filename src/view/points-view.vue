<template>
  <div class="remaining">
      <div class="main">
        <div class="title-bar">
          <div class="title-text">remaining score</div>
          <div class="title-points">520 points</div>
        </div>
        <div class="data-pic">
          <div style="width:6rem;height:6rem" ref="chart"></div>
        </div>
        <div class="data-detail">
          <div class="detail-item" v-for="(item,index) in 6" :key="index">
            <p class="left" :class="'t'+index">Points{{index +1}}</p><p class="right">200</p>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
const echarts = require('echarts');
export default{
	data () {
	return {};
	},
methods: {
	initCharts () {
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
        indicator: [
            { name: 'points1', max: 6500,  color:'#d19e3e'},
            { name: 'points2', max: 16000 ,color:'#fb882b'},
            { name: 'points3', max: 30000 ,color:'#00ccff'},
            { name: 'points4', max: 38000 ,color:'#33cc99'},
            { name: 'points5', max: 52000 ,color:'#9966ff'},
            { name: 'points6', max: 25000 ,color:'#cc3300'}
        ],
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
        name: '预算 vs 开销（Budget vs spending）',
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
                value: [6000, 14000, 20000, 34000, 50000, 20000],
                name: '123',
                areaStyle: {
                  color: 'rgba(255, 255, 255)'
                },
            },

            
         
        ]
    }]
		});
	}
},
mounted () {
this.initCharts();
}
}
</script>

<style scoped>
.main{
  width: 7.1rem;
  margin: 0 auto;
  background-color: #3c2a26;
}
.title-bar{
  display: flex;
  justify-content: space-between;
}
.title-text{
  width: fit-content;
  font-size: .28rem;
  color: #f4842b;
}
.title-points{
  width: fit-content;
  font-size: .26rem;
  color: #f9ca00;
}
.data-pic{
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.detail-item{
  display: flex;
  justify-content: space-between;
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