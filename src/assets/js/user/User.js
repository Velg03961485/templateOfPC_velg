import userApi from '@/api/user'
import roleApi from '@/api/role'
import storeAccountApi from '@/api/store_account'

import globalFunctions from '@/config/global_functions'
import globalRules from '@/config/global_rules'

export default {
	name: 'account-set',
	data() {
		return {
			tableData: [],
			allRoles: [],
			organizes:[],
			pagination: {
				currentPage: 1,
				totalCount: 0,
			},
			requestParameters: {
				page: 1,
				page_size: 20,
				username: '',
				merchant_role_id: '',
				phone: '',
			},
			defaultAttr:{
				label:'name',
				value:'id',
				children:'children',
			},
			dialogTitle: "",
			userDialogFormVisible: false,
			ruleOrganize:[],
			editOrganize:[],
			ruleForm: {
				username: '',
				truename: '',
				phone: '',
				role_id: '',
				password: '',
				org_id:'',
				repassword:'',
			},
			rules: {
				username: globalRules.rules.username(),
				password: globalRules.rules.password(),
				truename: globalRules.rules.truename(),
				phone: globalRules.rules.phone(),
				repassword:[
					{ required: true, message: '请再次输入密码', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							if (value !== this.$data.ruleForm.password) {
								callback(new Error('两次输入密码不一致!'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}

				],
				// ruleOrganize:[{ required: true, message: '请选择门店架构', trigger: 'blur' },],
				role_id:[{ required: true, message: '请选择岗位', trigger: 'blur' }]
			},
			rulesdd: {
				username: globalRules.rules.username(),
				truename: globalRules.rules.truename(),
				phone: globalRules.rules.phone(),
				role_id:[{ required: true, message: '请选择岗位', trigger: 'blur' }],
				password: globalRules.rules.password(),
				repassword:[
					{ required: true, message: '请再次输入密码', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							if (value !== this.$data.ruleForm.password) {
								callback(new Error('两次输入密码不一致!'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}

				],
				org_id:[{ required: true, message: '请选择门店架构', trigger: 'blur' }],
			},
			userEditVisible: false,
			editForm: {
				id: '',
				role_id: '',
				username: '',
				phone: '',
				truename: '',
				status: '',
				password: '',
				org_id:''
			},
			changePwdFormVisible:false,
			changePwdFormData:{
				id:'',
				password:'',
				repassword:'',
			},
			changePwdRules:{
				password:globalRules.rules.password(),
				repassword:[
					{ required: true, message: '请再次输入密码', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							if (value !== this.$data.changePwdFormData.password) {
								callback(new Error('两次输入密码不一致!'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}

				]
			},
			currentNames:'',
			currentIds:'',
			dialogDetele:false,
		}
	},
	watch: {
		userDialogFormVisible: function() {
			setTimeout(() => {
				this.$refs.ruleForm.clearValidate();
			}, 0)
		},
		userEditVisible: function() {
			setTimeout(() => {
				this.$refs.editForm.clearValidate();
			}, 0)
		}

	},
	created: function() {
		this.lists();
		this.getRoles();
		this.getOrganizes();
	},
	methods: {
		//列表
		lists() {
			let qs = require('querystring')
			userApi.lists(qs.stringify(this.$data.requestParameters)).then((res) => {
				if(res.data.errno === 0) {
					if(res.data.data.list.length !== 0) {
						this.$data.tableData = res.data.data.list;
						this.$data.pagination.currentPage = res.data.data.pagination.currentPage;
						this.$data.pagination.totalCount = res.data.data.pagination.totalCount;
					} else {
						this.$data.tableData = []
					}
				} else if(res.data.errno == 1000002) {
					this.$message.error(res.data.msg);
				} else {
					this.$message.error(res.data.msg);
				}
			})
		},
		
		//获取组织架构
		getOrganizes(){
			userApi.organizeTree().then((res) => {
				if(res.data.errno == 0) {
					this.$data.organizes = res.data.data
				} else {
					this.$message(res.data.msg)
				}
			})
	    },
	    
	    getOrgId(val){
			if(val.length > 0){
				this.$data.ruleForm.org_id = val[val.length - 1];
			}
		},
		
		editGetOrgId(val){
			this.$data.editForm.org_id = val[val.length - 1];
		},

		//清除新增的弹窗数据
		fuResetRuleForm() {
			this.$data.ruleOrganize = [];
			this.$data.ruleForm = {
				username: '',
				truename: '',
				phone: '',
				role_id: '',
				password: '',
				org_id:''
			};
		},

		//清除编辑的弹框数据
		editClear() {
			this.$data.editForm.id = '';
			this.$data.editForm.role_id = '';
			this.$data.editForm.username = '';
			this.$data.editForm.phone = '';
			this.$data.editForm.truename = '';
			this.$data.editForm.status = '';
			this.$data.editForm.password = '';
		},

		//获得岗位列表
		getRoles() {
			roleApi.lists_results().then((res) => {
				if(res.data.errno === 0) {
					this.$data.allRoles = res.data.data;
				}
			})
		},

		//点击分页发送数据
		handleCurrentChange(currentPage) {
			this.$data.requestParameters.page = currentPage;
			this.lists();
		},

		//删除该数据
		fnRemove(row) {
			this.$data.dialogDetele = true;
			this.$data.currentIds= row.id;
			this.$data.currentNames = row.username
			// this.$confirm('确认删除该角色：' + row.username + ' ？', '删除提示', {
			// 	confirmButtonText: '确定',
			// 	fnCancelButtonText: '取消',
			// 	type: 'warning'
			// }).then(() => {
			// 	let list = {
			// 		'id': row.id
			// 	}
			// 	let qs = require('querystring')
			// 	userApi.dele(qs.stringify(list)).then((res) => {
			// 		if(res.data.errno === 0) {
			// 			this.$message({
			// 				type: 'success',
			// 				message: '操作成功'
			// 			});
			// 			this.lists();
			// 		} else {
			// 			this.$message.error(res.data.msg);
			// 		}
			//
			// 	})
			// }).catch(() => {});
		},
		sureDetele(){
			let list = {
				'id': this.$data.currentIds
			}
			let qs = require('querystring')
			userApi.dele(qs.stringify(list)).then((res) => {
				if(res.data.errno === 0) {
					this.$data.dialogDetele = false;
					this.$message({
						type: 'success',
						message: '操作成功'
					});
					this.lists();
				} else {
					this.$message.error(res.data.msg);
				}

			})

		},
		handleCloseDe(){
			this.$data.dialogDetele = false;
		},
		//新增
		fnAdds() {
			this.fuResetRuleForm();
			this.$data.userDialogFormVisible = true;
		},

		fnEdit(row) {
			this.$data.editForm.id = row.id;
			this.$data.editForm.role_id = row.storeRole.id;
			this.$data.editForm.username = row.username;
			this.$data.editForm.phone = row.phone;
			this.$data.editForm.truename = row.truename;
			this.$data.editForm.status = row.status;
			this.$data.editForm.password = '';			
			
			let ogArr = []
			if(row.organizes.id != ""){
				row.organizes.id.split(',').forEach(function(val){
				  ogArr.push(parseInt(val))
				});
			};
			this.$data.editOrganize = ogArr;
			this.$data.editForm.org_id = ogArr.length > 0 ? ogArr[ogArr.length - 1] : "";
			this.$data.userEditVisible = true;
		},

		onSubmitSearch() {
			this.lists();
		},

		//新增的提交
		addSubmitForm() {
			console.log(this.$data.ruleForm)
			let qs = require('querystring');
			this.$refs.ruleForm.validate((valid) => {
				if(valid) {
					userApi.adds(qs.stringify(this.$data.ruleForm)).then((res) => {
						if(res.data.errno === 0) {
							this.$message({
								message: '操作成功',
								type: 'success',
								duration: 1500
							});
							this.lists();
							this.fuResetRuleForm();
							this.$data.userDialogFormVisible = false;
						} else {
							this.$message.error(res.data.msg);

						}
					});
				} else {
					return false;
				}
			})

		},

		//编辑的提交
		submitForm() {
			let qs = require('querystring');
			this.$refs.editForm.validate((valid) => {
				if(valid) {
					userApi.edit(qs.stringify(this.$data.editForm)).then((res) => {
						if(res.data.errno === 0) {
							this.$message({
								message: '操作成功',
								type: 'success',
								duration: 1500
							});
							this.lists();
							this.$data.userEditVisible = false;
						} else {
							this.$message.error(res.data.msg);
						}
					})
				}else{
					return false;
				}
			})

		},

		fnCancel() {
			this.$data.userDialogFormVisible = false;
		},
		editDialogClose() {
			this.editClear();
			this.$data.userEditVisible = false;
		},
		fnEditCancel() {
			this.$data.userEditVisible = false;
		},

		//重置搜索
		resetSearch() {
			this.$data.requestParameters.username = '';
			this.$data.requestParameters.merchant_role_id = '';
			this.$data.requestParameters.phone = '';
		},
		//修改密码
		editPasswordSubmit(formName){
			this.$refs[formName].validate((valid) => {
				if (valid) {
					let qs = require('querystring')
					storeAccountApi.password_edit(qs.stringify(this.$data.changePwdFormData)).then((res) => {
						if(res.data.errno === 0){
							this.$message({
								type: 'success',
								message: '操作成功'
							});
							this.lists();
							this.$data.changePwdFormData = {
								id:'',
								password:'',
								repassword:'',
							}
							this.$data.changePwdFormVisible = false;

						}else{
							this.$message.error(res.data.msg);
						}

					})

				}
			});

		},
		//取消修改密码
		editPasswordCancel(){
			this.$data.changePwdFormVisible = false;
			this.$data.changePwdFormData = {
				id:'',
				password:'',
				repassword:'',
			}
		},
		updatePw(row){
			this.$data.changePwdFormVisible = true;
			this.$data.changePwdFormData = {
				id:row.id,
				password:'',
				repassword:'',
			}
		},
		changeStatus(status,id){
			console.log(id,status)
			let list = {
				'id': id,
				'status':status
			}
			let qs = require('querystring')
			userApi.changeStatusS(qs.stringify(list)).then((res) => {
				if(res.data.errno === 0){
					globalFunctions.functions.message(this,'success');
					this.lists();
				}else{
					this.$message.error(res.data.msg);
				}
			})
		}
		//
	}
}