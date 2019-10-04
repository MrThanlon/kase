<template>
  <div style="width:90%;margin:0 auto">
    <el-tabs type="card">
      <el-tab-pane label="分组概览">
        <div class="addadmin">
          <el-button type="text"
                     @click="dialogVisible = true">添加评审人员</el-button>
        </div>
        <el-dialog title="添加评审人员"
                   :visible.sync="dialogVisible"
                   width="35%">
          <div style="width:80%;margin:0 auto">
            <el-input v-model="acc"
                      placeholder="用户名(非十一位数字,不超过20个字符)"
                      style="margin-bottom:20px"></el-input>
            <el-input v-model="passwo"
                      placeholder="密码"></el-input>
          </div>
          <span slot="footer"
                class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary"
                       @click="createva">确 定</el-button>
          </span>
        </el-dialog>
        <div style="margin-bottom:40px">
          <el-table :data="dividedata"
                    border>
            <el-table-column label="组别"
                             prop="date"
                             align="center"
                             width="80"></el-table-column>
            <el-table-column label="序号"
                             type="index"
                             align="center"
                             width="80"></el-table-column>
            <el-table-column label="用户名"
                             prop="address"
                             align="center"></el-table-column>
            <el-table-column label="操作"
                             align="center"
                             width="250">
              <template slot-scope="scope">
                <el-button size="mini"
                           type="danger"
                           @click="deleteeva(scope.$index, scope.row)">删除账号</el-button>
                <el-button size="mini"
                           type="danger"
                           @click="outgroup(scope.$index, scope.row)">移出分组</el-button>
              </template></el-table-column>
          </el-table>
        </div>

      </el-tab-pane>
      <el-tab-pane label="分组操作">
        <span>评审人员</span>
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
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
export default {
  data () {
    return {
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
      dialogVisible: false,
      acc: '',
      passwo: ''
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
    deleteeva (index, row) {
      this.$axios({
        method: 'post',
        url: 'data/adm/del_user',
        data: {
          u: row.name
        }
      }).then((res) => {
        if (res.data.status_code === 0) {

        }
      })
    },
    outgroup (index, row) {
      this.$axios({
        method: 'post',
        url: 'data/adm/mod_user_group',
        data: {
        }
      }).then((res) => {
        if (res.data.status_code === 0) {

        }
      })
    },
    createva () {
      this.$axios({
        method: 'post',
        url: 'data/adm/add_user',
        data: {
          u: this.acc,
          p: this.passwo
        }
      }).then((res) => {
        if (res.data.status_code === 0) {

        }
      })
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
.addadmin {
  display: flex;
  justify-content: flex-end;
  margin-top: -10px;
}
</style>