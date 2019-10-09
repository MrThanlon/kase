<template>
  <div>
    <el-dialog title="选择项目"
               :visible.sync="dialogVisible"
               width="40%"
               :show-close="false"
               :close-on-click-modal="false">
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
                    auto-complete="off"
                    placeholder="请输入项目名称"></el-input>
        </el-form-item>
        <el-form-item label="发布时间: ">
          <el-date-picker v-model="newpro.starttime"
                          type="datetime"
                          placeholder="选择发布时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="截止时间: ">
          <el-date-picker v-model="newpro.deadline"
                          type="datetime"
                          placeholder="选择截止时间">
          </el-date-picker>
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
import { type } from 'os'
export default {
  data () {
    return {
      value: '',
      dialogVisible: true,
      prodialog: false,
      newpro: {
        name: '',
        starttime: '',
        deadline: ''
      }
    }
  },
  methods: {
    getpro () {

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
      console.log(this.newpro.starttime)
      this.$axios({
        method: 'post',
        url: 'data/adm/new_prj',
        data: {
          name: this.newpro.name,
          start: this.timetounix(this.newpro.starttime),
          end: this.timetounix(this.newpro.deadline)
        }
      }).then((res) => {
        if (res.data.status === 0) {
          this.prodialog = false
          this.$message({
            message: '创建项目成功',
            type: 'success'
          })
          this.getpro()
        }
        else {
          this.$message.error('创建失败')
        }
      })
    },
    timetounix (showtime) {
      let date = new Date(showtime)
      date = date.getTime()
      return date / 1000
    },
  },
  computed: {
    groups: {
      get () {
        return this.$store.getters.getgroups
      },
      set (val) {

      }
    }
  },
  created () {
    this.$store.dispatch('pros')
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
