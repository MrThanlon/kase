<template>
  <div>
    <el-menu :default-active="this.$route.path"
             mode="horizontal"
             router>
      <el-menu-item index="/admin/evaluate">待评审项目</el-menu-item>
      <el-menu-item index="/admin/evaluate/divide">申报材料分组</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
import mainshow from './mainshow'
export default {
  components: {
    mainshow
  }
}
</script>
<style scoped>
</style>