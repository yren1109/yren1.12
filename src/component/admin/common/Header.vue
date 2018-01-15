<template>
    <el-dropdown class="header">
        <span class="el-dropdown-link">
            <span>{{uname}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    export default{
        data () {
            return {
                uname:'admin'
            }
        },
        methods: {
            loginOut(){
                this.$http.get(this.$api.logout).then(res=>{
                    console.log(res);
                    if(res.data.status==0){
                        this.$router.push({name:'login'})
                    }else{
                        this.$alert(res.data.message)
                    }
                })
            }
        }
    }

</script>



<style>
    .header{
        display: block;
        text-align: right;
        line-height: 60px;
    }


</style>