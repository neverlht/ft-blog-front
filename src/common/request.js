import axios from "axios"
import {ViewUI,router} from "../common/core"
import Util from "./utils"



axios.interceptors.request.use(
  (config)=>{
      ViewUI.LoadingBar.start();
    return config
  },
  (error)=>{
      ViewUI.LoadingBar.error();
    return Promise.reject(error)
  }
);
axios.interceptors.response.use(
  (response)=>{// 响应成功关闭loading
    ViewUI.LoadingBar.finish();
    if(response.data&&response.data.returnCode ==0){
        ViewUI.Message.error(response.data.returnMsg);
        return new Promise(()=>{});
    }else if(response.data&&(response.data.returnCode ==302||response.data.returnCode ==301)){
        ViewUI.Message.error("用户登录过期，2秒钟后跳转到登录界面……");
      setTimeout(()=>{
        router.push("/");
      },2000);
    }else{
      return response;
    }
  },
  ()=>{
      ViewUI.LoadingBar.error();
      ViewUI.Message.error("服务器处理异常");
  }
);
const _request = (options)=>{
    return axios({
      method:options.method||"get",
      // baseURL:"api",
      url:options.url,
      data:options.data,
      params:options.params,
      headers:Util.getTokenHeader()
    })
}

export default {
  get (options){
    options.method = "get";
    return _request(options);
  },
  post (options){
    options.method = "post";
    return _request(options);
  }
};
