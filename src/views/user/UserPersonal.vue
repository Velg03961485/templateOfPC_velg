<template>
	<div class="personal-page">
		<div class="top-box">
			<div class="imgPic">
				<img :src="userForm.avatar" alt="" style="width: 120px;height: 120px;border-radius: 50%;">
			</div>
			<h5>{{userForm.role_name}}</h5>
		</div>


		<el-form ref="userForm" :model="userForm" label-width="120px" enabled size="small" style="width: 405px;">
			<el-form-item label="姓名：">
				{{userForm.username}}
			</el-form-item>
			<el-form-item label="手机：">
				<el-input v-show="isChangePhone"  maxlength="11" class="phoneInput" type="phone" v-model.number="userForm.phone" style="width: 180px;margin-right: 30px;"></el-input>
				<span v-show="!isChangePhone" style="width: 180px;margin-right: 30px;display: inline-block">{{userForm.phone}}</span>
			</el-form-item>
			<el-form-item label="密码：">
				<span  style="width: 180px;margin-right: 30px;display: inline-block">******</span>
				<el-button type="primary" @click="fnChangePWD" size="medium">修改</el-button>
			</el-form-item>


		</el-form>

		

		<!-- 修改密码 -->
		<el-dialog center title="修改密码" :visible.sync="dialogFormVisible" :before-close="dialogClose" style="min-width:400px;" width="400px">
			<el-form size="mini" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="旧密码" prop="oldPwd">
					<el-input type="password" placeholder="请输入密码" v-model="ruleForm.oldPwd"></el-input>
				</el-form-item>
				<el-form-item label="新密码" prop="newPwd">
					<el-input type="password" placeholder="请输入密码" v-model="ruleForm.newPwd"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="reNewPwd">
					<el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.reNewPwd"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button size="medium" @click="submitForm('ruleForm')" type="primary">确 定</el-button>
				<el-button size="medium" @click="cancel" class="cancelBtn marginBtn">取 消</el-button>
			</div>
		</el-dialog>

	
	</div>
</template>
<script src="@/assets/js/user/UserPersonal.js"></script>
<style lang="scss" scoped>
	.personal-page {
		margin: 80px auto 0;
		padding: 0 40px 40px;
		/*width: 500px;*/
		/*border: 1px solid #d2d2d2;*/
		.top-box {
			position: relative;
			height: 206px;
			text-align: center;
			margin-bottom: 70px;
			.editBtn {
				position: absolute;
				top: 0;
				right: 0;
			}
			h3 {
				height: 14px;
				font-family: MicrosoftYaHei;
				font-size: 16px;
				letter-spacing: 1.2px;
				color: #2a2a2a;
				margin-bottom: 13px;
			}
			h5{
				height: 14px;
				font-family: MicrosoftYaHei;
				font-size: 14px;
				font-weight: normal;
				font-stretch: normal;
				letter-spacing: 1.1px;
				color: #999999;
			}
		}
		.disabled {
			background-color: #ddd;
			border-color: #ddd;
			color: #57a3f3;
			cursor: not-allowed; // 鼠标变化
		}
	}
	.main-box .content-wrap{
		padding: 0;
	}
	.imgPic{
		width: 120px;
		height: 120px;
		margin-bottom: 21px;
	}
	.el-form-item__content{
		text-align: left;
	}
	.el-input__inner[type="phone"]{
		border: 0;
	}
	.phoneInput>.el-input__inner{
		border: 0;
	}
	.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
		margin-bottom: 25px;
	}
</style>
