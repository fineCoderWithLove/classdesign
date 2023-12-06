<template>
    <div id="app">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '2', '3', '4', '5']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-user"></i>学生管理</template>
                        <el-menu-item index="1-1" @click="toStuCore()"><i class="el-icon-tickets"></i>学生信息管理</el-menu-item>
                        <el-menu-item index="1-2" @click="toStuWarn()"><i
                                class="el-icon-warning-outline"></i>学生预警</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>数据管理</template>
                        <el-menu-item index="2-1" @click="toStuData()"><i class="el-icon-s-data"></i>学生数据管理</el-menu-item>
                        <el-menu-item index="2-2" @click="toClassData()"><i class="el-icon-s-data"></i>班级数据管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>课程管理</template>
                        <el-menu-item index="3-1" @click="toClassDetails()"><i class="el-icon-platform-eleme" ></i>数据结构</el-menu-item>
                        <el-menu-item index="3-2"><i class="el-icon-platform-eleme"></i>操作系统</el-menu-item>
                        <el-menu-item index="3-3"><i class="el-icon-platform-eleme"></i>计算机网络</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-setting"></i>教师管理</template>
                        <el-menu-item index="4-1" @click="toManagerTeacher()"><i
                                class="el-icon-s-custom"></i>教师管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-setting"></i>个人信息</template>
                        <el-menu-item index="5-1" @click="toPersonalDetail()"><i
                                class="el-icon-s-custom"></i>个人信息</el-menu-item>
                        <el-menu-item index="5-2" @click="toPersonalGrade()"><i
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
        toClassDetails(){
            this.$router.push('/Course')
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
</style>
  