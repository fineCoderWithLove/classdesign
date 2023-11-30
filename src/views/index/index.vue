<template>
    <div id="app">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '2','3','4','5']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-user"></i>学生管理</template>
                        <el-menu-item index="1-1" @click="toStuCore()"><i class="el-icon-tickets"></i>学生成绩管理</el-menu-item>
                        <el-menu-item index="1-2" @click="toStuWarn()"><i
                                class="el-icon-warning-outline"></i>学生预警</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>数据管理</template>
                        <el-menu-item index="2-1" @click="toStuData()"><i class="el-icon-s-data"></i>学生数据管理</el-menu-item>
                        <el-menu-item index="2-2" @click="toClassData()"><i class="el-icon-s-data"></i>班级数据管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>班级管理</template>
                        <el-menu-item index="3-1"><i class="el-icon-platform-eleme"></i>计算机2101</el-menu-item>
                        <el-menu-item index="3-2"><i class="el-icon-platform-eleme"></i>计算机2102</el-menu-item>
                        <el-menu-item index="3-3"><i class="el-icon-platform-eleme"></i>计算机2103</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-setting"></i>教师管理</template>
                        <el-menu-item index="4-1" @click="toManagerTeacher()"><i class="el-icon-s-custom"></i>教师管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-setting"></i>个人管理</template>
                        <el-menu-item index="5-1" @click="toPersonalDetail()"><i
                                class="el-icon-s-custom"></i>个人信息</el-menu-item>
                        <el-menu-item index="5-2" @click="toPersonalGrade()"><i
                                class="el-icon-s-custom"></i>成绩查询</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container style="height: 500px; border: 1px solid #eee">
                <el-header style="text-align: right; font-size: 12px">
                    <el-col :span="12">
                        <el-autocomplete style="width: 350px;" popper-class="my-autocomplete" v-model="state"
                            :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect">
                            <i class="el-icon-search" slot="suffix" @click="handleIconClick">
                            </i>
                            <template slot-scope="{ item }">
                                <div class="name">{{ item.value }}</div>
                                <span class="addr">{{ item.address }}</span>
                            </template>
                        </el-autocomplete>
                    </el-col>
                    <el-col :span="10">
                        <el-button type="success" plain style="width: 150px;height:45px;"
                            @click="dialogFormVisible = true">添加学生</el-button>
                        <!-- Form -->
                        <el-dialog title="学生详情" :visible.sync="dialogFormVisible" append-to-body>
                            <el-form :model="form">
                                <el-form-item class="form-info" label="学生姓名" :label-width="formLabelWidth">
                                    <el-input v-model="form.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="form-info" label="学生学号" :label-width="formLabelWidth">
                                    <el-input v-model="form.studentNumber" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="form-info" label="学生班级" :label-width="formLabelWidth">
                                    <el-input v-model="form.class" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>
                    </el-col>
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>

            </el-container>

        </el-container>
    </div>
</template>
  
<script>
export default {
    data() {
        const item = {
            name: '郑梓桐',
            class: '计算机2101',
            studentNumber: '2109124027'
        };
        return {
            tableData: Array(20).fill(item),
            restaurants: [],
            state: '',
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                class: '',
                studentNumber: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px'

        }
    },
    created() {
        //封装请求的demo
        // this.$axios.get("/ping").then(response => {
        //     console.log(response);
        // })
    },
    methods: {
        toManagerTeacher() {
            this.$router.push('/ManageTea')
        },
        toPersonalGrade() {
            this.$router.push('/personalgrade')
        },
        toPersonalDetail() {
            this.$router.push('/personal')
        },
        toStuCore() {
            console.log("点击到了");
            this.$router.push('/studendscore')
        },
        toStuWarn() {
            this.$router.push('/studendwarn')
        },
        toStuData() {
            this.$router.push('/StuData')
        },
        toClassData() {
            this.$router.push('/ClassData')
        },
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        loadAll() {
            return [
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                { "value": "钱记", "address": "上海市长宁区天山西路" },
                { "value": "壹杯加", "address": "上海市长宁区通协路" },
                { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                { "value": "浏阳蒸菜", "address": "天山西路430号" },
                { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
            ];
        },
        handleSelect(item) {
            console.log(item);
        },
        handleIconClick(ev) {
            console.log(ev);
        }
    },
    mounted() {
        this.restaurants = this.loadAll();
    }
};
</script>
  
<style scoped>
.form-info {
    margin-bottom: 20px;
}

.my-autocomplete {
    li {
        line-height: normal;
        padding: 7px;

        .name {
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .addr {
            font-size: 12px;
            color: #b4b4b4;
        }

        .highlighted .addr {
            color: #ddd;
        }
    }
}

* {
    margin: 0;
    padding: 0;
}

.el-header {
    background-color: #f5f7fa;
    color: #333;
    line-height: 60px;
}

.el-aside {
    height: 100vh;
    color: #333;
    background-color: #f5f7fa;
}

.el-main {
    height: calc(100vh-95px);
    overflow: visible;
}</style>
  