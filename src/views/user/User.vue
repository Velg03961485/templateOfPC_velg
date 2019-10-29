<template>
	<div class="account-set-page">
		<div class="top-box">
			<button class="yy-button yy-btn-mini yy-btn-checked add-btn" @click="fnAdds()" >新增商户账号</button>
		</div>
		<div>
			<el-form :inline="true" :model="requestParameters" class="demo-form-inline" size="mini">
				<el-form-item label="帐号">
			    	<el-input v-model="requestParameters.username" placeholder="请输入账号"></el-input>
			  	</el-form-item>
			  	<el-form-item label="岗位">
				    <el-select v-model="requestParameters.merchant_role_id" placeholder="请选择">
				        <el-option v-for="(item,idx) in allRoles" :label="allRoles[idx].name" :value="allRoles[idx].id" :key="idx"></el-option>
				    </el-select>
				</el-form-item>
				<el-form-item label="手机">
				    <el-input v-model.trim="requestParameters.phone" placeholder="请输入手机号"  maxlength="11"></el-input>
				</el-form-item>
				<el-form-item>
				    <el-button plain size="mini" @click="onSubmitSearch"  style="border: 1px solid rgb(69, 122, 219);color: rgb(69, 122, 219);">查询</el-button>
				    <el-button plain size="mini" @click="resetSearch">重置</el-button>
				</el-form-item>
			</el-form>
		</div>

    <table class="yingyanTable">
      <thead>
      <tr>
        <th width="10%">序号</th>
        <th width="10%">账号</th>
        <th width="10%">姓名</th>
        <th width="10%">手机</th>
        <th width="15%">组织架构</th>
          <th width="10%">岗位</th>
        <th width="15%">创建时间</th>
          <th width="5%">状态</th>
        <th width="15%" style="text-align: center">操作</th>
      </tr>
      </thead>
      <tbody v-if="tableData.length > 0">
      <tr v-for="(item,index) in tableData" :key="index">
        <td>{{(pagination.currentPage - 1) * 20 + index + 1 }}</td>
        <td>{{item.username}}</td>
        <td>{{item.truename}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.organizes.name}}</td>
          <td>{{item.storeRole.name}}</td>
        <td>{{item.created_at | date(4)}}</td>
          <td>

              <el-switch v-model="item.status" :active-value="1" :inactive-value="0" active-color="#56cd95" @change="changeStatus($event,item.id)"></el-switch>

          </td>
        <td style="text-align: center">

            <span class="check_Btn clickBtn" @click="updatePw(item)">修改密码</span>
            <span class="check_Btn clickBtn" @click="fnEdit(item)"  style="margin-left: 26px">修改</span>
            <span class="delete_Btn clickBtn" @click="fnRemove(item)"  style="margin-left: 26px">删除</span>
          <!--<i @click="fnEdit(item)" class="newI color1 el-icon-yy-Group-" ></i>	-->
          <!--<i @click="fnRemove(item)" class="newI color2 el-icon-yy-shanchu" ></i>-->

        </td>
      </tr>
      </tbody>
			<tbody v-else><tr><td colspan="8" height="50px" align="center">暂无数据~</td></tr></tbody>
    </table>
	    <!-- 分页 -->
	   <div v-if="tableData.length > 0" class="paginationBox">
	    	<el-pagination
	            layout="prev, pager, next"
	            small
	            @current-change="handleCurrentChange"
	            :current-page="pagination.currentPage"
	            :page-size="requestParameters.page_size"
	            :total="pagination.totalCount">
	        </el-pagination>
	    </div>


		<!-- 添加 -->
	    <el-dialog center title="新增商户账号" :visible.sync="userDialogFormVisible" width="500px">
        <el-form :model="ruleForm" :rules="rulesdd" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item label="帐号名称" prop="username">
                <el-input v-model="ruleForm.username" style="width: 300px;"  placeholder="请输入帐号名称"></el-input>
            </el-form-item>
          <el-form-item label="门店架构" prop="ruleOrganize">
			<el-cascader :options="organizes"  :props='defaultAttr' v-model='ruleOrganize' @change="getOrgId" change-on-select  style="width: 300px;">
			</el-cascader>
		  </el-form-item>
          <el-form-item label="姓名" prop="truename">
            <el-input v-model="ruleForm.truename" style="width: 300px;"  placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="phone">
            <el-input v-model="ruleForm.phone" style="width: 300px;"  placeholder="请输入手机号"  maxlength="11"></el-input>
          </el-form-item>
            <el-form-item label="岗位" style="margin-bottom: 40px"  prop="role_id">
                <el-select v-model="ruleForm.role_id" placeholder="请选择" style="width: 300px;">
                    <el-option v-for="(item,idx) in allRoles" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" type="password" style="width: 300px;"  placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="repassword">
                <el-input v-model="ruleForm.repassword" type="password" style="width: 300px;"  placeholder="请输入确认密码"></el-input>
            </el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
                <el-button size="medium" @click="addSubmitForm" type="primary">确 定</el-button>
                <el-button size="medium" @click="fnCancel" class="cancelBtn marginBtn">取 消</el-button>
				<!--<el-button plain @click="fnCancel">取 消</el-button>-->
				<!--<el-button plain @click="addSubmitForm">确 定</el-button>-->
			</div>
		</el-dialog>
    <!--编辑-->
    <el-dialog center title="修改" :visible.sync="userEditVisible" :before-close="editDialogClose" width="600px">
    <el-form :model="editForm" :rules="rules" ref="editForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="帐号" prop="username">
            <el-input v-model="editForm.username"  placeholder="请输入帐号"></el-input>
        </el-form-item>
      <!--<el-form-item label="密码：" prop="password">-->
        <!--<el-input v-model="editForm.password" type="password"></el-input>-->
      <!--</el-form-item>-->
      <el-form-item label="姓名" prop="truename">
        <el-input v-model="editForm.truename"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="editForm.phone"></el-input>
      </el-form-item>
        <el-form-item label="岗位" prop="role_id">
            <el-select v-model="editForm.role_id" placeholder="请选择">
                <el-option v-for="(item,idx) in allRoles" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="组织架构">
            <el-cascader :options="organizes"  :props='defaultAttr' v-model='editOrganize' @change="editGetOrgId" change-on-select>
            </el-cascader>
        </el-form-item>
      <!--<el-form-item label="状态：" prop="status">-->
        <!--<template slot-scope="scope">-->
          <!--<el-switch-->
            <!--v-model="editForm.status"-->
            <!--:active-value="1"-->
            <!--:inactive-value="0">-->
          <!--</el-switch>-->
        <!--</template>-->
      <!--</el-form-item>-->
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button size="medium" @click="submitForm(editForm)" type="primary">确 定</el-button>
        <el-button size="medium" @click="fnEditCancel" class="cancelBtn marginBtn">取 消</el-button>
      <!--<el-button plain @click="fnEditCancel">取 消</el-button>-->
      <!--<el-button plain @click="submitForm(editForm)">确 定</el-button>-->
    </div>
    </el-dialog>

        <!-- 修改密码 -->
        <el-dialog center title="修改密码" :visible.sync="changePwdFormVisible" width="400px">
            <el-form :model="changePwdFormData" :rules="changePwdRules" ref="changePwdFormData" label-width="100px" class="demo-ruleForm">
                <el-form-item label="新密码：" prop="password">
                    <el-input type="password" v-model="changePwdFormData.password"  placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：" prop="repassword">
                    <el-input type="password" v-model="changePwdFormData.repassword" placeholder="请输入确认密码"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size="medium" @click="editPasswordSubmit('changePwdFormData')" type="primary">确 定</el-button>
                <el-button size="medium" @click="editPasswordCancel" class="cancelBtn marginBtn">取 消</el-button>
                <!--<el-button @click="editPasswordCancel">取 消</el-button>-->
                <!--<el-button @click="editPasswordSubmit('changePwdFormData')">确 定</el-button>-->
            </div>
        </el-dialog>

        <el-dialog
                title="删除"
                :visible.sync="dialogDetele"
                width="400px"
                :before-close="handleCloseDe">
            <span>确认删除该账号:{{currentNames}}?</span>
            <span slot="footer" class="dialog-footer">
				<el-button size="medium" @click="sureDetele" type="primary">确 定</el-button>
				<el-button size="medium" @click="dialogDetele = false" class="cancelBtn marginBtn">取 消</el-button>
  			</span>
        </el-dialog>

    </div>
</template>

<script src="@/assets/js/user/User.js"></script>
<style lang="scss" scoped src="@/assets/css/user/User.scss"></style>


