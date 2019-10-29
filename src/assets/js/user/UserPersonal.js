import globalFunctions from '@/config/global_functions'
import globalRules from '@/config/global_rules'

import userApi from '@/api/user'

import javaPersonal from '@/assets/images/javaPersonal.png'

let clock;

export default {
  name:'personal',
  data() {
    return {
      isChangePhone:false,
      isChangePw:false,
      //个人信息
      userForm:{
        avatar:'',
        role_name:'',
        username:'',
        phone:'',
      },
      dialogFormVisible: false,
      dialogSet:false,
      saveUnit:'',
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
      dialogFormVisibleTel:false,
      telForm:{
        phone:'',
        code:''
      },
      getClickName:'获取验证码',
      waitTime:60,
      canClick: true,
      userPhone:'',
    }
  },
  created:function(){
    this.$data.userPhone = sessionStorage.getItem('userPhone')
    this.getUserInfo();
  },
  methods: {
    getUserInfo(){
      let list = {
        phone:this.$data.userPhone
      }
      let qs = require('querystring')
      userApi.getUserInfo(qs.stringify(list)).then((res) => {
        if(res.data.code === 200){

          if(res.data.data.avatar === '' || res.data.data.avatar === null || res.data.data.avatar === undefined){
            this.$data.userForm.avatar = javaPersonal;
          }else{
            this.$data.userForm.avatar = res.data.data.avatar;
          }
          //角色id 0超级管理员 -1店长-2导购-3收银
          if(res.data.data.employeeRoleId === '0' || res.data.data.employeeRoleId === 0){
            this.$data.userForm.role_name = '超级管理员';
          }else if(res.data.data.employeeRoleId === '1' || res.data.data.employeeRoleId === 1){
            this.$data.userForm.role_name = '店长';
          }else if(res.data.data.employeeRoleId === '2' || res.data.data.employeeRoleId === 2){
            this.$data.userForm.role_name = '导购';
          }else if(res.data.data.employeeRoleId === '3' || res.data.data.employeeRoleId === 4){
            this.$data.userForm.role_name = '收银';
          }
          this.$data.userForm.username = res.data.data.name;
          this.$data.userForm.phone = res.data.data.telephone;
        }else{
          this.$message.error(res.data.message);
        }
      })
    },
    fnChangePWD(){
      this.$data.dialogFormVisible = true;
    },
    cancel(){
      this.$data.dialogFormVisible = false;
      this.$data.ruleForm.oldPwd = '';
      this.$data.ruleForm.newPwd = '';
      this.$data.ruleForm.reNewPwd = '';
      setTimeout(() => {
        this.$refs.ruleForm.resetFields();
      })
    },
    dialogClose(){
      this.$data.dialogFormVisible = false;
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
              this.$data.dialogFormVisible = false;
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
