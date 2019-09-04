<template>
  <div style="width:90%;margin:0 auto">
    <div class="onepart">
      <el-table :data="dividedata"
                border>
        <el-table-column label="组别"
                         prop="date"
                         align="center"
                         width="180"></el-table-column>
        <el-table-column label="序号"
                         type="index"
                         align="center"
                         width="160"></el-table-column>
        <el-table-column label="待评审项目"
                         prop="address"
                         align="center"></el-table-column>
        <el-table-column label="操作"
                         align="center"
                         width="180">
          <template slot-scope="scope">
            <el-button size="mini"
                       @click="handleEdit(scope.$index, scope.row)">删除</el-button>
          </template></el-table-column>
      </el-table>
      <el-row :gutter="10"
              class="opt">
        <el-col :span="5">
          <el-select v-model="value1"
                     placeholder="请选择"
                     multiple
                     collapse-tags>
            <el-option v-for="item in dividedata"
                       :key="item.date"
                       :value="item.address"></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-button>添加到此分组</el-button>
        </el-col>
        <el-col :span="4">
          <el-button>删除此分组</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="onepart">
      <el-table :data="dividedata"
                border>
        <el-table-column label="组别"
                         prop="date"
                         align="center"
                         width="180"></el-table-column>
        <el-table-column label="序号"
                         type="index"
                         align="center"
                         width="160"></el-table-column>
        <el-table-column label="待评审项目"
                         prop="address"
                         align="center"></el-table-column>
        <el-table-column label="操作"
                         align="center"
                         width="180">
          <template slot-scope="scope">
            <el-button size="mini"
                       @click="handleEdit(scope.$index, scope.row)">删除</el-button>
          </template></el-table-column>
      </el-table>
      <el-row :gutter="10"
              class="opt">
        <el-col :span="5">
          <el-select v-model="value1"
                     placeholder="请选择"
                     multiple
                     collapse-tags>
            <el-option v-for="item in dividedata"
                       :key="item.date"
                       :value="item.address"></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-button size="medium">添加到此分组</el-button>
        </el-col>
        <el-col :span="4">
          <el-button size="medium">删除此分组</el-button>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row :gutter="10"
              class="mainopt"
              type="flex"
              justify="center">
        <el-col :span="4">
          <el-button size="medium">添加新分组</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dividedata: [{
        date: '1',
        name: '2',
        address: '上海市普1518弄1',
        da: '已通过11111',
      },
      {
        date: '2',
        name: '3',
        address: '上海市普陀路1518弄2',
        da: '未通过11111',
      },
      {
        date: '3',
        name: '4',
        address: '上海沙江路1518弄3',
        da: '待审核1111',
      }],
      value1: []
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
<style scoped>
.opt {
  margin: 20px auto;
}
.mainopt {
  margin: 40px auto;
}
</style>