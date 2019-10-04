<template>
  <div style="width:90%;margin:0 auto">
    <el-tabs type="card">
      <el-tab-pane label="分组概览">
        <div style="margin-bottom:40px"
             v-for="(item,index) in tablelist">
          <el-table :data="item"
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
                           type="danger"
                           @click="handleDelete(scope.$index, scope.row)">移出分组</el-button>
              </template></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="分组操作">
        <span>待分组材料</span>
        <div class="showcheck">

          <el-checkbox-group v-model="cheopt"
                             @change="cha">
            <el-checkbox label="备选项1"
                         border></el-checkbox>
            <el-checkbox label="备选项2"
                         border></el-checkbox>
            <el-checkbox label="备选项3"
                         border></el-checkbox>
            <el-checkbox label="备选项4"
                         border></el-checkbox>
          </el-checkbox-group>
        </div>
        <el-select v-model="value2"
                   placeholder="选择分组"
                   @change="cha"
                   class="pad">
          <el-option v-for="(item,index) in dividedata"
                     :label="item.address"
                     :value="item.date"
                     :key="item.name"></el-option>
        </el-select>
        <el-button class="pad">添加到此分组</el-button>
        <el-button class="pad"
                   type="danger">删除此分组</el-button>
        <el-button class="pad"
                   type="primary">新建分组</el-button>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
export default {
  data () {
    return {
      tablelist: [[{
        date: '1',
        name: '2',
        address: '上海111市',
        da: '已通过11111',
      },
      {
        date: '2',
        name: '3',
        address: '上海市11112',
        da: '未通过11111',
      }], [{
        date: '1',
        name: '2',
        address: '上海111市',
        da: '已通过11111',
      },
      {
        date: '2',
        name: '3',
        address: '上海市11112',
        da: '未通过11111',
      }]],
      dividedata: [{
        date: '1',
        name: '2',
        address: '上海111市',
        da: '已通过11111',
      },
      {
        date: '2',
        name: '3',
        address: '上海市11112',
        da: '未通过11111',
      },
      {
        date: '3',
        name: '4',
        address: '上海沙111118弄3',
        da: '待审核1111',
      }],
      value1: [],
      cheopt: [],
      value2: '',
      delpro: ''
    }
  },
  methods: {
    handleSizeChange (val) {
      this.pagesize = val;
    },
    handleCurrentChange (val) {
      this.currentPage = val;
    },
    cha () {
      console.log(this.cheopt)
      console.log(this.value2)
    },
    handleDelete (index, row) {

    }
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
.showcheck {
  height: 200px;
  margin: 10px auto 40px 0;
  border: 1px solid rgb(230, 230, 230);
  box-sizing: border-box;
  padding: 20px;
}
.pad {
  margin-right: 40px;
}
</style>