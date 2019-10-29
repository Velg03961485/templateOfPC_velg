<template>
    <div class="home" >
      <div class="bg" id="particles-js">


        <div class="table" >

          <div class="container" >
            <!--顶部商标-->
            <div class="topBussiness">
              <img src="../../assets/images/LOGO_dd.png" alt="" class="topBussiness_logoImg">
              <img src="../../assets/images/dd_name.png" alt="" class="topBussiness_ddImg">
              <div class="topBussiness_text">{{topText}}</div>
            </div>


            <!--默认登录-->
            <div class="main">
              <user-login-form></user-login-form>
            </div>


          </div>
        </div>
      </div>
    </div>
</template>

<script src="@/assets/js/user/UserLogin.js"></script>

<style scoped>
.home {
  color: black;
  width: 100%;
  height:100%;
  margin-left: 0;
  /*background-color: #002f44;*/
  background-image: url("../../assets/images/bg2.png");
  background-size: cover;
  overflow: hidden;
}
.home .table {

  position: absolute;
  display: table;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
.home .bg{
  height: 100%;
  z-index: 0;
}

.home .container {
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  margin-left: 0;
  z-index: 9999;
  display: table-cell;
  /*vertical-align: middle;*/
}

.home .footer {
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 30px;
}

.home .container .language{
  text-align: center;
}

.home .main {
  /*border:1px solid salmon;*/
  width: 528px;
  height: 354px;
  /*border-radius: 4px;*/
  /*background-color: rgba(255, 255, 255, 0.75);*/
  margin-top:110px;
  /*margin-bottom: 20px;*/
  margin-right: 73px;
}

.home .tip {
  height: 80px;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  width: 300px;
}

.home .tip a {
  display: block;
  height: 20px;
  position: relative;
}

.home .language .current {
  width: 120px;
  height: 14px;
  opacity: 0.5;
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 8px;
}

.home .language .choose {
  width: 56px;
  height: 19px;
  font-size: 16px;
  color: #ffffff;
}

  /*第一次登录 样式*/
.home .mainFirst{
  width: 370px;
  height: 410px;
  /*border:1px solid seagreen;*/
  margin-top: 89px;
  margin-right: 100px;
}




  /*顶部商标*/
  .topBussiness{
    width: 100%;
    height: 76px;
    /*border:1px solid saddlebrown;*/
    background-color: rgba(255, 255, 255, 0.09);
    display: flex;
    flex-direction: row;
  }
  .topBussiness_logoImg{
    width: 29px;
    height: 31px;
    margin-top: 23px;
    margin-left: 35px;
    margin-right: 0;
  }
  .topBussiness_ddImg{
    width: 54px;
    height: 25px;
    margin-top: 26px;
    margin-left: 10px;
  }
  .topBussiness_text{
    font-family: MicrosoftYaHei;
    font-size: 16px;
    line-height: 76px;
    letter-spacing: 0.4px;
    color: #ffffff;
    margin-right: 107px;
  }
</style>
