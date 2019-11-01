import globalFunctions from '@/config/global_functions'
import globalRules from '@/config/global_rules'

import userApi from '@/api/user'

import javaPersonal from '@/assets/images/javaPersonal.png'

let clock;

export default {
  name:'personal',
  data() {
    return {
      boxHeight:(document.documentElement.clientHeight - 230) + 'px',

      ruleForm: {
        oldPwd:'',
        newPwd:'',
        reNowPwd:''
      },
      rules: {
        phone:globalRules.rules.phone(),
        code:globalRules.rules.code(),
        oldPwd:globalRules.rules.password() ,
        newPwd:globalRules.rules.password() ,
        reNewPwd: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value !== this.$data.ruleForm.newPwd) {
                callback(new Error('两次输入密码不一致!'));
              } else {
                callback();
              }
            },
            trigger: 'blur'
          }
        ]
      },
     
    }
  },
  created:function(){
    this.$data.userPhone = sessionStorage.getItem('userPhone')

  },
  methods: {
    
    cancel(){

      this.$data.ruleForm.oldPwd = '';
      this.$data.ruleForm.newPwd = '';
      this.$data.ruleForm.reNewPwd = '';
      setTimeout(() => {
        this.$refs.ruleForm.resetFields();
      })
    },
    dialogClose(){

      this.$data.ruleForm.oldPwd = '';
      this.$data.ruleForm.newPwd = '';
      this.$data.ruleForm.reNewPwd = '';
      setTimeout(() => {
        this.$refs.ruleForm.resetFields();
      })
    },

    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let list = {
            phone:this.$data.userPhone,
            password: this.$data.ruleForm.oldPwd,
            newPassword:this.$data.ruleForm.newPwd,
            repassword:this.$data.ruleForm.reNewPwd
          }
          let qs = require('querystring')
          userApi.updatePassword(qs.stringify(list)).then((res) => {
            if(res.data.code === 200){
              // alert('修改成功')
              this.$message.success('修改成功');
              this.$data.ruleForm = {};
              
              setTimeout(() =>{
                this.$refs.ruleForm.resetFields();
              })

            }else{
              this.$message.error(res.data.message);
            }
          })
        }
      });
    },


   
  }
}
