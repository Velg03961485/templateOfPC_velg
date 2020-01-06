<template>
  <div class="ageWrap">
    <vue-highcharts :highcharts="Highcharts" :options="options" ref="allChartsTwo"></vue-highcharts>
  </div>
</template>

<script>

  import Highcharts from 'highcharts';
  import HighchartsNoData from 'highcharts-no-data-to-display';
  import VueHighcharts from 'vue2-highcharts';
  HighchartsNoData(Highcharts);

    export default {
        name: "activityRingTwo",
      components: {
        VueHighcharts,
      },
      props:{
        CusDataTwo:{
          type:Array
        },
        timeTakeTwo: {
          type: Boolean
        }

      },
      data() {
        return {
          Highcharts: Highcharts,
          options: {
            chart: {
              type: 'pie',
              backgroundColor: 'rgba(0,0,0,0)',
              spacing : [20,0,20,0]
            },
            title: {
              text:'',
              floating: true,
            },
            credits: {
              text: '',
            },
            loading:{
              style:{
                "color":'#95C7FF',
                "backgroundColor": "rgba(255,255,255,0.1)",
              }
            },
            noData:{
              style:{'color':'#457adb'}
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.y}</b><br/>占比:{point.percentage:.2f}%',
            },
            colors:[
              'rgba(254,217,115)',
              'rgb(254,149,103)',
              'rgb(150,226,79)',
              'rgb(156,114,188)',
              'rgb(254,162,55)',
              'rgb(129,254,244)',
              'rgb(228,83,254)',
            ],
            plotOptions: {
              pie: {
                innerSize:"75%",
                borderColor:null,
                dataLabels:{
                  enabled: true,
                  color:"#000",
                  format: '<b>{point.name}</b><br/> {point.y}人/{point.percentage:.2f} % <br/>',
                  distance:30
                }
              },

            },
            series: [],
          }
        }
      },
      watch:{
        timeTakeTwo:function(){
          //监听更新chart,
          setTimeout(()=>{
            this.refreshData(this.$props.CusDataTwo);
          },0)
        }

      },
      created() {
        let docW = document.body.clientWidth;
        // if (docW < 1440) {
        //   this.options.chart.width = 460;
        //   this.options.chart.height = 265;
        // } else if(docW < 1930){
        //   this.options.chart.width = 460;
        //   this.options.chart.height = 305;
        // }else{
        //   this.options.chart.width = 560;
        //   this.options.chart.height = 340;
        // };
        this.options.chart.width = 417;
        this.options.chart.height = 285;
        Highcharts.setOptions({
          lang: {
            thousandsSep: ',',
            noData: '暂无数据'
          }
        });
      },
      mounted(){
        this.getChart(this.$props.CusDataTwo);
      },
      methods: {
        getChart(val) {
          let allChartsTwo = this.$refs.allChartsTwo;
          allChartsTwo.delegateMethod('showLoading', 'Loading...');
          allChartsTwo.removeSeries();
          setTimeout(() => {
            allChartsTwo.hideLoading();
            allChartsTwo.addSeries({
              name: "人数",
              data: val
            })
          },0)
        },

        //刷新图表数据
        refreshData(val){
          this.$refs.allChartsTwo.getChart().series[0].setData(val);
        },
      }
    }
</script>

<style scoped>

</style>
