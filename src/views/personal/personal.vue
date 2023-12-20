<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <el-card class="box-card" style="margin-left:20px;">
          <div slot="header" class="clearfix">
            <span>个人信息</span>
          </div>
          <div>
            <div class="text-center" style="transform: translateX(20px);">
              <userAvatar />
            </div>
            <el-divider></el-divider>
            <div class="details-item"><i class="el-icon-platform-eleme"></i>用户姓名 <span>{{userInfo.user_name}}</span></div>
            <el-divider></el-divider>
            <div class="details-item"><i class="el-icon-platform-eleme"></i>学号/工号 <span>{{userInfo.number}}</span></div>
            <el-divider></el-divider>
            <div class="details-item"><i class="el-icon-platform-eleme"></i>学院/班级 <span>{{userInfo.from_where}}</span></div>
            <el-divider></el-divider>
            <div class="details-item"><i class="el-icon-platform-eleme"></i>单位 <span>陕西理工大学</span></div>
            <el-divider></el-divider>
          </div>
        </el-card>
      </el-col>
      <el-col :span="18" :xs="24">
        <el-card class="info-cord">
          <div slot="header" class="clearfix">
            <span>基本资料</span>
          </div>
          <el-tabs v-model="activeTab">
            <el-tab-pane label="基本资料" name="userinfo">
              <userInfo :user="userInfo" />
            </el-tab-pane>
            <el-tab-pane label="修改密码" name="resetPwd">
              <resetPwd />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import userAvatar from "./login-components/userAvatar";
import userInfo from "./login-components/userInfo";
import resetPwd from "./login-components/resetPwd";

export default {
  name: "Profile",
  components: { userAvatar, userInfo, resetPwd },
  data() {
    return {
      user: {},
      roleGroup: {},
      postGroup: {},
      activeTab: "userinfo",
      userId: "",
      userInfo: {}
    };
  },
  created() {
    //加载个人信息
    var storedUserId = localStorage.getItem("userId");

    // 使用获取到的用户ID进行操作  
    console.log("User ID from cache:", storedUserId);
    this.userId = storedUserId
    this.getUser();
  },
  methods: {
    open4() {
      this.$notify.error({
        title: '错误',
        message: '网络故障'
      });
    },
    getUser() {
      let that = this
      this.$axios.get("/person/details?userId=" + this.userId).then((result) => {
        console.log(result); 
        if (result.data.code == 200) {
          that.userInfo = result.data.user
        } else {
          that.open4()
        }
      }).catch((err) => {

      });
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.box-card {
  height: 575px;
}

.box-card:hover {
  box-shadow: 0px 0px 10px 5px rgba(177, 176, 176, 0.5);
  /* 鼠标悬停时添加阴影 */
}

.info-cord:hover {
  box-shadow: 0px 0px 10px 5px rgba(177, 176, 176, 0.5);
  /* 鼠标悬停时添加阴影 */
}

.info-cord {
  width: 820px;
}
</style>
