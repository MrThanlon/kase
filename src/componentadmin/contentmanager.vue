<template>
  <div style="width:90%;margin:0 auto">
    <el-row>
      <el-col :span="24">
        <h3>评审主题</h3>
      </el-col>
    </el-row>
    <el-row style="width:800px">
      <el-col :span="
            8">
        <el-input v-model="theme"
                  placeholder="请输入标题"
                  size="medium"
                  style="width:90%"></el-input>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px">
      <el-col :span="24">
        <h3>申报人员材料</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :before-remove="beforeRemove"
                   :limit="3"
                   :on-exceed="handleExceed"
                   :file-list="fileList"
                   style="width:400px">
          <el-button size="medium">上传</el-button>
          <div slot="tip"
               class="el-upload__tip"
               style="display: inline;"> (多个文件请打包成一份上传，再次上传会覆盖已有文件)</div>
        </el-upload>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px">
      <el-col :span="24">
        <h3>评审人员材料</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :before-remove="beforeRemove"
                   :limit="3"
                   :on-exceed="handleExceed"
                   :file-list="fileList"
                   style="width:400px">
          <el-button size="medium">上传</el-button>
          <div slot="tip"
               class="el-upload__tip"
               style="display: inline;"> (多个文件请打包成一份上传，再次上传会覆盖已有文件)</div>
        </el-upload>
      </el-col>
    </el-row>
    <!-- <el-row style="margin-top:20px">
      <el-col :span="24">
        <h3>评审说明发布</h3>
      </el-col>
    </el-row>
    <el-row style="margin:20px 0;width:800px">
      <el-col :span="3"><span style="line-height:36px">标题</span></el-col>
      <el-col :span="8">
        <el-input v-model="headline"
                  placeholder="请输入标题"
                  size="medium"
                  style="width:90%"></el-input>
      </el-col>
    </el-row>
    <el-row style="margin:20px 0;width:800px">

      <el-col :span="3"><span style="line-height:36px">发布时间</span></el-col>
      <el-col :span="8">
        <el-input v-model="time"
                  placeholder="请输入发布时间"
                  size="medium"
                  style="width:90%"></el-input>
      </el-col>
      <el-col :span="3"><span style="line-height:36px">截止时间</span></el-col>
      <el-col :span="8">
        <el-input v-model="deadline"
                  placeholder="请输入截止时间"
                  size="medium"
                  style="width:90%"></el-input>
      </el-col>
    </el-row>
    <tinymce ref="editor"
             v-model="msg"
             :disabled="disabled"
             @onClick="onClick" />
    <el-row type="flex"
            justify="center">
      <el-col :span="4"
              style="margin:20px auto">
        <el-button style="width:100%">保存</el-button>
      </el-col>
    </el-row> -->

  </div>
</template>
<script>
import tinymce from './tinymce'
export default {
  components: {
    tinymce
  },
  data () {
    return {
      theme: '',
      headline: '',
      time: '',
      msg: '',
      disabled: false,
      deadline: '',
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    onClick (e, editor) {
      console.log('Element clicked')
      console.log(e)
      console.log(editor)
      console.log(this.msg)
    },
    // 清空内容
    clear () {
      this.$refs.editor.clear()
    }
  }
}
</script>
<style scoped>
.el-row h3 {
  font-weight: 400;
  font-size: 1.3rem;
}
</style>