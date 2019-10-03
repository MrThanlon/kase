<template>
  <div>
    <el-dialog title="选择项目"
               :visible.sync="dialogVisible"
               width="40%"
               :before-close="router.go(0)">
      <el-select v-model="value"
                 placeholder="请选择"
                 style="marigin:0 auto">
        <el-option v-for="(item,index) in groups"
                   :value="item.pid"
                   :label="item.name"
                   :key="index"></el-option>
      </el-select>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="prodialog=true">创建新项目</el-button>
        <el-button type="primary"
                   @click="turnto">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="创建新项目"
               :visible.sync="prodialog"
               width="40%">
      <el-form :model="newpro">
        <el-form-item label="项目名称: "
                      class="form">
          <el-input v-model="newpro.name"
                    class="new-pro-inp"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目总分: "
                      class="form">
          <el-input v-model="newpro.score"
                    class="new-pro-inp"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否可以只打总分: ">
          <el-select v-model="newpro.totalgoal"
                     placeholder="请选择">
            <el-option label="是"
                       value=1></el-option>
            <el-option label="否"
                       value=2></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="createpro">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      groups: [],
      dialogVisible: true,
      prodialog: false,
      newpro: {
        name: '',
        score: '',
        totalgoal: ''
      }
    }
  },
  methods: {
    getlist () {
      this.$axios({
        method: 'post',
        url: 'data/adm/list'
      }).then((res) => {
        if (res.data.status_code === 0) {
          console.log(res.data)
          this.groups = res.data.data
          console.log(this.groups)
          this.$store.dispatch('changepros', this.groups)
        }
      })
    },
    turnto () {
      if (this.value === '') {
        alert("请选择项目")
        return
      } else {
        this.dialogVisible = false
        this.$store.dispatch('changepid', parseInt(this.value))
        this.$router.push({
          path: 'adminindex',
        })
      }
    },
    createpro () {
      console.log(this.newpro)
      console.log(typeof (this.newpro.totalgoal))
      this.$axios({
        method: 'post',
        url: 'data/adm/new_prj',
        data: {
          name: this.newpro.name,
          total: parseInt(this.newpro.score),
          total_only: parseInt(this.newpro.totalgoal)
        }
      }).then((res) => {
        if (res.data.status_code === 0) {
          this.$router.go(0)
        }
      })
    }
  },
  created () {
    this.getlist()
    this.groups = this.$store.getters.getpro
  }
}
</script>
<style>
.new-pro-inp {
  width: 60%;
  margin: 10px auto;
}
.form label {
  line-height: 60px;
}
</style>
