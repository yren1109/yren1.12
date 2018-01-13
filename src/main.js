 import Vue from 'vue';
 import App from './component/App.vue';
 import vueRouter from 'vue-router';
Vue.use(vueRouter);
import routerConfig from './router/index.js';
import axios from 'axios';
axios.defaults.baseURL = 'http://157.122.54.189:9095';
Vue.prototype.$http = axios;
import api from './js/api-config.js';
Vue.prototype.$api=api;
import mui from 'element-ui';
Vue.use(mui);
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';




 new Vue({
     el:"#app",
    render: c =>c(App),
     router: new vueRouter(routerConfig),
 })