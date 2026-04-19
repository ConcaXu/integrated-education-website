import request from '@/utils/request';
 
interface Data {
  username: string;
  password: string;
}
 
// 登录接口示例
function login(data: Data) {
  return request({
    url: '/login',
    method: 'post',
    data
  });
}
 
// 获取用户信息示例
function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  });
}
 
export const userApi = {
  login,
  getUserInfo
};
 