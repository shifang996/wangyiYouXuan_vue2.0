
import http from 'axios';
import qs from 'qs';

http.defaults.baseURL = "http://127.0.0.1:3000";

http.defaults.timeout = 5000;
http.interceptors.request.use(config=>{
    if(config.method == 'get' || config.method == 'put'){
        config.headers = {
            "Content-type":"application/json;charset=utf8"
        }
        config.data = qs.stringify(config.data)
    }else if(config.method == 'post'|| config.method == 'delete'){
        config.headers = {
            "token":"hfhfsdfshdfhhdskfdsklfhkdsdhfksjdfsdklfsdkldf",
            "Content-type":"application/x-www-form-urlencoded;charset=utf-8"
        }
        config.data = qs.stringify(config.data)
    }
    return config;
},error=>{
    // 此处是请求时 失败的错误  前端的错误
    const err = Promise.reject(error);
    throw err;
});
// 响应拦截
http.interceptors.response.use(
response=>{
    if(response.data.status == 200){
        console.log('请求成功！')
    }
    return response;
},err=>{
    // 此处是处理后台的错误  暴露后台的错误到控制台
    const errs = Promise.reject(err);
    throw errs;
});
export default http;
