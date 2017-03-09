<template>
    <div id="login">
        <div class="login-cont">
            <div class="logo">
                <img src="../../assets/images/logo.png" alt="">
            </div>
            <div class="form">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                    </el-form-item>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @import "../../style/iconfont.css";
    #login{
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        background-color: #1f2f3d;
    }
    .login-cont{
        width: 350px;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background-color: #ffffff;
        -webkit-box-shadow: 0 0 3px rgba(0,0,0,0.5);
        -moz-box-shadow: 0 0 3px rgba(0,0,0,0.5);
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
        height: 300px;
        position: absolute;
        left: 50%;
        top:50%;
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
    }
    .login-cont .logo{
        padding:30px 0 20px;
        text-align: center;
    }
    .login-cont .form{
        padding:0 25px;
    }
</style>
<script>

   export default({
       data: function(){
           return {
               ruleForm: {
                   username: '',
                   password: ''
               },
               rules: {
                   username: [
                       { required: true, message: '请输入用户名', trigger: 'blur' }
                   ],
                   password: [
                       { required: true, message: '请输入密码', trigger: 'blur' }
                   ]
               }
           }
       },
       methods: {
           submitForm(formName) {
               const self = this;
               self.$refs[formName].validate((valid) => {
                   if (valid) {
                       localStorage.setItem('ms_username',self.ruleForm.username);
                       self.$router.push('/index');
                   } else {
                       console.log('error submit!!');
                       return false;
                   }
               });
           }
       }
   })

</script>