<template>
    <div id="app">
        <el-main>
            <el-table :data="tableData">
                <el-table-column prop="name" label="课程编号" width="150">
                </el-table-column>
                <el-table-column prop="course_name" label="课程名称" width="150">
                </el-table-column>
                <el-table-column prop="class" label="学生姓名" width="150">
                </el-table-column>
                <el-table-column prop="studentNumber" label="成绩" width="150">
                </el-table-column>
                <el-table-column prop="classType" label="课程类别" width="150">
                </el-table-column>
                <el-table-column prop="classType" label="评分" width="150">
                    <el-button type="primary" plain @click="dialogFormVisibleBlock = true">评分详情</el-button>
                    <el-dialog title="评分详情" :visible.sync="dialogFormVisibleBlock" append-to-body>
                        <el-form :model="form">
                            <el-form-item class="form-info" label="平时成绩" :label-width="formLabelWidth">
                                <el-input  v-model="form.course_normal" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item class="form-info" label="考试成绩" :label-width="formLabelWidth">
                                <el-input :disabled="true" v-model="form.course_test" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item class="form-info" label="总评" :label-width="formLabelWidth">
                                <el-input :disabled="true" v-model="form.course_test*0.4+form.course_normal*0.6" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisibleBlock = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisibleBlock = false">确 定</el-button>
                        </div>
                    </el-dialog>
                </el-table-column>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination layout="prev, pager, next" :total="50">
                </el-pagination>
            </div>
        </el-main>
    </div>
</template>
  
  
<script>
export default {
    data() {
        const item = {
            name: '1',
            course_name: '软件工程',
            class: '曹阳',
            studentNumber: '93',
            classType: "通识选修课",
            normalScore: "93",
            TestScore: "20",
            total: "99"
        };
        return {
            tableData: Array(10).fill(item),
            dialogFormVisibleBlock: false,
            form: {
                course_normal: 60, 
                course_test: 90,
                course_total_score: 0,
            },
            formLabelWidth: '120px'
        }
    },
    computed: {

    },
    created() {
        //封装请求的demo
        // this.$axios.get("/ping").then(response => {
        //     console.log(response);
        // })
        this.form.course_total_score = this.form.course_normal*0.6+this.form.course_test*0.4
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
    
  