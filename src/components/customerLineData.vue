<template>
  <vue-highcharts :highcharts="Highcharts" :options="options" ref="lineCharts"></vue-highcharts>
</template>

<script>
  import Highcharts from 'highcharts';
  import HighchartsNoData from 'highcharts-no-data-to-display';
  import VueHighcharts from 'vue2-highcharts';
  HighchartsNoData(Highcharts);
    export default {
        name: "customerLineData",
      props: {
        chartData: {
          type: Object
        },
        lineFlag: {
          type: Boolean
        }
      },
      components: {
        VueHighcharts,
      },
      data() {
        return {
          Highcharts: Highcharts,
          radios: 'area',
          options: {
            chart: {
              type: 'area',
              spacing: [10, 30, 20, 30],
              backgroundColor: 'rgba(0,0,0,0)',
            },
            title: {
              text: '',
              style: {
                'color': '#ffffff',
                'fongSize': '13px'
              }
            },
            noData: {
              style: {
                'color': '#457adb'
              }
            },
            legend: {
              enabled: false
            },
            loading: {
              style: {
                "color": '#95C7FF',
                "backgroundColor": "rgba(255,255,255,0.1)",
              }
            },
            credits: {
              text: '',
            },
            colors: ['#9567ff', '#5c86fe'],
            tooltip: {//数据提示框
              headerFormat: '<small>{point.key}</small><br/>',//标题格式
              pointFormat: '<span style="color:{series.color};">{series.name}</span>：{point.y}<br/>',
              shared: true,
              followPointer: true,//跟随鼠标
              followPointerMove: true,//是否跟随手指移动
              // footerFormat: 'muzi',//尾部格式化字符串
              style: {
                fontSize: 10,
                fontFamily: '微软雅黑',
                fontWeight: 'normal',
                color: '#666'
              }
            },
            plotOptions: {
              area: {
                //pointStart: 1940,
                marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                    hover: {
                      enabled: true
                    }
                  }
                },
                fillOpacity: 0.2,
                lineWidth: 1
              }
            },
            legend: {//图例居中显示在图表下方
              align: 'center',
              symbolRadius: 2,//图标圆角
              symbolWidth: 16,//图标宽度
              symbolHeight: 10,//图标高度
              itemStyle: {
                color: '#888',
                fontWeight: 'normal',
                fontSize: 14
              },
              itemMarginBottom: -14,//图例项底部外边距
            },
            yAxis: {
              title: {
                text: null
              },
              allowDecimals: false,
              tickAmount: 6,
              gridLineColor: '#567398',
              labels: {
                style: {
                  color: "#95C7FF",
                  fontSize: '13px'
                }
              }
            },
            xAxis: {
              tickColor: '#567398',
              lineColor: '#567398',
              labels: {
                style: {
                  color: "#95C7FF",
                }
              }
            },
            series: [],
          }
        }
      },
      watch: {
        lineFlag: function() {
          //监听刷新chart
          this.refreshChart(this.$props.chartData);
          // setTimeout(()=>{
          //
          // },0)
        }
      },
      created() {
        let docW = document.body.clientWidth;
        if(docW < 1440) {
          this.options.chart.width = 620;
          this.options.chart.height = 250;
        }else if(docW < 1930){
          this.options.chart.height = 340;
        }else {
          this.options.chart.height = 360;
        };

        Highcharts.setOptions({
          lang: {
            thousandsSep: ',',
            noData: '暂无数据'
          }
        });
      },
      mounted() {
        this.getChart(this.$props.chartData);

      },
      methods: {

        getChart(val) {
          let lineCharts = this.$refs.lineCharts;
          lineCharts.delegateMethod('showLoading', 'Loading...');
          lineCharts.removeSeries();
          setTimeout(() => {
            lineCharts.getChart().xAxis[0].setCategories(val.dateList);
            lineCharts.hideLoading();
            for(let i = 0; i< val.data.length; i++){
              lineCharts.addSeries({
                name: val.data[i].name,
                data: val.data[i].data
              });
            }
          }, 0)
        },


        //定时刷新的请求
        refreshChart(val) {
          // console.log(val);
          this.$refs.lineCharts.removeSeries();
          this.$refs.lineCharts.getChart().xAxis[0].setCategories(val.dateList);
          for(let i = 0; i< val.data.length; i++){
            this.$refs.lineCharts.addSeries({
              name: val.data[i].name,
              data: val.data[i].data
            });
          }
        },
      }
    }
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 1440px) {
    .wrap {
      .statistics-title {
        text-align: center;
        margin: 0;
        height: 45px;
        font-size: 16px;
        padding-top: 18px;
      }
      .chart-radio-wrap {
        text-align: right;
        height: 35px;
        span {
          display: inline-block;
          cursor: default;
          margin-right: 10px;
        }
        .lc-active {
          color: #95C7FF;
        }
      }
    }
  }

  @media screen and (min-width: 1440px)  and (max-width: 1930px) {
    .wrap {
      .statistics-title {
        text-align: center;
        margin: 0;
        height: 45px;
        font-size: 16px;
        padding-top: 18px;
      }
      .chart-radio-wrap {
        text-align: right;
        height: 35px;
        span {
          display: inline-block;
          cursor: default;
          margin-right: 10px;
        }
        .lc-active {
          color: #95C7FF;
        }
      }
    }
  }

  @media screen and (min-width: 1930px) {
    .wrap {
      .statistics-title {
        text-align: center;
        margin: 0;
        height: 45px;
        font-size: 20px;
        padding-top: 18px;
      }
      .chart-radio-wrap {
        text-align: right;
        height: 35px;
        span {
          display: inline-block;
          cursor: default;
          margin-right: 10px;
        }
        .lc-active {
          color: #95C7FF;
        }
      }
    }
  }
</style>
