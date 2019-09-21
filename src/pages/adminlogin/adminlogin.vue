<template>
  <div>
    <el-container class="maincon">
      <el-header style="background: #00838F">
        <el-row :gutter="20"
                class="mainhead">
          <el-col :span="12"
                  class="head1"><i class="el-icon-s-home"></i><span class="tohome">
              <router-link to="/adminindex">通用项目评审管理系统</router-link>
            </span></el-col>
          <el-col :span="12"
                  class="head2"><span>欢迎您，admin<br></span><span>退出</span></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="this.$route.path"
                   router>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>评审材料审核</span>
              </template>
              <el-menu-item index="/adminindex/examining">待审核项目</el-menu-item>
              <el-menu-item index="/adminindex/examined">已审核项目</el-menu-item>
              <el-menu-item index="/adminindex/evaluate">待评审项目</el-menu-item>
              <el-menu-item index="/adminindex/scoretable">打分表审核</el-menu-item>
            </el-submenu>
            <el-menu-item index="/adminindex/contentmanager">
              <i class="el-icon-menu"></i>
              <span>内容管理</span>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item index="/adminindex/adminmanager">管理员用户管理</el-menu-item>
              <el-menu-item index="/adminindex/usermanager">评审人员用户管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="admin">
              <i class="el-icon-document-copy"></i>
              <span>切换项目</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="maintheme">
            <h2>{{title}}</h2>
          </div>
          <router-view :key="key"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '优秀论文评审'
    }
  },
  computed: {
    key () {
      return this.$route.path + Math.random();
    }
  }

}
</script>

<style>
.tohome a {
  color: #ffffff;
  text-decoration: none;
}

.mainhead {
  color: #ffffff;
}
.head1 {
  height: 60px;
}
.head1 span {
  text-align: center;
  line-height: 60px;
}
.head2 {
  text-align: right;
  height: 60px;
}
.head2 span {
  line-height: 30px;
}
.maincon h2 {
  text-align: center;
  margin-bottom: 20px;
}
.maintheme h2 {
  font-weight: 400;
}
</style>