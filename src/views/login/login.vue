<template>
    <div class="login">
      <h1 style="color: #ff8000">大学生成绩管理系统</h1>
      <div class="logon">
        <div :class="overlaylong">
  
  
            <el-form  :model="loginForm" status-icon :rules="rules1" ref="loginForm"
                     style="text-align: center">
              <div class="overlaylong-Signin" v-if="disfiex == 0">
                <h2 class="overlaylongH2">登录</h2>
            <el-form-item prop="id">
              <el-input v-model="loginForm.id" autocomplete="off" placeholder="请输入学号/教师编号/管理员编号"
                        clearable></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input show-password v-model="loginForm.password" autocomplete="off" placeholder="请输入密码(非管理员初始为身份证后6位)"
                        clearable></el-input>
            </el-form-item>
            <el-form-item prop="state">
              <el-select clearable placeholder="请选择身份" v-model="loginForm.state">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                </el-option>
              </el-select>
            </el-form-item>
            <h3>忘记密码？请联系管理员找回密码</h3>
            <el-form-item>
              <el-button style="width:145px" type="primary" @click="submitForm('loginForm')" round :disabled="ifDisabled">登录</el-button>
              <el-button style="width:145px" @click="resetForm('loginForm')" round>重置</el-button>
            </el-form-item>
              </div>
            </el-form>
  
  
          <el-form :model="registerForm" status-icon :rules="rules2" ref="registerForm" >
            <div class="overlaylong-Signup" v-if="disfiex == 1">
              <h2 class="overlaylongH2">注册管理员账户</h2>
              <el-form-item prop="name">
                <el-input v-model="registerForm.name" autocomplete="off" placeholder="请输入姓名" clearable></el-input>
              </el-form-item>
  
              <el-form-item prop="password">
                <el-input type="password" v-model="registerForm.password" autocomplete="off" placeholder="请输入密码"
                          clearable></el-input>
              </el-form-item>
  
              <el-form-item prop="checkPwd">
                <el-input type="password" v-model="registerForm.checkPwd" autocomplete="off"
                          placeholder="请再次输入相同密码"
                          clearable></el-input>
              </el-form-item>
  
              <el-form-item prop="adminSecret">
                <el-input v-model="registerForm.adminSecret" placeholder="请输入管理员密钥" clearable></el-input>
              </el-form-item>
              <el-form-item>
                <el-button style="width:145px" type="primary" @click="submitForm2('registerForm')" round>注册</el-button>
                <el-button style="width:145px" @click="resetForm2('registerForm')" round>重置</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
  
        <div :class="overlaytitle">
          <div class="overlaytitle-Signin" v-if="disfiex == 0">
            <h2 class="overlaytitleH2">Hello,Friend!</h2>
            <p class="overlaytitleP">
              Enter your personal details and start journey with us
            </p>
            <div class="buttongohs" @click="Signin()">注册</div>
          </div>
          <div class="overlaytitle-Signup" v-if="disfiex == 1">
            <h2 class="overlaytitleH2">Welcome Back!</h2>
            <p class="overlaytitleP">To keep connected with us please login with your personal info</p>
            <div class="buttongohs" @click="Signup">登录</div>
          </div>
        </div>
      </div>
  
  
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
  
    data() {
      let validateCheckPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入相同密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          id: "",
          password: "",
          state: ""
        },
        options: [{
          value: '1',
          label: '学生'
        }, {
          value: '2',
          label: '教师'
        }, {
          value: '3',
          label: '管理员'
        }],
        rules1: {
          id: [
            {required: true, message: '编号不能为空', trigger: 'blur'},
            // {min: 2, max: 4, message: '姓名长度为2到4个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {min: 6, max: 16, message: '密码长度为6到16个字符', trigger: 'blur'}
          ],
          state: [
            {required: true, message: '请选择身份', trigger: 'blur'}
          ]
        },
        registerForm: {
          name: '',
          password: '',
          checkPwd: '',
          adminSecret: '',
        },
        rules2: {
          name: [
            {required: true, message: '姓名不能为空', trigger: 'blur'},
            {min: 2, max: 20, message: '姓名长度为2到20个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {min: 6, max: 16, message: '密码长度为6到16个字符', trigger: 'blur'}
          ],
          checkPwd: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {validator: validateCheckPwd, trigger: 'blur'}
          ],
          adminSecret: [
            {required: true, message: '管理员密钥不能为空', trigger: 'blur'}
          ]
        },
        ifDisabled:null,
        overlaylong: 'overlaylong',
        overlaytitle: 'overlaytitle',
        disfiex: 0
  
      }
  
    },
    methods: {
      submitForm(loginForm) {
        this.$router.push('/index')
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            axios.post(service.baseURL+"/login?id=" + this.loginForm.id + "&password=" +
                this.loginForm.password + "&state=" + this.loginForm.state,)
                .then((resp) => {
                  if (resp.data.code == '20000') {
                    this.$message.success(resp.data.msg);
                    this.$store.commit('SET_TOKEN', resp.data.data.token)//存token
                    this.$store.commit('SET_USERINFO', resp.data.data.user)//存user
                    if (resp.data.data.state == '管理员') {
                      this.ifDisabled=true
                      this.$store.commit("SET_USERSTATE",0)
                      this.$router.push('/admin')//后端
                    } else if (resp.data.data.state == '学生') {
                      this.ifDisabled=true
                      this.$store.commit("SET_USERSTATE",2)
                      this.$router.push('/student')//后端
                    } else {
                      this.ifDisabled=true
                      this.$store.commit("SET_USERSTATE",1)
                      this.$router.push('/teacher')//后端
                    }
                    this.$refs['loginForm'].resetFields();//成功才清空，方便输入正确的
                  } else {
                    this.ifDisabled=false
                    this.$message.error(resp.data.msg)
                  }
                }).catch(() => {
            })
          } else {
            return false;
          }
        })
      },
      resetForm(loginForm) {
        this.$refs.loginForm.resetFields();
      },
      submitForm2(registerForm) {
        this.$refs.registerForm.validate((valid) => {
          if (valid) {
            axios.post(service.baseURL+"/admin/add?adminSecret=" + this.registerForm.adminSecret, {
                  'adminName': this.registerForm.name,
                  'adminPwd': this.registerForm.password,
                },
            ).then((resp) => {
              if (resp.data.code == '20000') {
                this.$refs['registerForm'].resetFields();
                this.$message.success(resp.data.msg);
              } else {
                this.$message.error(resp.data.msg)
              }
  
            })
          } else {
            return false;
          }
        });
      },
      resetForm2(registerForm) {
        this.$refs.registerForm.resetFields();
      },
      Signin() {
        console.log(454545)
        this.overlaylong = "overlaylongleft"
        this.overlaytitle = "overlaytitleright"
        setTimeout(() => {
          this.disfiex = 1
        }, 200)
      },
      Signup() {
        this.overlaylong = "overlaylongright"
        this.overlaytitle = "overlaytitleleft"
  
        setTimeout(() => {
          this.disfiex = 0
        }, 200)
  
      }
    }
  }
  </script>
  
  <style scoped>
  
  .login {
    width: 100vw;
    height: 100vh;
    background-image: url('https://gd-hbimg.huaban.com/9165dc3c0f8279ae5402d1f47212847bff68b49f3cb547-QEli8R');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  h1 {
    font-size: 30px;
    color: black;
  }
  
  .logon {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    /* position: relative;
    overflow: hidden; */
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    margin-top: 20px;
    display: flex;
    background: -webkit-linear-gradient(right, #4284db, #29eac4);
  }
  
  .overlaylong {
    border-radius: 10px 0 0 10px;
    width: 50%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .overlaylongleft {
    border-radius: 0px 10px 10px 0px;
    width: 50%;
    height: 100%;
    background-color: #fff;
    transform: translateX(100%);
    transition: transform 0.6s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .overlaylongright {
    border-radius: 10px 0 0 10px;
    width: 50%;
    height: 100%;
    background-color: #fff;
    transform: translateX(0%);
    transition: transform 0.6s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .overlaytitle {
    border-radius: 0px 10px 10px 0px;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  
  .overlaytitleH2 {
    font-size: 30px;
    color: #fff;
    margin-top: 20px;
  }
  
  .overlaytitleP {
    font-size: 15px;
    color: #fff;
    margin-top: 20px;
    margin-left: 4%;
  }
  
  .overlaytitleleft {
    border-radius: 0px 10px 10px 0px;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(0%);
    transition: transform 0.6s ease-in-out;
  }
  
  .overlaytitleright {
    border-radius: 0px 10px 10px 0px;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: transform 0.6s ease-in-out;
  }
  
  .overlaytitle-Signin {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .overlaytitle-Signup {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .buttongohs {
    width: 180px;
    height: 40px;
    border-radius: 50px;
    border: 1px solid #fff;
    color: #fff;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
    margin-top: 40px;
  }
  
  .overlaylongH2 {
    font-size: 25px;
    color: black;
    /* width: 250px; */
  }
  
  .overlaylong-Signin {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .overlaylong-Signup {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  el-form-item {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 10px 0;
    width: 240px;
  }
  h3{
    font-size: 10px;
    margin-top: 10px;
    cursor: pointer;
  }
  el-button{
    background-color: #29eac4 ;
    border: none;
    width: 180px;
    height: 40px;
    border-radius: 50px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    margin-top: 30px;
  }
  
  </style>