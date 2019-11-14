<template>
  <div style="width:90%;margin:0 auto">
    <div class="smallhead">
      <span style="line-height:40px;font-size:1.3rem">评分表设置</span>
    </div>
    <div class="addadmin">
    </div>
    <div style="margin-bottom:40px">
      <el-table :data="tabledata.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                class="showtable"
                :span-method="objectSpanMethod"
                border>
        <el-table-column label="序号"
                         prop="index"
                         align="center"
                         width="80"></el-table-column>
        <el-table-column label="评分项"
                         prop="pro"
                         align="center"></el-table-column>
        <el-table-column label="评分内容"
                         prop="contain"
                         align="center"></el-table-column>
        <el-table-column label="操作"
                         align="center"
                         width="250">
          <template slot-scope="scope">
            <el-button size="mini"
                       type="danger"
                       @click="outgroup(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini"
                       type="danger"
                       @click="deleteeva(scope.$index, scope.row)">删除</el-button>
          </template></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabledata: [],
    }
  },
  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        const _row = this.spanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    }
  },
  computed: {
    spanArr () {
      let temp = []
      let pos = 0
      for (var i = 0; i < this.tabledata.length; i++) {
        if (i === 0) {
          temp.push(1)
          pos = 0
        } else {
          if (data[i][0] === this.tabledata[i - 1][0]) {
            temp[pos] += 1;
            temp.push(0);
          } else {
            temp.push(1);
            pos = i;
          }
        }
      }
      return temp
    }
  }
}
</script>
<style scoped>
</style>