<template>
    <div id="app">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="name" label="姓名" width="200">
                    </el-table-column>
                    <el-table-column prop="class" label="学院" width="200">
                    </el-table-column>
                    <el-table-column prop="studentNumber" label="工号">
                    </el-table-column>
                    <el-table-column prop="studentNumber" label="操作">
                        <el-button type="primary" @click="dialogFormVisible = true" plain>修改信息</el-button>
                        <!-- Form -->
                        <el-dialog title="学生详情" :visible.sync="dialogFormVisible" append-to-body>
                            <el-form :model="form">
                                <el-form-item label="学生姓名" :label-width="formLabelWidth">
                                    <el-input v-model="form.name" :disabled="true" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="学生学号" :label-width="formLabelWidth">
                                    <el-input v-model="form.studentNumber" :disabled="true" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="学生班级" :label-width="formLabelWidth">
                                    <el-input v-model="form.class" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>
                        <el-button type="info" plain>教师详情</el-button>
                        <el-popconfirm confirm-button-text='好的' cancel-button-text='不用了' icon="el-icon-info"
                            icon-color="red" title="确认删除该教师嘛？">
                            <el-button slot="reference" type="danger" plain>删除教师</el-button>
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
            name: '肖海蓉',
            class: '计算机2101',
            studentNumber: '2109124027'
        };
        return {
            tableData: Array(10).fill(item),
            dialogFormVisible: false,
            form: {
                name: '肖海蓉',
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
  