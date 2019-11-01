import userApi from '@/api/user.js'
import globalRules from '@/config/global_rules'
import globalFunctions from '@/config/global_functions'
// import userApi from '@/api/user.js'

import apiUrl from '@/config/API.js'

const SERVER_IP_JAVA = apiUrl.JAVA_apiUrl;
const COMMON_JAVA = 'api8032/'



let clockBack;

let loginTime;
export default {
  name: 'login-form',
  data () {
    return {
      routeName:'',
      getClickName:'验证码',
      waitTime:60,
      canClick: true,
      status:1,
      loginInfo: {
        username: '',
        password: ''
      },
      rules: {
        username: globalRules.rules.phone(),
        password: globalRules.rules.password(),
      },

      //寻回密码
      passwordVisible:false,
      passwordForm:{
        phone:'',
        code:'',
        codeFirst:'',
        codeSecond:'',
      },
      rulesPwd: {
        phone: globalRules.rules.phone(),
        code: globalRules.rules.code(),
        codeFirst: globalRules.rules.password(),
        codeSecond: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value !== this.$data.passwordForm.codeFirst) {
                callback(new Error('两次输入密码不一致!'));
              } else {
                callback();
              }
            },
            trigger: 'blur'
          }
        ]
      },
    //  注册进行到哪一步骤
      administratorAccountInit:'',
      installStepInit:'',
      domain:'',
    }
  },
  created:function(){
    let getUrl = window.location.origin.split('//')[1];
    console.log(getUrl)
    if(getUrl === 'localhost:8091'){
      this.$data.domain  = window.location.origin.split('//')[1].split(':')[0];
    }else{
      this.$data.domain  = window.location.origin.split('//')[1].split('.')[0];
    }
    this.$data.administratorAccountInit = localStorage.getItem('administratorAccountInit');
    this.$data.installStepInit = localStorage.getItem('installStepInit');
    // this.getLoginCodeInfo();


     // this.interTimePost();
    // console.log(this.getUrlParam('code'))
    

  },
  mounted: function () {

  },
  methods: {



    show:function (ev) {
      if(ev.keyCode == 13){
        this.login();
      }
    },

    login() {


      this.$refs.loginForm.validate((valid) => {

        if (valid) {

          sessionStorage.setItem('userPhone', this.$data.loginInfo.username);
          this.$router.push({ path: '/defaultImage' });

        } else {
          return false
        }
      })
    },




    //截取
    getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },













  },
}
