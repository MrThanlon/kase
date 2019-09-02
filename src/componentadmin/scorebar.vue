<template>
  <div>
    <el-table :data="tabledata.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              class="showtable"
              border>
      <el-table-column type="selection"
                       width="36">
      </el-table-column>
      <el-table-column prop='date'
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
                     @click="handleEdit(scope.$index, scope.row)">修改</el-button>
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
    <el-row type="flex"
            justify="center"
            class="onedown">
      <el-col :span="4">
        <el-button>一键下载</el-button>
      </el-col>
    </el-row>
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
        da: '待审核',
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
    }
  },
  mounted () {
    this.tabledata = this.recivedata
  },
}
</script>
<style>
.cell label {
  margin: 0;
}
.onedown {
  margin: 20px 0;
}
</style>