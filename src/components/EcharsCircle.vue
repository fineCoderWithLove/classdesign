<template>
    <div id="EcharsCircle"></div>
</template>
  
<script>
// 扇形图组件，用于展示班级及格的学生的比例
import * as echarts from 'echarts';
export default {
    name: "EcharsCircle",
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

            console.log(this.Excellent);
            var chartDom = document.getElementById('EcharsCircle');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    left: 'center'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: this.FatherData.excellent, name: '优秀' },
                            { value: this.FatherData.pass, name: '及格' },
                            { value: this.FatherData.fail, name: '不及格' },
                            { value: this.FatherData.good, name: '良好' }
                        ]
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
#EcharsCircle {
    margin: 0 auto;
    width: 300px;
    height: 300px;
}
</style>
  