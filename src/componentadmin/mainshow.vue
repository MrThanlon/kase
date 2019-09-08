<template>
  <div style="width:90%;margin:0 auto">
    <el-dialog title="添加管理员"
               :visible.sync="dialogVisible"
               width="30%"
               :before-close="handleClose">
      <div style="width:80%;margin:0 auto">
        <el-radio label="1"
                  v-model="optcon">待定</el-radio>
        <el-radio label="2"
                  v-model="optcon">通过</el-radio>
        <el-radio label="3"
                  v-model="optcon">否决</el-radio>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-row :gutter="36"
            class="thrparts"
            v-if="$route.path=='/admin'">
      <el-col :span="8"
              class="shownum">
        <div>
          <router-link to="/admin/examining">32</router-link>
          <span>待审核项目</span>
        </div>
      </el-col>
      <el-col :span="8"
              class="shownum">
        <div>
          <router-link to="/admin/examined">29</router-link><span>已审核项目</span>
        </div>
      </el-col>
      <el-col :span="8"
              class="shownum">
        <div>
          <router-link to="/admin/evaluate">19</router-link><span>待评审项目</span>
        </div>
      </el-col>
    </el-row>

    <el-table :data="tabledata.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              class="showtable"
              :row-class-name="tableRowClassName"
              border>
      <el-table-column type="index"
                       :index="indexMethod"
                       label="序号"
                       align="center"
                       width="160"></el-table-column>
      <el-table-column prop='name'
                       label="材料"
                       align="center"></el-table-column>
      <el-table-column prop='address'
                       label="提交时间"
                       align="center"
                       width="180"></el-table-column>
      <el-table-column prop='da'
                       label="状态"
                       align="center"
                       width="180"></el-table-column>
      <el-table-column label="操作"
                       align="center"
                       width="180">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="dialogVisible = true">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="total, prev, pager, next, jumper"
                   :page-size="pagesize"
                   :current-page="currentPage"
                   :total="tabledata.length"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   style="margin-top:10px">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      optcon: '1',
      dialogVisible: false,
      recivedata: [{
        date: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: '已通过',
      },
      {
        date: '2',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: '未通过',
      },
      {
        date: '3',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: '待审核',
      },
      {
        date: '4',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: '已通过',
      },
      {
        date: '5',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: '未通过',
      },
      {
        date: '6',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: '待审核',
      }],
      tabledata: [],
      currentPage: 1,
      pagesize: 3
    }
  },
  methods: {
    handleSizeChange (val) {
      this.pagesize = val;
    },
    handleCurrentChange (val) {
      this.currentPage = val;
    },
    tableRowClassName ({ row, rowIndex }) {
      if (this.$route.path !== '/admin/evaluate') {
        if (row.da === '未通过') {
          return 'warning-row';
        } else if (row.da === '已通过') {
          return 'success-row';
        }
      }
      return '';
    },
    indexMethod (index) {
      return (index + 1) + (this.currentPage - 1) * (this.pagesize)
    }
  },
  mounted () {
    if (this.$route.path === '/admin/examining') {
      this.tabledata = []
      for (let a = 0; a < this.recivedata.length; a++) {
        if (this.recivedata[a].da === '待审核') {
          this.tabledata.push(this.recivedata[a])
        }
      }
    } else if (this.$route.path === '/admin/examined') {
      this.tabledata = []
      for (let a = 0; a < this.recivedata.length; a++) {
        if (this.recivedata[a].da === '已通过' || this.recivedata[a].da === '未通过') {
          this.tabledata.push(this.recivedata[a])
        }
      }
    } else if (this.$route.path === '/admin/evaluate') {
      this.tabledata = []
      for (let a = 0; a < this.recivedata.length; a++) {
        if (this.recivedata[a].da === '已通过') {
          this.tabledata.push(this.recivedata[a])
        }
      }
    } else if (this.$route.path == '/admin') {
      this.tabledata = []
      this.tabledata = this.recivedata
    }

  },
  watch: {
    '$route': function () {
      if (this.$route.path === '/admin/examining') {
        this.tabledata = []
        for (let a = 0; a < this.recivedata.length; a++) {
          if (this.recivedata[a].da === '待审核') {
            this.tabledata.push(this.recivedata[a])
          }
        }
      } else if (this.$route.path === '/admin/examined') {
        this.tabledata = []
        for (let a = 0; a < this.recivedata.length; a++) {
          if (this.recivedata[a].da === '已通过' || this.recivedata[a].da === '未通过') {
            this.tabledata.push(this.recivedata[a])
          }
        }
      } else if (this.$route.path === '/admin/evaluate') {
        this.tabledata = []
        for (let a = 0; a < this.recivedata.length; a++) {
          if (this.recivedata[a].da === '已通过') {
            this.tabledata.push(this.recivedata[a])
          }
        }
      } else if (this.$route.path == '/admin') {
        this.tabledata = []
        this.tabledata = this.recivedata
      }
    }
  }
}
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.shownum a {
  color: rgba(0, 131, 143, 1) !important ;
  text-decoration: none;
}
.shownum a:hover {
  color: rgba(0, 131, 143, 1);
  cursor: pointer;
}
.thrparts {
  text-align: center;
}
.shownum {
  height: 120px;
  box-sizing: border-box;
  padding-bottom: 20px;
}
.shownum div {
  width: 80%;
  margin: 0 auto;
  text-align: left;
}
.shownum a {
  display: block;
  font-size: 2.5rem;
}
</style>