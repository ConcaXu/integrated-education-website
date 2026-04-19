import axios, { type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
 
// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: '/api', // 使用代理地址
  timeout: 50000, // 请求超时时间
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
});
 
// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // 例如：如果 token 存在，则给请求头加上 token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
 
// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const res = response.data;
    
    // 这里可以根据后端的响应结构进行定制
    // 假设后端返回结构为 { code: number, msg: string, data: any }
    // if (res.code !== 200) {
    //   ElMessage.error(res.msg || 'Error');
    //   return Promise.reject(new Error(res.msg || 'Error'));
    // }
    
    return res;
  },
  (error: any) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.error('err' + error); // for debug
    let msg = error.ElMessage || '请求失败';
    
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          msg = '请求错误(400)';
          break;
        case 401:
          msg = '未授权，请重新登录(401)';
          // 这里可以做登出逻辑
          break;
        case 403:
          msg = '拒绝访问(403)';
          break;
        case 404:
          msg = '请求出错(404)';
          break;
        case 408:
          msg = '请求超时(408)';
          break;
        case 500:
          msg = '服务器错误(500)';
          break;
        case 501:
          msg = '服务未实现(501)';
          break;
        case 502:
          msg = '网络错误(502)';
          break;
        case 503:
          msg = '服务不可用(503)';
          break;
        case 504:
          msg = '网络超时(504)';
          break;
        case 505:
          msg = 'HTTP版本不受支持(505)';
          break;
        default:
          msg = `连接出错(${status})!`;
      }
    }
    
    ElMessage.error(msg);
    return Promise.reject(error);
  }
);
 
export default service;