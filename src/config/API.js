// //设置所有请求的域名前缀
// const apiUrl = 'https://dev-api.yy.ibetwo.com/';
//
// const JAVA_apiUrl = 'http://crm.ibetwo.com/';   //开发环境
// // const JAVA_apiUrl = 'http://pc-api.dongdian.vip/';    //发布环境
//
// /***图片显示 接口地址动态拼接 域名前缀***/
// const IMAGES_JAVA_URL = 'http://test-static.dongdian.vip/';
//
//
// export default{
//     apiUrl,
//   JAVA_apiUrl,
//   IMAGES_JAVA_URL
// }



//设置所有请求的域名前缀
let JAVA_apiUrl = '';
let routerMode = 'history';
let DEBUG = false;
let cancleHTTP = [];//取消请求头设置；
//PHP 调用
let PHP_apiUrl = '';
//测试\n" +
//     "http://enterprise-api.test.dongdian.vip/v1/wechat/enterprise-appcode\n" +
//     "正式\n" +
//     "http://enterprise-api.dongdian.vip/v1/wechat/enterprise-appcode

/***图片显示 接口地址动态拼接 域名前缀***/
const IMAGES_JAVA_URL = 'http://test-static.dongdian.vip/';

if (process.env.NODE_ENV == 'development') {
  JAVA_apiUrl = "http://crm.ibetwo.com/";
  PHP_apiUrl = "http://enterprise-api.test.dongdian.vip/";
  DEBUG = true;
}else if(process.env.NODE_ENV == 'production'){
  JAVA_apiUrl = "http://pc-api.dongdian.vip/";
  PHP_apiUrl = "http://enterprise-api.dongdian.vip/";
  DEBUG = true;
}else if(process.env.NODE_ENV == 'test'){
  JAVA_apiUrl = "http://crm.ibetwo.com/";
  PHP_apiUrl = "http://enterprise-api.test.dongdian.vip/";
  DEBUG = true;
}

export default{
  JAVA_apiUrl,
  routerMode,
  DEBUG,
  cancleHTTP,
  IMAGES_JAVA_URL,
  PHP_apiUrl
}
