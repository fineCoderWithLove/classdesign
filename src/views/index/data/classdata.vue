<template>
    <div id="app">
        <EcharsBarBgc style="height: 800px; width:100%;"></EcharsBarBgc>
    </div>
</template>
  
<script>
import EcharsBarBgc from '../../../components/EcharsBarBgc.vue'
export default {
    name: 'App',
    components: {
    },
    data() {
        return {

        }
    },
    components: {
        EcharsBarBgc
    },
    created() {
        console.log(this.$router);
    },
    methods: {
    }
}
</script>
  
<style>
.el-main {
    height: calc(100vh-95px);
    overflow: visible;
}
</style>
  