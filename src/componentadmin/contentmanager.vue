<template>
  <div style="width:90%;margin:0 auto">
    <el-row>
      <el-col :span="24">
        <h3>评审主题</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-input v-model="theme"
                  placeholder="请输入标题"
                  size="medium"></el-input>
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
                   multiple
                   :limit="3"
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="medium">上传</el-button>
          <div slot="tip"
               class="el-upload__tip"
               style="display: inline;"> (支持doc、docx、pdf、txt、rar等)</div>
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
                   multiple
                   :limit="3"
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="medium">上传</el-button>
          <div slot="tip"
               class="el-upload__tip"
               style="display: inline;"> (支持doc、docx、pdf、txt、rar等)</div>
        </el-upload>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px">
      <el-col :span="24">
        <h3>评审说明发布</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2"><span style="line-height:36px">标题</span></el-col>
      <el-col :span="8">
        <el-input v-model="headline"
                  placeholder="单行输入"
                  size="medium"></el-input>
      </el-col>
    </el-row>
    <div>
      <el-col :span="2"><span style="line-height:36px">标题</span></el-col>
      <el-col :span="8">
        <el-input v-model="headline"
                  placeholder="单行输入"
                  size="medium"></el-input>
      </el-col>
      <el-col :span="2"><span style="line-height:36px">标题</span></el-col>
      <el-col :span="8">
        <el-input v-model="headline"
                  placeholder="单行输入"
                  size="medium"></el-input>
      </el-col>
    </div>
    <!-- <tinymce ref="editor"
             v-model="msg"
             :disabled="disabled"
             @onClick="onClick" /> -->
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