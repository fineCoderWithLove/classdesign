<template>
    <div id="app">
        我是班级的数据页面
    </div>
</template>
  
<script>

export default {
    name: 'App',
    components: {
    },
    data() {
        return {

        }
    },
    created() {
        console.log(this.$router);
    },
    methods: {
        toStudentDetails() {
            this.$router.push("/studetail")
        },
        toIndex() {
            this.$router.push("/index")
        },
        toLogin() {
            this.$router.push("/login")
        },
    }
}
</script>
  
<style>
.el-main {
    height: calc(100vh-95px);
    overflow: visible;
}
</style>
  