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
          <!-- <el-input v-model="newpro.starttime"
                    class="new-pro-inp"
                    auto-complete="off"
                    placeholder="时间格式为(xxxx/xx/xx xx:xx:xx)"></el-input> -->
          <el-date-picker v-model="newpro.starttime"
                          type="datetime"
                          placeholder="选择发布时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="截止时间: ">
          <!-- <el-input v-model="newpro.deadline"
                    class="new-pro-inp"
                    auto-complete="off"
                    placeholder="时间格式为(xxxx/xx/xx xx:xx:xx)"></el-input> -->
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
export default {
  data () {
    return {
      value: '',
      groups: [],
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
      this.$axios({
        method: 'post',
        url: 'data/adm/list'
      }).then((res) => {
        if (res.data.status_code === 0) {
          console.log(res.data)
          this.groups = res.data.data
          console.log(this.groups)
          this.$store.dispatch('changepro', this.groups)
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
        if (res.data.status_code === 0) {
          this.$router.go(0)
        }
        else {
          this.$message.error('创建失败')
        }
      })
    },
    timetounix (showtime) {
      let date = new Date(showtime)
      return date.getTime()
    },
  },
  created () {
    this.getpro()
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
