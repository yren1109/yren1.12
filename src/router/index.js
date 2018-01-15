// 导入组件
import Login from '../component/login/Login.vue';
import Admin from '../component/admin/Admin.vue'

// 该文件对外导出路由配置
export default {

    routes: [
        { name: 'login', path: '/login', component: Login },
        { name: 'admin', path: '/admin', component: Admin },
    ]

};
