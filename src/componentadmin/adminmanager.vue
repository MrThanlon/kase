<template>
  <div style="width:80%;margin:0 auto">
    <div>
      <div class="addadmin">
        <el-button type="text"
                   @click="dialogVisible = true">添加管理员</el-button>
      </div>
      <el-dialog title="添加管理员"
                 :visible.sync="dialogVisible"
                 width="30%">
        <div style="width:80%;margin:0 auto">
          <el-input v-model="acc"
                    placeholder="用户名"
                    style="margin-bottom:20px"></el-input>
          <el-input v-model="passwo"
                    placeholder="密码"></el-input>
        </div>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary"
                     @click="creatadmin">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <el-table :data="tabledata"
              border>
      <el-table-column type="index"
                       label="序号"
                       align="center"
                       width="160"></el-table-column>
      <el-table-column prop='name'
                       label="用户名"
                       align="center"></el-table-column>
      <el-table-column label="操作"
                       align="center"
                       width="140">
        <template slot-scope="scope">

          <el-button @click="handledelete(scope.$index, scope.row)"
                     type="danger"
                     size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
export default {
  data () {
    return {
      acco: '',
      pass: '',
      dialogVisible: false,
      adminlist: ['王小虎', '王小虎', '王小虎', '王小虎'],
      tabledata: [],
      currentPage: 1,
      pagesize: 3,
      acc: '',
      passwo: ''
    }
  },
  methods: {
    handledelete (index, row) {
      this.$axios({
        method: 'post',
        url: 'data/adm/del_adm',
        data: {
          username: row.name
        }
      }).then((res) => {
        if (res.data.status_code === 0) {

        }
        else {
          this.$message.error('创建失败')
        }
      })
    },
    creatadmin () {
      this.$axios({
        method: 'post',
        url: 'data/adm/new_adm',
        data: {
          username: this.acc,
          password: this.passwo
        }
      }).then((res) => {
        if (res.data.status_code === 0) {
          this.dialogVisible = false
        }
      })
    },
    getadmin () {
      this.$axios({
        method: 'post',
        url: 'data/adm/list_adm'
      }).then((res) => {
        if (res.data.status_code === 0) {
          this.adminlist = res.data.data
          for (let i = 0; i < this.adminlist.length; i++) {
            this.tabledata.push({ name: this.adminlist[i] })
          }
        }
      })
    }
  },
  created () {
    this.getadmin()
    for (let i = 0; i < this.adminlist.length; i++) {
      this.tabledata.push({ name: this.adminlist[i] })
    }
  },
}
</script>
<style scoped>
.addadmin {
  display: flex;
  justify-content: flex-end;
}
</style>