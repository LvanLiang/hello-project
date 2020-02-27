<template>
    <div>
      <el-form :model="form" :rules="rules" ref="loginForm"  label-width="80px" class="login-box">
        <h3 class="login-title">欢迎登录</h3>
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="form.pwd" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('loginForm')">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>

      <el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span>请输入账号和密码</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
          return {
            form: {
              username: '',
              pwd: ''
            },
            // 表单验证，需要在 el-form-item 元素中增加 prop 属性
            rules: {
              username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
              ],
              pwd: [
                { required: true, message: '请输入密码', trigger: 'blur' },
              ],
            },
            // 对话框显示和隐藏
            dialogVisible: false
          }
        },
        methods: {
          onSubmit: function (formName) {
            // 为表单绑定验证功能
            this.$refs[formName].validate((valid) => {
              if (valid) {
                // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
                // this.$router.push("/main");

                //编程式导航传参
                this.$router.push({name: 'Main',params: {username: this.form.username}})

                //设置用户登录成功
                sessionStorage.setItem("isLogin","true");

                //将user存起来
                this.$store.dispatch('asyncUpdateUser', {username: this.form.username});
              } else {
                this.dialogVisible = true;
                return false;
              }
            });
          }
        }
    }
</script>

<style lang="scss" scoped>
  .login-box{
    width: 350px;
    margin: 150px auto;
    border: 1px solid #DCDFE6;
    padding: 50px 50px 25px 25px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }
  .login-title{
    text-align: center;
    margin: 0 auto 40px auto;
  }
</style>
