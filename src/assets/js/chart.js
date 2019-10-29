
module.exports = {
    bar: {
        chart: {//图表样式
            type: 'area',//指定图表的类型,这里是面积图
        },
        //是否启用Labels。x，y轴默认值都是true，如果想禁用（或不显示）Labels，设置该属性为false即可
        credits: {
            enabled: false
        },
        title: {//指定图表标题
            text: '  ',
            align: 'left',
            style: {
                color: '#666',
                fontSize: '16px',
            }
        },
        colors: ['#fd7289', '#9257ff', '#5c86fe'],
        xAxis: {//图表的横坐标,一个轴为{ }
            title: {//横坐标标题
                text: ''
            },
            //x坐标轴的刻度值
            categories: ['4:40', '4:41', '4:42', '4:43', '4:44', '4:45', '4:46', '4:47', '4:48', '4:49', '4:50', '4:51', '4:52', '4:53', '4:54', '4:55', '4:56', '4:57', '4:58', '4:59', '5:00', '5:01', '5:02', '5:03', '5:04', '5:05', '5:06', '5:07', '5:08', '5:09', '5:10', '5:11', '5:12', '5:13', '5:14', '5:15', '5:16', '5:17', '5:18', '5:19', '5:20', '5:21', '5:22', '5:23', '5:24', '5:25', '5:26', '5:27', '5:28', '5:29', '5:30', '5:31', '5:32', '5:33', '5:34', '5:35', '5:36', '5:37', '5:38', '5:39', '5:40'], //指定x轴分组
            labels: {//坐标轴上的刻度值（显示间隔、样式、单位）
                style: {
                    color: '#999999'
                },
                format: '',//刻度值的单位
                // format: '{value}pm',//刻度值的单位
                align: 'center'
            },
            lineColor: '#c9cfd9',//坐标轴的颜色
            tickColor: '#c9cfd9',//坐标轴上的刻度线的颜色
            tickLength: 5,//坐标轴上刻度线的长度
            gridLineWidth: 1,//网格线宽度。x轴默认为0，y轴默认为1px。
            gridLineColor: '#c9cfd9',//网格线颜色。默认为：#C0C0C0。
            // gridLineDashStyle: 'Dash',//网格线线条样式。和Css border-style类似，常用的有：Solid、Dot、Dash
            tickInterval: 5,//刻度间隔
            tickmarkPlacement: 'between',//刻度线对齐方式，有between和on可选，默认是between
            style: {
                color: '#999999',
                fontSize: 10
            },
            crosshair: {//鼠标放上后显示纵轴的数据
                color: '#999',
                width: 1
            }
        },
        yAxis: [
            {//图表的纵坐标，多个轴[{轴一},{轴二}]
                gridLineWidth: 1,
                gridLineColor: '#f2f2f2',
                tickPositions: [0, 25, 50, 75, 100],//y轴刻度值
                tickLength: 0,
                title: {//纵坐标标题
                    text: ' ',
                    margin: 0,
                    style: {
                        color: '#999999',
                        fontSize: 10
                    }
                },
                labels: {//坐标轴上刻度的样式及单位
                    style: {
                        color: '#999999',
                        fontSize: 10
                    },
                    format: '',//坐标轴上的单位
                },
                offset: -10,//距离坐标轴的距离
            },
            {
                gridLineWidth: 1,
                gridLineColor: '#f2f2f2',
                tickColor: '#fff',
                tickInterval: 25,
                tickLength: 0,
                title: {
                    text: '',
                    margin: 0,
                    style: {
                        color: '#999999',
                        fontSize: 10
                    }
                },
                labels: {
                    style: {
                        color: '#999999',
                        fontSize: 10
                    },
                    format: ''
                },
                opposite: true,//设置opposite: true表示该轴位置反转，即为y轴时显示在右侧
                offset: -10
            }
            ],
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
        //标示线总是垂直于它属于的轴。它可单独定义在x轴或y轴，也可以同时定义在x轴和y轴
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

        series: [{//数据列是一组数据集合
            name: '新增顾客',//name 代表数据列的名字，并且会显示在数据提示框（Tooltip）及图例（Legend）中
            data: [
                5, 6, 10, 20, 50, 45, 30, 20, 10, 15,
                16, 17, 18, 18, 30, 26, 25, 24, 20, 26,
                36, 46, 50, 51, 52, 40, 30, 20, 19, 18,
                30, 50, 55, 56, 70, 72, 73, 60, 55, 54,
                53, 40, 39, 35, 32, 30, 20, 18, 3, 5,
                10, 12, 13, 23, 34, 56, 60, 70, 80, 90, 80
            ],
            // tooltip: {
            //     valueSuffix: '%'
            // }
        }, {
            name: '新增注册顾客',
            data: [
                16, 17, 18, 18, 30, 26, 25, 24, 20, 26,
                36, 46, 50, 51, 52, 40, 30, 20, 19, 18,
                30, 50, 55, 56, 70, 72, 73, 60, 55, 54,
                53, 40, 39, 35, 32, 30, 20, 18, 3, 5,
                10, 12, 13, 23, 34, 56, 60, 70, 80, 90,
                5, 6, 10, 20, 50, 45, 30, 20, 10, 15, 20
            ],
            // tooltip: {
            //     valueSuffix: '%'
            // }
        }, {
            name: '新增游客',
            data: [
                10, 11, 11, 12, 12, 13, 14, 15, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16
            ],
            // tooltip: {
            //     valueSuffix: '℃'//值的前缀、后缀及小数点
            // },
            // yAxis: 1
        }]
    },
}
