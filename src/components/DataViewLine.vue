<template>
	<div class="wrap">
		<vue-highcharts :highcharts="Highcharts" :options="options" ref="lineCharts"></vue-highcharts>
	</div>
</template>

<script>
	import Highcharts from 'highcharts';
	import HighchartsNoData from 'highcharts-no-data-to-display';
	import VueHighcharts from 'vue2-highcharts';
	HighchartsNoData(Highcharts);
	export default {
		name: 'data-view-line',
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
				radios: 'column',
				options: {
					chart: {
						type: 'column',
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
					colors: [],
					plotOptions: {
						series: {
							fillColor: 'rgba(149,199,255,0.2)',
              pointWidth:8,
						}
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
			}
		},
		created() {
			let docW = document.body.clientWidth;
			// if(docW < 1440) {
			// 	this.options.chart.width = 520;
			// 	this.options.chart.height = 280;
			// }else if(docW < 1930){
			// 	this.options.chart.height = 360;
			// }else {
			// 	this.options.chart.height = 388;
			// };

      this.options.chart.width = 430;
      this.options.chart.height = 180;

			Highcharts.setOptions({
				lang: {
					thousandsSep: ',',
					noData: '暂无数据'
				}
			});
		},
		mounted() {
			this.getChart(this.$props.chartData);
			// this.refreshChart();
		},
		methods: {

			getChart(val) {
				let lineCharts = this.$refs.lineCharts;
				lineCharts.delegateMethod('showLoading', 'Loading...');
				lineCharts.removeSeries();
				setTimeout(() => {
					lineCharts.getChart().xAxis[0].setCategories(val.name);
					// lineCharts.getChart().colors.setColors(val.color);
					lineCharts.hideLoading();
					lineCharts.addSeries({
						name: '数量',
						data: val.data
					});
          // for(let i = 0; i< val.data.length; i++){
          //   this.$refs.lineCharts.addSeries({
          //     name: val[i].name,
          //     data: val[i].data
          //   });
          // }
				}, 0)
			},



			//定时刷新的请求
			refreshChart() {
				let lineCharts = this.$refs.lineCharts;
        lineCharts.getChart().xAxis[0].setCategories(this.$props.chartData.name);
        lineCharts.getChart().series[0].setData(this.$props.chartData.data);
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
