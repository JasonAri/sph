<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户 <span class="go">我有账号，去 <a href="login.html" target="_blank">登陆</a> </span>
      </h3>
      <!-- 带验证的表单 -->
      <div class="form">
        <el-form ref="form" :model="form" :rules="rules" label-width="100px" :label-position="labelPosition">
          <el-form-item label="手机号" prop="phone">
            <el-input type="text" v-model="form.phone" placeholder="请输入您的手机号"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input type="text" v-model="form.code" placeholder="请输入验证码"></el-input>
            <el-button class="code-btn" type="primary" :disabled="form.phone ? false : true" @click="getCode"
              >获取验证码</el-button
            >
          </el-form-item>
          <el-form-item label="登录密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入您的登录密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password1">
            <el-input type="password" v-model="form.password1" placeholder="确认登录密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="form.agree">同意协议并注册《尚品汇用户协议》</el-checkbox>
            <el-button class="register-btn" type="danger" :disabled="!form.agree" @click="submitForm('form')"
              >完成注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li><a href="javascript:;">关于我们</a></li>
        <li><a href="javascript:;">联系我们</a></li>
        <li><a href="javascript:;">联系客服</a></li>
        <li><a href="javascript:;">商家入驻</a></li>
        <li><a href="javascript:;">营销中心</a></li>
        <li><a href="javascript:;">手机尚品汇</a></li>
        <li><a href="javascript:;">销售联盟</a></li>
        <li><a href="javascript:;">尚品汇社区</a></li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('不能为空'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入的密码不一致！'));
      } else {
        callback();
      }
    };
    return {
      // el-form
      form: {
        phone: '',
        code: '',
        password: '',
        password1: '',
        agree: true,
      },
      // 验证规则
      rules: {
        phone: [
          { required: true, message: '请输入您的手机号', trigger: 'blur' },
          { pattern: /^1[0-9]{10}$/, message: '请输入长度为11位数字的手机号', trigger: 'blur' },
        ],
        code: [{ required: true, message: '请获取验证码', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入你的登录密码', trigger: 'blur' },
          { min: 8, max: 16, message: '输入密码长度为8到16位', trigger: 'blur' },
          {
            pattern: /^(?![a-zA-Z]+$)(?![0-9]+$)(?![_@#]+$)[\w@#]{8,16}$/,
            message: '至少包含字母、数字、特殊符号(_@#)至少包含两种',
            trigger: 'blur',
          },
        ],
        password1: [{ required: true, validator: validatePass, trigger: 'blur' }],
      },
      labelPosition: '', // 控制台报错临时定义的
    };
  },
  methods: {
    // 点击按钮获取验证码的回调
    getCode() {
      let { phone } = this.form;
      // 创建一个正则
      let regPhone = /^1[0-9]{10}$/;
      // 判断手机号的合法性
      if (regPhone.test(phone)) {
        // 派发一个action 获取验证码
        this.$store
          .dispatch('getCode', phone)
          .then(() => {
            // 将验证码赋值到data中
            this.form.code = this.$store.state.user.code;
          })
          .catch((reason) => {
            console.warn(reason);
          });
      } else {
        // 手机号非法
        alert('请输入合法手机号');
      }
    },
    // 完成注册按钮的回调
    submitForm(formName) {
      // 校验合法性
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 合法
          this.userRegister();
          // 注册
        } else {
          // 非法
          return false;
        }
      });
    },
    // 注册的回调
    userRegister() {
      const { phone, code, password, password1 } = this.form;
      if (phone && code && password == password1) {
        this.$store
          .dispatch('userRegister', { phone, code, password })
          .then(() => {
            // 跳转登录界面
            this.$router.push('/login');
          })
          .catch((reason) => {
            alert(reason);
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.register-container {
  // 原表单
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    // el-form
    .form {
      width: 400px;
      margin: 50px auto 0;
      .code-btn {
        margin-left: 5px;
        position: absolute;
      }
      .register-btn {
        width: 300px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>
