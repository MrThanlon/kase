<template>
  <div style="width:90%;margin:0 auto">
    <div class="smallhead">
      <span style="line-height:40px;font-size:1.3rem">打分表审核</span>
      <el-button>一键下载</el-button>
    </div>
    <el-table :data="tabledata.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              class="showtable"
              border
              :row-class-name="tableRowClassName">
      <el-table-column type="selection"
                       :selectable='checkboxInit'>
      </el-table-column>
      <el-table-column label="序号"
                       align="center"
                       width="160"
                       type="index"
                       :index="indexMethod"></el-table-column>
      <el-table-column prop='name'
                       label="账号"
                       align="center"></el-table-column>
      <el-table-column prop='da'
                       label="提交状态"
                       align="center"
                       width="180"></el-table-column>
      <el-table-column prop='address'
                       label="提交时间"
                       align="center"
                       width="180"></el-table-column>
      <el-table-column prop='date'
                       label="已提交打分表"
                       align="center"
                       width="180"></el-table-column>
      <el-table-column label="操作"
                       align="center"
                       width="180">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.$index, scope.row)"
                     v-if="scope.row.da ==='已通过'">下载</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="total, prev, pager, next, jumper"
                   :page-size="pagesize"
                   :current-page="currentPage"
                   :total="tabledata.length"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   class="onedown">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      recivedata: [{
        date: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路',
        da: '已通过',
      },
      {
        date: '2',
        name: '王小虎',
        address: '上海市普陀区金沙江路',
        da: '未通过',
      },
      {
        date: '3',
        name: '王小虎',
        address: '上海市普陀区金沙江路',
        da: '已通过',
      },
      {
        date: '4',
        name: '王小虎',
        address: '上海市普陀区金沙江路',
        da: '已通过',
      },
      {
        date: '5',
        name: '王小虎',
        address: '上海市普陀区金沙江路',
        da: '未通过',
      },
      {
        date: '6',
        name: '王小虎',
        address: '上海市普陀区金沙江路',
        da: '已通过',
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
    indexMethod (index) {
      return (index + 1) + (this.currentPage - 1) * (this.pagesize)
    },
    checkboxInit (row, index) {
      if (row.da !== '已通过')
        return 0;
      else
        return 1;
    },
    tableRowClassName ({ row, rowIndex }) {
      if (row.da === '未通过') {
        return 'warning-row';
      } else if (row.da === '已通过') {
        return 'success-row';
      }
      return '';
    },
  },
  mounted () {
    this.tabledata = this.recivedata
  },
}
</script>
<style>
.smallhead {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.cell label {
  margin: 0;
  margin-left: 6px;
}
.onedown {
  margin: 10px 0 20px 0;
}
</style>