<!-- 这是一个个人的评分信息，有自己所有的选课信息 -->
<template>
    <div id="app">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="course_id" label="课程编号" width="170">
                    </el-table-column>
                    <el-table-column prop="course_name" label="课程名称" width="170">
                    </el-table-column>
                    <el-table-column prop="user_name" label="教师姓名" width="170">
                    </el-table-column>
                    <el-table-column prop="course_total_score" label="成绩" width="170">
                    </el-table-column>
                    <el-table-column prop="course_type" label="课程类别" width="170">
                    </el-table-column>
                    <el-table-column prop="classType" label="评分" width="170">
                        <template slot-scope="scope">
                            <el-button type="primary" plain @click="demo(scope.row)">评分详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-dialog title="评分详情" :visible.sync="form.isPassed" append-to-body>
                    <el-form :model="form">
                        <el-form-item class="form-info" label="平时成绩" :label-width="formLabelWidth">
                            <el-input :disabled="true" v-model="form.course_normal" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item class="form-info" label="考试成绩" :label-width="formLabelWidth">
                            <el-input :disabled="true" v-model="form.course_test" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item class="form-info" label="总评" :label-width="formLabelWidth">
                            <el-input :disabled="true" v-model="form.course_total_score"
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
            </el-main>
        </el-container>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            tableData: [],
            dialogFormVisibleBlock: false,
            form: {
                course_normal: "",
                course_test: "",
                course_total_score: "",
                course_name:"",
                user_id:"",
                course_id:"",
                user_name:"",
                isPassed:false
            },
            formLabelWidth: '120px',
            userId: ""
        }
    },
    computed: {

    },
    created() {
        var storedUserId = localStorage.getItem("userId");

        // 使用获取到的用户ID进行操作  
        console.log("User ID from cache:", storedUserId);
        this.userId = storedUserId
        this.getMyScoreInfo()
    },
    methods: {
        demo(e) {
            console.log(e);
            e.isPassed=true
            this.form = e
            
        },
        getMyScoreInfo() {
            let that = this;
            this.$axios.get("/querymyscore?number=" + this.userId).then((result) => {
                console.log(result);
                if (result.data.code == 200) {
                    const rateItems = result.data.rateItems;
                    const updatedRateItems = rateItems.map(item => {
                        return { ...item, course_type: "学科必修课", isPassed: false };
                    });
                    that.tableData = updatedRateItems;
                }
            }).catch((err) => {
                // 处理错误
            });
        },
        // 其他方法...
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
  