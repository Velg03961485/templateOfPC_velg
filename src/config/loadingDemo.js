//定义全局加载loading函数
//在每个页面列表或者是新增更改请求中，直接使用this调用（此项为必须项）
import { Message, Loading } from 'element-ui';
let loading  //定义loading变量
export default {
  install(Vue, options) {
    Vue.prototype.startLoading = function () {
      loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    };
    Vue.prototype.endLoading = function (){
      loading.close();
    };
  }
}

