<template>
	<div class="personal-page" :style="{height: boxHeight}">



    <div class="usrTitle">修改密码</div>

    <el-form size="mini" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width: 390px;margin-top: 48px">
      <el-form-item label="旧密码" prop="oldPwd">
        <el-input type="password" placeholder="请输入密码" v-model="ruleForm.oldPwd" class="inputStyleWidth"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPwd">
        <el-input type="password" placeholder="请输入密码" v-model="ruleForm.newPwd" class="inputStyleWidth"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="reNewPwd">
        <el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.reNewPwd" class="inputStyleWidth"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer" style="text-align: center;margin-top: 65px;display: flex">

      <div class="button_70_sure marginLeft"  @click="submitForm('ruleForm')">
        <a class="button_70_sure_a">确 定</a>
      </div>

      <div class="button_70_cancel marginRight" @click="cancel">
        <a class="button_70_cancel_a">取 消</a>
      </div>

    </div>



	
	</div>
</template>
<script src="@/assets/js/user/UserPersonal.js"></script>
<style lang="scss" scoped>
  .inputStyleWidth{
    width: 240px;
  }
  .usrTitle{
    height: 17px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2a2a2a;
    line-height: 17px;
    text-align: center;
    margin-top: 100px;
  }
  .marginLeft{
    margin-right: 30px;
  }
  .marginRight{
    margin-left: 30px;
  }
</style>
