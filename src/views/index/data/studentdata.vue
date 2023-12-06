<template>
    <div>
        <div class="top-info">
            <div class="little-container">
                <div>老师数量</div>
                <div>36</div>
            </div>
            <div class="little-container">
                <div>学生数量</div>
                <div>233</div>
            </div>
            <div class="little-container">
                <div>课程数量</div>
                <div>39</div>
            </div>
            <div class="little-container">
                <div>学生优秀率</div>
                <div>9.7%</div>
            </div>
        </div>
        <div id="container">
            <!--图表容器-->
            <div id="newCharts"></div>
            <EcharsCircle :FatherData="FatherData"></EcharsCircle>
            <EcharsBarBgc></EcharsBarBgc>
        </div>

    </div>
</template>
  
<script>
import * as echarts from 'echarts';
import EcharsCircle from '../../../components/EcharsCircle.vue'
import EcharsBarBgc from '../../../components/EcharsBarBgc.vue'
export default {

    name: "example",
    data() {
        return {
            formatter: '￥{value}',
            FatherData: {
                excellent: 10,
                pass: 12,
                fail: 32,
                good: 11
            }
        }
    },
    components: {
        EcharsCircle,
        EcharsBarBgc
    },
    mounted() {
        this.showCharts1();
    },
    methods: {
        // 展示折线图
        showCharts1() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('newCharts'));//也可以通过$refs.newCharts的方式去获取到dom实例。
            // 绘制图表
            myChart.setOption({
                title: { text: '学生的折线图数据' },//图标的标题
                // X轴
                xAxis: {
                    type: 'category',//坐标轴类型,类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据
                    //坐标轴刻度相关设置
                    axisTick: {
                        alignWithLabel: true,//为true时，可以让刻度跟底部的标签内容对齐
                    },
                    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],//X轴的刻度数据
                    name: "时间",//坐标轴名称
                    nameLocation: "start",//坐标轴名称显示位置
                    //坐标轴名称的文字样式
                    nameTextStyle: {
                        align: "center",//文字水平对齐方式，默认自动
                        verticalAlign: "top",//文字垂直对齐方式，默认自动
                        lineHeight: 28,//行高
                        fontSize: 10,//字体大小
                        color: "rgba(0, 0, 0, 1)"//字体颜色
                    },
                    //坐标轴刻度标签的相关设置
                    axisLabel: {
                        interval: 'auto'//坐标轴刻度标签的显示间隔，在类目轴中有效。可以设置成 0 强制显示所有标签,如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示『隔两个标签显示一个标签』，以此类推。
                    }
                },
                // Y轴
                yAxis: {
                    type: 'value',//坐标轴类型,'value' 数值轴，适用于连续数据
                    //坐标轴刻度标签的相关设置
                    axisLabel: {
                        formatter: this.formatter//刻度标签的内容格式器，支持字符串模板和回调函数两种形式。简单讲就是可以自己格式化标签的内容。
                    },
                },
                //直角坐标系内绘图网格,简单理解指的就是这个折线图。
                grid: {
                    left: 50//grid 组件离容器左侧的距离
                },
                // 数据
                series: [
                    {
                        data: [155, 45, 87, 123, 89, 116, 173],//折线图要展示的数据
                        type: 'line'//数据以什么样的类型展示。line为折线图
                    }
                ]
            })
        }
    }
}
</script>

  
<style scoped>


.top-info {
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.little-container {
    width: 230px;
    height: 125px;
    background: linear-gradient(to bottom right, #e6f7ff, #f0e6ff);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
}

.little-container:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.little-container:nth-child(1) {
    background: linear-gradient(to bottom right, #ffe6e6, #f7e6ff);
}

.little-container:nth-child(2) {
    background: linear-gradient(to bottom right, #e6f7ff, #e6ffe6);
}

.little-container:nth-child(3) {
    background: linear-gradient(to bottom right, #f2e6ff, #f7ffff);
}

.little-container:nth-child(4) {
    background: linear-gradient(to bottom right, #e6e6ff, #e6fff7);
}
#container {
    width: 100%;
    height: calc(100vh-95px);
    padding-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

#newCharts {
    margin: 0 auto;
    width: 300px;
    height: 300px;
}

#main {
    margin: 0 auto;
    width: 300px;
    height: 300px;
}

.el-main {

    overflow: visible;
}

.el-row {
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    background-color: #f9fafc;
}</style>

  