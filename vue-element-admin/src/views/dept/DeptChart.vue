<template>
  <div class="chart-container">
    <div ref="chart" style="height: 100%;width: 100%"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import resize from '@/components/Charts/mixins/resize'

  export default {
    minxins:[resize],
    data() {
      return {
        chart:null
      }
    },
    mounted(){
      this.chart=echarts.init(this.$refs.chart);
      this.chart.setOption({
        title:{
          text:'冰淇淋系列销售统计',
          subtext:'各省份销量对比'
        },
        xAxis:{
          data:["河北","河南","广东","广西","福建"]
        },
        yAxis:{
          gridIndex:0,min:0,max:400,interval:50
        },
        //不同维度的数据统计结果
        series:[
          {
            name:'大冰卡',
            type:'bar',
            data:[200,400,300,300,350]
          },
          {
            name:'小冰卡',
            type:'bar',
            data:[100,300,200,350,250]
          }
        ]
      });
    }
  }
</script>

<style>
  .chart-container{
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
  }
</style>
