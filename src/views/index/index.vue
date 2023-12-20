<template>
    <div id="app">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '2', '3', '4', '5']">
                    <el-submenu index="1" v-show="role == '3'">
                        <template slot="title"><i class="el-icon-user"></i>学生管理</template>
                        <el-menu-item index="1-1" @click="toStuCore()"><i class="el-icon-tickets"></i>学生信息管理</el-menu-item>
                        <el-menu-item index="1-2" @click="toStuWarn()"><i
                                class="el-icon-warning-outline"></i>学生预警</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2" v-show="role == '3'">
                        <template slot="title"><i class="el-icon-menu"></i>数据管理</template>
                        <el-menu-item index="2-1" @click="toStuData()"><i class="el-icon-s-data"></i>学生数据管理</el-menu-item>
                        <el-menu-item index="2-2" @click="toClassData()"><i class="el-icon-s-data"></i>班级数据管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3" v-show="role === '2'">
                        <template slot="title"><i class="el-icon-setting"></i>课程管理</template>
                        <el-menu-item v-for="(course, index) in courseList" :key="course.courseId" :index="index"
                            @click="toClassDetails(course.course_id)">
                            <i class="el-icon-platform-eleme"></i>{{ course.course_name }}
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="4" v-show="role == '3'">
                        <template slot="title"><i class="el-icon-setting"></i>教师管理</template>
                        <el-menu-item index="4-1" @click="toManagerTeacher()"><i
                                class="el-icon-s-custom"></i>教师管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5" v-show="role == '1' || role == '2' || role == '3'">
                        <template slot="title"><i class="el-icon-setting"></i>个人信息</template>
                        <el-menu-item index="5-1" @click="toPersonalDetail()"><i
                                class="el-icon-s-custom"></i>个人信息</el-menu-item>
                        <el-menu-item v-show="role == '1'" index="5-2" @click="toPersonalGrade()"><i
                                class="el-icon-s-custom"></i>成绩查询</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container style="height: 500px; border: 1px solid #eee">
                <el-header style="text-align: right; font-size: 12px">

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
                    <div id="app" class="container">
                        <div class="demo">
                            <div style="width:230px"> <el-tree highlight-current="true" :data="data" :props="defaultProps"
                                    @node-click="handleNodeClick"></el-tree></div>
                            <div style="width:70%;">
                                <el-table :data="tableData">
                                    <el-table-column prop="user_name" label="姓名" width="200">
                                    </el-table-column>
                                    <!-- <el-table-column prop="from_where" label="班级" width="100">
                                    </el-table-column> -->
                                    <el-table-column prop="number" label="学号">
                                    </el-table-column>
                                    <el-table-column prop="studentNumber" label="操作">
                                        <template slot-scope="scope">
                                            <el-button type="primary" @click="demo(scope.row)" plain>学生详情</el-button>
                                            <el-button type="info" plain @click="demo3(scope.row)">学生成绩</el-button>
                                            <el-popconfirm confirm-button-text='好的' cancel-button-text='不用了'
                                                icon="el-icon-info" icon-color="red" title="确认删除该学生嘛？">
                                                <el-button slot="reference" type="danger" plain>删除学生</el-button>
                                            </el-popconfirm>
                                        </template>
                                    </el-table-column>
                                </el-table>

                                <!-- Form -->
                                <el-dialog title="学生详情" :visible.sync="form_demo.isshow" append-to-body>
                                    <el-form :model="form_demo">
                                        <el-form-item class="form-info" label="学生姓名" :label-width="formLabelWidth">
                                            <el-input v-model="form_demo.user_name" autocomplete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item class="form-info" label="学生学号" :label-width="formLabelWidth">
                                            <el-input v-model="form_demo.number" autocomplete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item class="form-info" label="学生班级" :label-width="formLabelWidth">
                                            <el-input v-model="form_demo.from_where" autocomplete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item class="form-info" label="学生性别" :label-width="formLabelWidth">
                                            <el-input v-model="form_demo.gender" autocomplete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item class="form-info" label="学生电话" :label-width="formLabelWidth">
                                            <el-input v-model="form_demo.tel" autocomplete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item class="form-info" label="学生邮箱" :label-width="formLabelWidth">
                                            <el-input v-model="form_demo.email" autocomplete="off"></el-input>
                                        </el-form-item>
                                    </el-form>
                                    <div slot="footer" class="dialog-footer">
                                        <el-button @click="form_demo.isshow = false">取 消</el-button>
                                        <el-button type="primary" @click="updateStu(form_demo)">确 定</el-button>
                                    </div>
                                </el-dialog>
                                <el-dialog title="评分详情" :visible.sync="form.isPassed" append-to-body>
                                    <el-form :model="form">
                                        <el-form-item class="form-info" label="平时成绩" :label-width="formLabelWidth">
                                            <el-input  v-model="form.course_normal"
                                                autocomplete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item class="form-info" label="考试成绩" :label-width="formLabelWidth">
                                            <el-input :disabled="true" v-model="form.course_test"
                                                autocomplete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item class="form-info" label="总评" :label-width="formLabelWidth">
                                            <el-input :disabled="true" v-model="form.course_normal*0.4+form.course_test*0.6"
                                                autocomplete="off"></el-input>
                                        </el-form-item>
                                    </el-form>
                                    <div slot="footer" class="dialog-footer">
                                        <el-button @click="form.isPassed = false">取 消</el-button>
                                        <el-button type="primary" @click="form.isPassed = false">确 定</el-button>
                                    </div>
                                </el-dialog>
                                <div class="block">
                                    <el-pagination layout="prev, pager, next" :total="50">
                                    </el-pagination>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            restaurants: [],
            state: '',
            tableData: [],
            dialogFormVisible: false,
            dialogFormVisibleUpdate: false,
            dialogFormVisibleBlock: false,
            form: {
                user_name: '郑梓桐',
                from_where: '计算机2101',
                number: '2109124027',
                gender: '男',
                email: '3151128964@qq.com',
                tel: '15220267226',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
            form_demo: {
                user_name: '郑梓桐',
                from_where: '计算机2101',
                number: '2109124027',
                gender: '男',
                email: '3151128964@qq.com',
                tel: '15220267226',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
            formLabelWidth: '120px',
            role: '',
            number: 0,
            courseList: [],
            classArray: [],
            data: [{
                label: '班级信息',
                children: [
                    {
                        label: '计算机2101',
                    },
                    {
                        label: '计算机2102',
                    }
                ]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            courseId: ""
        }
    },
    created() {
        var storedUserId = localStorage.getItem("userId");
        this.number = storedUserId
        this.role = localStorage.getItem("role");
        // 使用获取到的用户ID进行操作  
        console.log("User ID from cache:", this.number);
        console.log("User ID from cache:", this.role);
        this.open1()
        this.getTechCourse()
    },
    methods: {
        //此处需要查询学生的详情信息
        updateStu(e) {
            e.isshow = false
            this.form_demo = e
            console.log(e);
        },
        //根据userid或者number加载.
        demo(e) {
            e.isshow = true
            this.form_demo = e
            console.log(e);
        },
        demo2(e) {
            e.isshowlock = true
            this.form_demo = e
            console.log(e);
        },
        demo3(e) {
            console.log(e);
            e.isPassed = true
            this.form = e

        },
        open1() {
            this.$notify({
                title: '成功',
                message: '添加学生成功',
                type: 'success'
            });
        }, open4() {
            this.$notify.error({
                title: '错误',
                message: '这是一条错误的提示消息'
            });
        },
        handleNodeClick(data) {
            console.log("准备给data赋值");
            console.log(data);
            let that = this
            this.$axios.get('/tech/classstu?from_where=' + data.label).then((result) => {
                console.log(result);
                that.tableData = result.data.rateItem.map((item) => {
                    return {
                        ...item,
                        isPassed: false,
                        isshow: false
                    };
                });
                console.log(that.tableData);
            }).catch((err) => {
                console.log(err);
            });
        },
        getTechCourse() {
            let that = this
            this.$axios.get('/tech/mycourse?number=' + this.number).then((result) => {
                console.log(result);
                if (result.data.code == 200) {
                    that.courseList = result.data.course
                }
            }).catch((err) => {

            });
        },
        open1() {
            this.$notify({
                title: '成功',
                message: '登录成功',
                type: 'success'
            });
        },
        getCourseClass(e) {
            let that = this;
            this.$axios.get('/tech/queryclass?courseId=' + e).then((result) => {
                console.log(result);
                that.classArray = result.data.from_where;

                // Convert classArray to the desired format
                that.data[0].children = that.classArray.map((item) => {
                    return {
                        label: item,
                    };
                });
            }).catch((err) => {
                // Handle error
            });
        },
        toClassDetails(e) {
            this.getCourseClass(e)

        },
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

.demo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>
  