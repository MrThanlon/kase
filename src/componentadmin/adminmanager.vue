<template>
  <div style="width:80%;margin:0 auto">
    <div>
      <div class="addadmin">
        <el-button type="text"
                   @click="dialogVisible = true">添加管理员</el-button>
      </div>
      <el-dialog title="添加管理员"
                 :visible.sync="dialogVisible"
                 width="30%"
                 :before-close="handleClose">
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
      <el-table-column prop='time'
                       label="登录时间"
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
      recivedata: [{
        date: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: '已通过',
        time: '1'
      },
      {
        date: '2',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: '未通过',
        time: '1'
      },
      {
        date: '3',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: '待审核',
        time: '1'
      },
      {
        date: '4',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: '已通过',
        time: '1'
      },
      {
        date: '5',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: '未通过',
        time: '1'
      },
      {
        date: '6',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: '待审核',
        time: '1'
      }],
      tabledata: [],
      currentPage: 1,
      pagesize: 3,
      acc: '',
      passwo: ''
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
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

        }
      })
    }
  },
  mounted () {
    this.tabledata = this.recivedata
  },
}
</script>
<style scoped>
.addadmin {
  display: flex;
  justify-content: flex-end;
}
</style>