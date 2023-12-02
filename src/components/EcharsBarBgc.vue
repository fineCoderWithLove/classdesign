<template>
    <div id="EcharsBarBgc"></div>
</template>
  
<script>
// 扇形图组件，用于展示班级及格的学生的比例
import * as echarts from 'echarts';
export default {
    name: "EcharsBarBgc",
    data() {
        return {
            formatter: '￥{value}',
        }
    },
    props: {
        FatherData: {
            type: String,
            required: Object
        },

    },
    mounted() {
        this.showCharts2();
    },
    methods: {
        showCharts2() {
            var chartDom = document.getElementById('EcharsBarBgc');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                title: { text: '嘘声的条形图数据' },//图标的标题
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }
                ]
            };

            option && myChart.setOption(option);
        },
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#EcharsBarBgc {
    margin: 0 auto;
    width: 300px;
    height: 300px;
}
</style>
  