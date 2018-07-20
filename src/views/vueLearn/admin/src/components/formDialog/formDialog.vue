<template>
  <el-dialog class="add-version-wrap" :close-on-click-modal="false" :title="data.title" :before-close="handleClose" v-loading="listLoading" :width="data.width" :visible.sync="data.isVisible" center>
    <el-form ref="versionForm" :rules="rules" :model="data.form" :label-width="data.labelWidth">
      <el-form-item :label="setLabel('版本号')" prop="version">
        <el-input :disabled="data.isDisable" v-model="data.form.version"></el-input>
      </el-form-item>
      <el-form-item v-if="data.form.type === 1" :label="setLabel('更新大小(M)')" prop="size">
        <el-input :disabled="data.isDisable" v-model="data.form.size"></el-input>
      </el-form-item>
      <el-form-item :label="setLabel('启用时间')" prop="enableTime">
        <el-date-picker
          :disabled="data.isDisable"
          v-model="data.form.enableTime"
          type="date"
          placeholder="选择日期"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-form-item>     
      <el-form-item :label="setLabel('更新内容')" prop="content">
        <el-input :disabled="data.isDisable" type="textarea" v-model="data.form.content"></el-input>
      </el-form-item>     
      <el-form-item :label="setLabel('是否强制')" prop="forceUpdate">
        <el-select :disabled="data.isDisable" v-model="data.form.forceUpdate" placeholder="请选择">
          <el-option label="不强制更新" value="0"></el-option>
          <el-option label="强制更新" value="1"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item v-if="data.uploadRar.show" :label="setLabel('安装包')" class="form-item-apk">
        <el-upload class="upload-apk"
          :action="data.uploadRar.action"
          :accept="data.uploadRar.accept"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :multiple = "data.uploadRar.multiple"
          :limit="data.uploadRar.limit"
          :on-exceed="handleExceed"
          :auto-upload="false"
          :file-list="data.uploadRar.fileList"
          :on-change="getFile"
        >
          <el-button v-show="!data.isDisable" class="upload-btn" size="small">上传文件</el-button>
        </el-upload>
      </el-form-item>     
    </el-form>
    <div class="popBtn-box" :style="btnStyle">
      <el-button v-if="!data.isDisable" type="primary" @click="popSubmit(data.event)">{{data.btnTrueName}}</el-button>
      <el-button @click="handleClose">取消</el-button>
    </div>
  </el-dialog>
</template>
<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        pickerOptions:{
          disabledDate(time) {
            const myDate = new Date();
            const Y = myDate.getFullYear();
            const M = myDate.getMonth() + 1;
            const D = myDate.getDate();
            const mydate = Y + "/" +M+ "/" +D;
            const tt = new Date(mydate).getTime();
            return time.getTime() < tt;
          }
        },
        file:'',
        rules: {
          version: [
            { required: true, message: '请输入版本号', trigger: 'change' }
          ],
          size: [
            { required: true, message: '请输入更新大小', trigger: 'change' }
          ],
          enableTime: [
            {required: true, message: '请选择日期', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请选择更新内容', trigger: 'change' }
          ]
        }
      }
    },
    props:{
      data:{
        type:Object,
        default:{
          title:"",
          width:"40%",
          labelWidth:"35%",
          event:"",
          btnTrueName:"确定",
          btnWidth:'160px',
          isVisible:false,
          isDisable:false,
          uploadRar:{
            show:false,
            accept:".png",
            action:"",
            multiple:false,
            limit:1,
            fileList:[]
          },
          form:{}
        }
      },
      listLoading:{
        type:Boolean,
        default:false
      }
    },
    computed:{
      btnStyle(){
        return {width:this.data.btnWidth};
      }
    },
    methods:{
      setLabel(val){
        return `${val}：`;
      },
      inputKey(val1,val2){
        return `${val1}${val2}`;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      getFile(file, fileList) {
        this.file = file.raw;
      },
      popSubmit(val){
        this.$refs.versionForm.validate((valid) => {
          if (valid) {
            let putData = {
              event:val,
              data:{}
            }
            if(val === "addAndroid"){
              const data = this.data.form;
              let formData = new FormData();
              if(data.id){
                formData.append('id',data.id);
              }
              formData.append('userId',data.userId);
              formData.append('version',data.version);
              formData.append('size',data.size);
              formData.append('enableTime',data.enableTime);
              formData.append('content',data.content);
              formData.append('forceUpdate',data.forceUpdate);
              formData.append('file',this.file);
              putData.data = formData;
            }else if(val === "addIos"){
              if(this.data.form.id){
                const {id,userId,version,enableTime,content,forceUpdate} = this.data.form;
                putData.data = {id,userId,version,enableTime,content,forceUpdate};
              }else{
                const {userId,version,enableTime,content,forceUpdate} = this.data.form;
                putData.data = {userId,version,enableTime,content,forceUpdate};
              }          
            }
            this.$emit("versionSub",putData);
          } else {
            return false;
          }
        });
      },
      handleClose(){
        this.$refs.versionForm.clearValidate();
        this.$emit("resetState");
      }
    },
    updated(){
      if(!this.data.isVisible){
        this.file = '';
      }
    }
  };
</script>
<style lang="scss">
  @import '~scss_vars';

  .form-item-apk{
    .el-form-item__content{
      line-height:0;     
      .upload-apk{
        position:relative;
        .el-upload{
          width:80px;
          height:40px;
          position:absolute;
          left:0;
        }
        .el-upload-list{
          height:40px;
          line-height:40px;
          padding-left:100px;
          .el-upload-list__item:first-child{
            margin-top:0px;
            line-height:40px;
          }
        }
      }
    }
  } 
  .popBtn-box{
    margin:10px auto 0;
  }
</style>
