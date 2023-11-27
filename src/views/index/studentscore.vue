<template>
    <div id="app">

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
                            <el-button type="primary" round>修改信息</el-button>
                            <el-button type="info" round>学生详情</el-button>
                            <el-button type="danger" round>删除学生</el-button>
                        </el-table-column>
                    </el-table>
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
  