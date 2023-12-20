<template>
    <div id="app" class="container">
        <div>
            <el-main>
                <router-view>
                </router-view>
            </el-main>
        </div>

    </div>
</template>
  
<script>
import EcharsBarBgc from '../../components/EcharsBarBgc.vue'
export default {
    data() {
        return {
            data: [{
                label: '班级信息',
                children: [
                    {
                        label: '计算机2101班',
                    },
                    {
                        label: '计算机2102班',
                    }
                ]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            courseId: ""
        };
    },
    components: {
        EcharsBarBgc
    },
    created() {
        this.courseId = this.$route.query.course_id;
        this.getCourseClass()
    },
    methods: {
        getCourseClass() {
            this.$axios.get('/tech/queryclass?courseId=' + this.courseId).then((result) => {
                console.log(result);
            }).catch((err) => {

            });
        },
        handleNodeClick(data) {
            console.log(data);
            this.$router.push("/Course/ClassDetails")
        }
    }
};
</script>
  
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.container {
    display: flex;

}
</style>
  