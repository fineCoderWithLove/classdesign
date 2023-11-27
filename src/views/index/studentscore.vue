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
                        <el-button type="primary" @click="dialogFormVisible = true" round>修改信息</el-button>
                        <!-- Form -->
                        <el-dialog title="收货地址" :visible.sync="dialogFormVisible" append-to-body>
                            <el-form :model="form">
                                <el-form-item label="活动名称" :label-width="formLabelWidth">
                                    <el-input v-model="form.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="活动区域" :label-width="formLabelWidth">
                                    <el-select v-model="form.region" placeholder="请选择活动区域">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>
                        <el-button type="info" round>学生详情</el-button>
                        <el-popconfirm confirm-button-text='好的' cancel-button-text='不用了' icon="el-icon-info"
                            icon-color="red" title="确认删除该学生嘛？">
                            <el-button slot="reference" type="danger" round>删除学生</el-button>
                        </el-popconfirm>

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
            tableData: Array(20).fill(item),
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
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
  