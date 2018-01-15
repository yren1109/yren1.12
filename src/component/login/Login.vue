<template>
<div class="login">
    <h1>商城管理后台系统</h1>
  <el-form label-position="left" label-width="80px" ref="ruleForm2" 
            :model="formLabelAlign" :rules="rules">
            <!-- 如果要表单校验与重置功能, 必须加上prop属性 -->
            <el-form-item label="账号" prop="uname">
                <el-input v-model="formLabelAlign.uname"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="upwd">
                <el-input v-model="formLabelAlign.upwd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
</div>
</template>

<script>
    export default {
        data() {
            function  unameFn(rule, value, callback) {
            if(value==''){
                alert('帐号不能为空')
            }else{
                callback()
            }
            };
            function upwdFn(rule,value,callback) {
                if(value==''){
                    alert('密码不能为空')
                }else{
                    callback();
                }
            }
              return {
                // 表单提交的数据
                formLabelAlign: {
                    uname: '',
                    upwd: ''
                },

                // 表单校验规则
                rules: {
                     uname: [
                        { required: true, message: '请填写账号', trigger: 'blur' },
                        { min: 5, max: 18, message: '账号在5~18位', trigger: 'blur' },
                        { validator: unameFn, trigger: 'blur' }
                    ],
                    upwd: [
                        { validator: upwdFn, trigger: 'blur' },
                        { pattern: /^\w{6,18}$/, message: '密码在6~18位', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            login(){
                this.$http.post(this.$api.login,this.formLabelAlign).then(res=>{
                    console.log(res);
                    if(res.data.status==0){
                           this.$alert('登录成功')
                           this.$router.push({ name: 'admin' });
                    }else {
                   this.$alert(res.data.message)
                    }
                })
            },
            submitForm(formName){
                this.$refs[formName].validate(res=>{
                    if(res){
                        this.login()
                    }else {
                        this.$alert('喔?')
                    }
                })
            }
        },
        
    }
</script>

<style scoped>
    .login{
        padding-top:50px;
        padding-right: 50px;   
        height: 250px;
        width: 400px;
        position: relative;
        top:30%;
        left:50%;
        transform: translateX(-50%);
        border:1px solid #fff;
        border-radius: 6px;
    }
    .login h1{
        position: absolute;
        top:-70px;  
        left:100px;
        font-size: 26px;
    }
</style>