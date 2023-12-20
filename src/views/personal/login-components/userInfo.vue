<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="80px">
    <el-form-item label="用户昵称" prop="user_name">
      <el-input v-model="form.user_name" maxlength="30" />
    </el-form-item>
    <el-form-item label="手机号码" prop="tel">
      <el-input v-model="form.tel" maxlength="11" />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="form.email" maxlength="50" />
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.gender">
        <el-radio label="0">男</el-radio>
        <el-radio label="1">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="mini" @click="submit">保存</el-button>
      <el-button type="danger" size="mini" @click="close">关闭</el-button>
    </el-form-item>
  </el-form>
</template>
  
<script>

export default {
  props: {
    user: {
      type: Object
    }
  },
  data() {
    return {
      form: {
      },
      // 表单校验
      rules: {
        user_name: [
          { required: true, message: "用户昵称不能为空", trigger: "blur" }
        ],
        email: [
          { required: true, message: "邮箱地址不能为空", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        tel: [
          { required: true, message: "手机号码不能为空", trigger: "blur" },
          {
            pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
            message: "请输入正确的手机号码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  watch: {
    user: {
      handler(user) {
        if (user) {
          console.log(user.gender);
          if (user.gender == '女') {
            console.log("将进入了");
            this.form = { user_name: user.user_name, tel: user.tel, email: user.email, gender: 1 };
          }
          else if (user.gender == '男') {
            this.form = { user_name: user.user_name, tel: user.tel, email: user.email, gender: 0 };
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    submit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          updateUserProfile(this.form).then(response => {
            this.$modal.msgSuccess("修改成功");
            this.user.phonenumber = this.form.phonenumber;
            this.user.email = this.form.email;
          });
        }
      });
    },
    close() {
      this.$tab.closePage();
    }
  }
};
</script>