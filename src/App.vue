<template>
  <div id="app">
      <!-- 就是要更换路由的界面 -->
      <router-view></router-view>
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
  created () {
    console.log(this.$router);
  },
  methods: {
    toStudentDetails(){
      this.$router.push("/studetail")
    },
    toIndex(){
      this.$router.push("/index")
    },
    toLogin(){
      this.$router.push("/login")
    },
  }
}
</script>

<style></style>
