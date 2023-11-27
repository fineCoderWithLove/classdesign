import Vue from 'vue'
import App from './App.vue'
//引入echarts
import echarts from 'echarts'
//vue全局注入echarts
Vue.prototype.$echarts = echarts;

import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8888";//设置访问后端项目地址
Vue.prototype.$axios = axios

import ElementUI from 'element-ui';

import router from './router/router'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
