<template>
    <div id="app">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="name" label="课程编号" width="160">
                    </el-table-column>
                    <el-table-column prop="class" label="课程名称" width="160">
                    </el-table-column>
                    <el-table-column prop="studentNumber" label="成绩" width="160">
                    </el-table-column>
                    <el-table-column prop="classType" label="课程类别" width="160">
                    </el-table-column>
                    <el-table-column prop="normalScore" label="平时成绩" width="160">
                    </el-table-column>
                    <el-table-column prop="TestScore" label="卷面成绩"   width="160">
                    </el-table-column>
                    <el-table-column prop="total" label="总评" >
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
            name: '1',
            class: '数据结构',
            studentNumber: '93',
            classType:"通识选修课",
            normalScore:"93",
            TestScore:"20",
            total:"99"
        };
        return {
            tableData: Array(10).fill(item),
            dialogFormVisible: false,
            form: {
                name: '郑梓桐',
                region: '',
                class: '计算机2101',
                studentNumber: '2109124027',
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
        toStuCore() {
            console.log("点击到了");
            this.$router.push('/studendscore')
        }
    }
};
</script>
  
<style>
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
    height: calc(100vh-95px);
    overflow: visible;
}
</style>
  