<template>
    <div id="app">
        我是班级的详情页面
    </div>
  </template>
  
  <script>
  
  export default {

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
  * {
    margin: 0;
    padding: 0;
  }
  </style>
  