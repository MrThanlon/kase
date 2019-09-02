<template>
  <div>
    <el-row :gutter="36"
            class="thrparts">
      <el-col :span="8"
              class="shownum">
        <div><a>30</a><span>待审核项目</span></div>
      </el-col>
      <el-col :span="8"
              class="shownum">
        <div><a>30</a><span>待审核项目</span></div>
      </el-col>
      <el-col :span="8"
              class="shownum">
        <div><a>30</a><span>待审核项目</span></div>
      </el-col>
    </el-row>
    <el-table :data="tabledata.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              class="showtable">
      <el-table-column prop='date'
                       label="序号"></el-table-column>
      <el-table-column prop='name'
                       label="材料"></el-table-column>
      <el-table-column prop='address'
                       label="提交时间"></el-table-column>
      <el-table-column prop='da'
                       label="状态"></el-table-column>
      <el-table-column label="操作">
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
                   @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabledata: [{
        date: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: 2,
      },
      {
        date: '2',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: 2,
      },
      {
        date: '3',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: 2,
      },
      {
        date: '4',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        da: 2,
      }],
      currentPage: 1,
      pagesize: 2
    }
  },
  methods: {
    handleSizeChange (val) {
      this.pagesize = val;
    },
    handleCurrentChange (val) {
      this.currentPage = val;
    },
  }
}
</script>
<style>
.cell {
  text-align: center;
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