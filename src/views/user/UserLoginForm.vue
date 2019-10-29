<template>
    <div class="login-form">


        <div class="login-form-box">




          <!--正常登录-->
          <div class="company_login">
            <div class="company_login_titleOne">账号登录</div>
            <div class="company_login_titleTow">THE USER LOGIN</div>

            <el-form :model="loginInfo" :rules="rules" ref="loginForm" label-width="0px" style="width: 201px;margin-top: 35px">

              <el-form-item prop="username">
                <div class="company_login_input">
                  <img src="../../assets/images/index-1.png" alt="" class="company_login_inputImg">
                  <el-input type="text" class="company_login_inputTe" maxlength="11" v-model="loginInfo.username" auto-complete="off" style="text-align: left"  placeholder="帐号" />
                </div>
              </el-form-item>
              <el-form-item prop="password">
                <div class="company_login_input">
                  <img src="../../assets/images/index-2.png" alt="" class="company_login_inputImg">
                  <el-input type="password" class="company_login_inputTe" v-model="loginInfo.password" auto-complete="off"  @keydown.enter.native="show($event)" placeholder="密码" style="text-align: left" />
                </div>
              </el-form-item>
<!--              <div class="company_loginBack" @click="forget">找回密码</div>-->
              <div class="login-btn-box">
                <div class="company_addUser" @click="login('firstLoginForm')">
                  <a class="company_addUser_a">登录</a>
                </div>
              </div>
            </el-form>
          </div>


        </div>






    </div>
</template>


<script src="@/assets/js/user/UserLoginForm.js"></script>
<style lang="scss" scoped>
  .login-form{

    text-align: center;
    font-size:16px;

    .title{
      margin-bottom:30px;
      line-height:36px;
      font-size:18px;
      font-weight:bold;
      color:#409EFF;
    }
    .disabled{
      background-color: #ddd;
      border-color: #ddd;
      color:#57a3f3;
      cursor: not-allowed; // 鼠标变化
    }
  }

  .login-form-box{
    /*border:1px solid red;*/
    /*width: 528px;*/
    width: 320px;
    height: 354px;
    background-image: url("../../assets/images/loginForm.png");
    background-size: 320px 354px;
    display: flex;
    flex-direction: row;
  }
  .company{
    width: 45%;
    /*border:1px solid seagreen;*/
    display: flex;
    flex-direction: column;

  }
  .company_title{
    height: 16px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    line-height: 16px;
    color: #ffffff;
    margin-top: 61px;
    text-align: center;
    margin-right: 57px;
  }
  .company_img{
    /*border:1px solid slateblue;*/
    /*width: 131px;*/
    /*height: 131px;*/
    /*margin: 0 auto;*/
    margin-top: -18px;
  }
  .company_text{
    height: 12px;
    font-family: SimSun;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 12px;
    letter-spacing: 2.4px;
    color: #ffffff;
    /*box-shadow: 0px 0px 2px 0px*/
    /*rgba(255, 255, 255, 0.2);*/
    text-align: center;
    margin-top: 14px;
  }



  .company_login{
    /*width: 55%;*/
    /*border:1px solid slateblue;*/
    display: flex;
    flex-direction: column;
  }
  .company_login_titleOne{
    height: 16px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0px;
    color: #ffffff;
    text-align: center;
    margin-top: 60px;
  }
  .company_login_titleTow{
    height: 9px;
    font-family: MicrosoftYaHei;
    font-size: 10px;
    line-height: 9px;
    letter-spacing: -0.5px;
    color: #8ac7ff;
    text-align: center;
    margin-top: 6px;
  }
  .company_login_input{
    display: flex;
    flex-direction: row;
    width: 201px;
    height: 29px;
    background-color: #ffffff;
    border-radius: 3.3px;
    float: left;
  }
  .company_login_inputImg{
    width: 13px;
    height: 16px;
    margin-left: 11px;
    margin-right: 8px;
    margin-top: 6px;
  }
  .company_login_inputTe{
    width: 160px;
    margin-left: 0;
  }
  .company_login_inputTe > .el-input__inner{
    height: 28px !important;
    border: none !important;
    padding-left: 0 !important;
  }
  .company_loginBack{
    width: 80px;
    height: 9px;
    font-family: SimSun;
    text-decoration: underline;
    font-size: 10px;
    line-height: 9px;
    color: #ffffff;
    margin-right: 0px;
    margin-top: -13px;
    text-align: right;
    margin-right: 2px;
    cursor: pointer;
  }

  .company_addUser{
    width: 201px;
    height: 31px;
    margin-top: 28px;
    float: left;
  }
  .company_addUser_a{
    display: inline-block;
    width: 201px;
    height: 31px;
    background-color: #718af5;
    border-radius: 3.3px;
    font-family: MicrosoftYaHei;
    font-size: 12px;
    line-height: 31px;
    letter-spacing: 2.4px;
    color: #ffffff;
    text-align: center;
    text-decoration: none;
  }
  .company_addUser_a:hover{
    background-color: #68a2f9;
    text-decoration: none;
  }

  .passwordForm_input{
    width: 187px;
  }
  .passwordForm_inputBox{
    width: 187px;
    display: flex;
    flex-direction: row;
  }
  .passwordForm_input_code{
    width: 124px;
    margin-left: 0;
    margin-right: 0;
  }
  .passwordForm_input_msg{
    border: solid 1px #457adb;
    width: 58px;
    height: 28px;
    background-color: #ffffff;
    border-radius: 3px;
    font-family: SimSun;
    font-size: 12px;
    line-height: 28px;
    color: #457adb;
    text-align: center;
    margin-left: 5px;
    cursor: pointer;
    margin-right: 0;
  }

</style>

<style>
  .company_login_inputTe > .el-input__inner{
    height: 26px !important;
    border: none !important;
    padding-left: 0 !important;
    font-size: 12px;
  }
  .impowerBox .qrcode {
    width: 131px;
    height:131px;
    margin: 0 auto;
    margin-top: 38px;
  }
  .impowerBox .title {display: none;}
  .impowerBox .info {width: 200px;}
  .status_icon {display:none  !important}
  .impowerBox .status {
    text-align: center;
    color: #ffffff;
  }
</style>
