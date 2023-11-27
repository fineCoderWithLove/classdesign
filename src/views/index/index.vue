<template>
    <div id="app">

        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '2']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>学生管理</template>
                        <el-menu-item index="1-1" @click="toStuCore()">学生成绩管理</el-menu-item>
                        <el-menu-item index="1-2" @click="toStuWarn()">学生预警</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>数据管理</template>
                        <el-menu-item index="2-1" @click="toStuData()">学生数据管理</el-menu-item>
                        <el-menu-item index="2-2" @click="toClassData()">班级数据管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>成绩评定</template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                        <el-menu-item index="3-3">选项3</el-menu-item>
                        <el-submenu index="3-4">
                            <template slot="title">班级管理</template>
                            <el-menu-item index="3-4-1">计算机2101班</el-menu-item>
                            <el-menu-item index="3-4-2">计算机2102班</el-menu-item>
                        </el-submenu>
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
            tableData: Array(20).fill(item)
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
        toStuWarn() {
            this.$router.push('/studendwarn')
        },
        toStuData() {
            this.$router.push('/StuData')
        },
        toClassData() {
            this.$router.push('/ClassData')
        }
    }
};
</script>
  
<style>
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
    height: 100vh;
    overflow: visible;
}
</style>
  