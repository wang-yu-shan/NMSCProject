<template>
    <div
        :id="chartId"
        style="width:491px;height:240px"
        ref="chartId"
    ></div>
</template>
<script>
import echarts from 'echarts'
import { nanoid } from 'nanoid'
export default {
    beforeDestroy () {
        if (!this.chart) return false
        this.chart.dispose()
        this.chart = null
    },
    props: {
        XData: {
            type: Array,
            default: () => {
                return ['04-12', '04-13', '04-14', '04-15', '04-16', '04-17']
            }
        },
        YData: {
            type: Array,
            default: () => {
                return [10, 50, 60, 70, 80, 90, 10]
            }
        }
    },
    data () {
        return {
            chartId: nanoid(),
            chart: null,
            i: 0,
            themeColor: null,
            themeColor2: null
        }
    },
    mounted () {
        this.initChart()
    },
    methods: {
        initChart () {
            var chartDom = document.getElementById(this.chartId)
            if (chartDom !== null) {
                if (chartDom.hasAttribute('_echarts_instance_')) {
                    chartDom.removeAttribute('_echarts_instance_')
                }
            }
            this.chart = echarts.init(chartDom)
            // 实例
            const option = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.XData,
                    axisTick: {
                        show: false // 不显示坐标轴刻度线
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#fff',
                            width: 1,
                            type: 'solid'
                        },
                        margin: 15
                    }
                },
                tooltip: {
                    trigger: 'item',
                    // trigger: 'axis',
                    confine: false,
                    position: 'inside'
                },
                grid: {
                    x: 40,
                    y: 30,
                    x2: 30,
                    y2: 60,
                    borderWidth: 1
                },
                yAxis: {
                    type: 'value',
                    nameTextStyle: { // y轴上方单位的颜色
                        color: '#ccc'
                    },
                    axisLabel: { // y轴文字的配置
                        textStyle: {
                            color: '#ccc',
                            margin: 15
                            // fontSize:
                        }
                    // formatter: '{value} %'//y轴的每一个刻度值后面加上‘%’号
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: { // y轴线的颜色以及宽度
                        show: true,
                        lineStyle: {
                            color: 'rgba(121, 208, 247, 0.7)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    splitLine: { // 分割线配置
                        show: true,
                        lineStyle: {
                            color: 'rgba(121, 208, 247,0.3)'
                        }
                    }
                },
                series: [
                    {
                        data: this.YData,
                        type: 'line',
                        smooth: 0.5,
                        // symbol:'none',
                        symbolSize: 0,
                        lineStyle: {
                            color: '#00ffff'
                        },
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(60, 224, 249,0.7)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(48, 59, 204,0.1)'
                                }
                            ])
                        }
                    }
                ]
            }
            this.chart.setOption(option)
            window.tools.loopShowTooltip(this.chart, option, {
                loopSeries: true
            })
        },
        /**
         * 重新加载
         */
        reload (call) {
            this.chart = null
            this.$nextTick(() => {
                this.$nextTick(() => {
                    call()
                })
            })
        }
    }
}
</script>
