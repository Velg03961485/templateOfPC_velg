


import apiUrl from './API.js'

const SERVER_IP_JAVA = apiUrl.JAVA_apiUrl;
const COMMON_JAVA = 'api8032/'



//上传图片的公众接口
global.JAVA_UPLOAD_IMAGES = `${SERVER_IP_JAVA}${COMMON_JAVA}admin/imgupload/uploadWXImage`;
//上传base64图片的接口
global.JAVA_UPLOAD_64IMAGES = `${SERVER_IP_JAVA}${COMMON_JAVA}admin/imgupload/upload64Image`;



//侧面菜单
global.JAVA_MENU_INFO = `${SERVER_IP_JAVA}${COMMON_JAVA}admin/menu/getactivemenu`;


//个人中心-获取个人信息
global.JAVA_GET_PERSONAL_INFO = `${SERVER_IP_JAVA}${COMMON_JAVA}admin/employeeAccount/getbyphone`;
//个人中心-修改个人密码
global.JAVA_CHANGE_PERSONAL_CODE = `${SERVER_IP_JAVA}${COMMON_JAVA}admin/employeeAccount/updatebymap`;
//个人中心-找回密码
global.JAVA_GOBACK_MSG = `${SERVER_IP_JAVA}${COMMON_JAVA}admin/setpasswordbyphone`;








