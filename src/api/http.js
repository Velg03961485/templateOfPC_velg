import axios from 'axios'
import router from '../router/index'
import qs from 'qs'
axios.interceptors.request.use(function (config) {
  let userPhone = window.sessionStorage.getItem('userPhone')

    if (userPhone && userPhone!==null && userPhone!=='') {
            if(config.method=='post'){
                let data = qs.parse(config.data)
                config.data = qs.stringify({

                    ...data
                });
            }else if(config.method=='get'){
                config.param = {

                    ...config.params
                };
            }
        }
    return config;
  }, function (err) {
    return Promise.reject(err);
  });

axios.interceptors.response.use(function (res) {
    // if (res.data.errno == 1000000 || res.data.msg=='access-token不能为空' || res.data.msg=='用户不存在') {
    //         localStorage.setItem('knock_knock', '');
    //         localStorage.setItem('username', '');

    //            // window.location.href = '/';
    //   router.replace({
    //       path: '/login',
    //       query: {redirect: router.currentRoute.fullPath}
    //   })
    //     }
    return res;
  }, function (err) {
    if(err.data==undefined || err.data==''){
        return;
    }
    //  if (err.data.errno == 1000000 || err.data.msg=='access-token不能为空' || res.data.msg=='用户不存在') {
    //         localStorage.setItem('knock_knock', '');
    //         localStorage.setItem('username', '');
   
    //            // window.location.href = '/';
    //   router.replace({
    //       path: '/login',
    //       query: {redirect: router.currentRoute.fullPath}
    //   })
    // }
    return Promise.reject(err);
  });

