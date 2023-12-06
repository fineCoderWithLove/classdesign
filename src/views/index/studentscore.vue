<template>
    <div id="app">

        <div class="butons">
            <el-button type="success" plain style="width: 150px;height:45px;"
                @click="dialogFormVisible = true">添加学生</el-button>
            <el-button type="warning" plain style="width: 150px;height:45px;"
                @click="dialogFormVisible = true">导出学生</el-button>
            <el-button type="info" plain style="width: 150px;height:45px;"
                @click="dialogFormVisible = true">导入学生</el-button>
            <el-autocomplete style="width: 250px;" popper-class="my-autocomplete" v-model="state"
                :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect">
                <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick">
                </i>
                <template slot-scope="{ item }">
                    <div class="name">{{ item.value }}</div>
                    <span class="addr">{{ item.address }}</span>
                </template>
            </el-autocomplete>
            <!-- Form 此处的form应该是新的空白的表单-->
            <el-dialog title="学生详情" :visible.sync="dialogFormVisible" append-to-body>
                <el-form :model="formEmpty">
                    <el-form-item class="form-info" label="学生姓名" :label-width="formLabelWidth">
                        <el-input v-model="formEmpty.user_name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="form-info" label="学生学号" :label-width="formLabelWidth">
                        <el-input v-model="formEmpty.number" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="form-info" label="学生班级" :label-width="formLabelWidth">
                        <el-input v-model="formEmpty.from" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="form-info" label="学生性别" :label-width="formLabelWidth">
                        <el-input v-model="formEmpty.gender" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="form-info" label="学生电话" :label-width="formLabelWidth">
                        <el-input v-model="formEmpty.tel" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="form-info" label="学生邮箱" :label-width="formLabelWidth">
                        <el-input v-model="formEmpty.email" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </div>

        <el-container style="height: 500px; border: 1px solid #eee">
            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="name" label="姓名" width="100">
                    </el-table-column>
                    <el-table-column prop="class" label="班级" width="100">
                    </el-table-column>
                    <el-table-column prop="studentNumber" label="学号">
                    </el-table-column>
                    <el-table-column prop="studentNumber" label="操作">
                        <el-button type="primary" @click="dialogFormVisibleUpdate = true" plain>修改信息</el-button>
                        <!-- Form -->
                        <el-dialog title="学生详情" :visible.sync="dialogFormVisibleUpdate" append-to-body>
                            <el-form :model="form">
                                <el-form-item class="form-info" label="学生姓名" :label-width="formLabelWidth">
                                    <el-input v-model="form.user_name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="form-info" label="学生学号" :label-width="formLabelWidth">
                                    <el-input v-model="form.number" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="form-info" label="学生班级" :label-width="formLabelWidth">
                                    <el-input v-model="form.from" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="form-info" label="学生性别" :label-width="formLabelWidth">
                                    <el-input v-model="form.gender" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="form-info" label="学生电话" :label-width="formLabelWidth">
                                    <el-input v-model="form.tel" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="form-info" label="学生邮箱" :label-width="formLabelWidth">
                                    <el-input v-model="form.email" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisibleUpdate = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisibleUpdate = false">确 定</el-button>
                            </div>
                        </el-dialog>
                        <el-button type="info" plain @click="dialogFormVisibleBlock = true" >学生详情</el-button>
                        <el-dialog title="学生详情" :visible.sync="dialogFormVisibleBlock" append-to-body>
                            <el-form :model="form">
                                <el-form-item  class="form-info" label="学生姓名" :label-width="formLabelWidth">
                                    <el-input :disabled="true" v-model="form.user_name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="form-info" label="学生学号" :label-width="formLabelWidth">
                                    <el-input :disabled="true" v-model="form.number" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="form-info" label="学生班级" :label-width="formLabelWidth">
                                    <el-input :disabled="true" v-model="form.from" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="form-info" label="学生性别" :label-width="formLabelWidth">
                                    <el-input :disabled="true" v-model="form.gender" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="form-info" label="学生电话" :label-width="formLabelWidth">
                                    <el-input :disabled="true" v-model="form.tel" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="form-info" label="学生邮箱" :label-width="formLabelWidth">
                                    <el-input :disabled="true" v-model="form.email" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisibleBlock = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisibleBlock = false">确 定</el-button>
                            </div>
                        </el-dialog>
                        <el-popconfirm confirm-button-text='好的' cancel-button-text='不用了' icon="el-icon-info"
                            icon-color="red" title="确认删除该学生嘛？">
                            <el-button slot="reference" type="danger" plain>删除学生</el-button>
                        </el-popconfirm>
                    </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination layout="prev, pager, next" :total="50">
                    </el-pagination>
                </div>
            </el-main>
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
            restaurants: [],
            state: '',
            tableData: Array(9).fill(item),
            dialogFormVisible: false,
            dialogFormVisibleUpdate:false,
            dialogFormVisibleBlock:false,
            form: {
                user_name: '郑梓桐',
                from: '计算机2101',
                number: '2109124027',
                gender:'男',
                email:'3151128964@qq.com',
                tel:'15220267226',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formEmpty:{
                user_name: '',
                from: '',
                number: '',
                gender:'',
                email:'',
                tel:'',
                delivery: "",
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
        toStuCore() {
            console.log("点击到了");
            this.$router.push('/studendscore')
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
  
<style>
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

.block {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    transform: translateY(20px);
}

#el-button {
    margin-left: 15px;
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
    height: calc(100vh-120px);
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
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
  