import axios from 'axios'
let Upload = {
  host:"http://fairytale.oss-cn-hangzhou.aliyuncs.com",
  uploadFile:function(file,param,callback){
    var formdata = new FormData();
    var fileNameDef = param.fileNameSuffix?param.fileNameSuffix:new Date().getTime();
    var fileName = fileNameDef+file.name.substring(file.name.lastIndexOf('.'),file.name.length);
    formdata.append('filename', fileName);
    var key = param.dir+fileName;
    formdata.append('key', key);
    formdata.append('policy', param.policy);
    formdata.append('OSSAccessKeyId', param.accessid);
    formdata.append('success_action_status', "200");
    formdata.append('signature', param.signature);
    formdata.append('file', file);
    axios({
      url: this.host,
      method: 'post',
      data: formdata,
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(() => {
        callback(this.host+"/"+key);
    })
  }
};

export default Upload;
