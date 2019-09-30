<template>
  <div>
    <el-dialog title="选择项目"
               :visible.sync="dialogVisible"
               width="40%">
      <el-select v-model="value"
                 placeholder="请选择"
                 style="marigin:0 auto">
        <el-option v-for="(item,index) in groups"
                   :value="item.pid"
                   :label="item.name"
                   :key="index"></el-option>
      </el-select>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="turnto">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      groups: [{
        name: 'ttt', //项目名称
        pid: 11, //项目编号
        groups: 13, //分区数量
        contents: 2 //材料数量
      }],
      dialogVisible: true
    }
  },
  methods: {
    getlist () {
      this.$axios({
        method: 'post',
        url: 'data/adm/list'
      }).then((res) => {
        if (res.data.status === 0) {
          console.log(res.data)
          this.groups = res.data.data
          console.log(this.groups)
        }
      })
    },
    turnto () {
      if (this.value === '') {
        alert("请选择项目")
        return
      } else {
        this.dialogVisible = false
        this.$store.dispatch('changepid', this.value)
        this.$router.push({
          path: 'adminindex',
        })
      }
    }
  },
  created () {
    this.getlist()
  }
}
</script>
<style scoped>
</style>
