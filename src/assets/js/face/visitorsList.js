<template>
    <div >
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="重要客户" name="first">
                <ImportantCustomersList></ImportantCustomersList>
            </el-tab-pane>
            <el-tab-pane label="预约客户" name="second">
                <div class="button_70_sure" style="float: right;margin-bottom: 20px">
                    <a href="javascript:;" class="button_70_sure_a">新增</a>
                </div>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="序号"
                            width="60">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="客户姓名"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="照片"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="职位" width="100">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="公司名称" >
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="欢迎语"  >
                    </el-table-column>
                    <el-table-column
                            prop="time"
                            label="新增时间"  width="160">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="来客提醒" width="90">
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.status_active === '0' ? false : true" active-color="#13ce66" inactive-color="#bfbfbf" @change="changeImportantBtn(scope.row)"></el-switch>
                        </template>

                    </el-table-column>
                    <el-table-column
                            label="操作" width="300" align="center">
                        <template slot-scope="scope">
                            <div class="btnStyleActivity">
                                <div class="btnStyleItemActivity  oneActivityS" @click="deleteBtn(scope.row)">删除</div>
                                <div class="btnStyleItemActivity  oneActivityS" @click="updateBtn(scope.row)" >修改</div>
                                <div class="btnStyleItemActivity  oneActivityS"  style="width: auto;" @click="reminderSettings(scope.row)">接待提醒设置</div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="公司员工" name="third">
                <div class="button_70_sure" style="float: right;margin-bottom: 20px">
                    <a href="javascript:;" class="button_70_sure_a">新增</a>
                </div>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="序号"
                            >
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="员工姓名"
                            >
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="照片"
                            >
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="职位" >
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="欢迎语"  >
                    </el-table-column>
                    <el-table-column
                            prop="time"
                            label="新增时间"  >
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="来客提醒" >
                        <template slot-scope="scope">
                            <el-switch v-model="value" active-color="#13ce66" inactive-color="#bfbfbf"></el-switch>
                        </template>

                    </el-table-column>
                    <el-table-column
                            label="操作" width="160" align="center">
                        <template slot-scope="scope">
                            <div class="btnStyleActivity">
                                <div class="btnStyleItemActivity  oneActivityS" >删除</div>
                                <div class="btnStyleItemActivity  oneActivityS" @click="updateActivityBtn(scope.row)" >修改</div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="陌生访客" name="fourth">
                <el-form :inline="true"  size="mini">
                    <el-form-item  label="">
                        <el-date-picker
                                type="date"
                                placeholder="选择开始日期" style="width: 150px;margin-right: 5px">
                        </el-date-picker>-
                        <el-date-picker
                                type="date"
                                placeholder="选择结束日期" style="width: 150px">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button plain size="mini" style="border: solid 1px #457adb;color: #457adb;">查询</el-button>
                    </el-form-item>
                </el-form>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="序号">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="陌生访客人脸ID"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="照片"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="time"
                            label="来访时间"  >
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="来客提醒" >
                        <template slot-scope="scope">
                            <el-switch v-model="value" active-color="#13ce66" inactive-color="#bfbfbf"></el-switch>
                        </template>

                    </el-table-column>
                    <el-table-column
                            label="操作" width="160" align="center">
                        <template slot-scope="scope">
                            <div class="btnStyleActivity">
                                <div class="btnStyleItemActivity  oneActivityS" >删除</div>
                                <div class="btnStyleItemActivity  oneActivityS" @click="updateActivityBtn(scope.row)" >修改</div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>

        <el-dialog
                title="删除"
                :visible.sync="dialogDetele"
                width="400px"
                :before-close="handleCloseDe">
            <span>删除后将无法恢复，是否确认删除该客户？</span>
            <span slot="footer" class="dialog-footer">
				<el-button size="medium" @click="sureDetele" type="primary">确 定</el-button>
				<el-button size="medium" @click="dialogDetele = false" class="cancelBtn marginBtn">取 消</el-button>
  			</span>
        </el-dialog>
    </div>
</template>

<script>
    import ImportantCustomersList from '@/view/face/importantCustomersList' //重要客户
    import BookingCustomersList from '@/view/face/bookingCustomersList' //预约客户
    import CompanyStaffList from '@/view/face/companyStaffList' //公司员工
    import StrangeVisitorList from '@/view/face/strangeVisitorList' //陌生访客
    export default {
        name: "visitorsList",
        components: {
            ImportantCustomersList,BookingCustomersList,CompanyStaffList,StrangeVisitorList
        },
        data(){
            return {
                activeName:'first',
                //重要客户列表
                importantCustomersList:[
                    {
                        name:'1111',
                        time:'2018/02/12 15:45:12',
                        status_active:0,
                    }
                ],

                dialogDetele:true,//删除弹窗
                currentDataArr:{},//删除 、修改当前的数据
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            /**
             * 修改来客提醒状态
             * */
            changeImportantBtn(item){
                this.$data.currentDataArr = item;
            },
            /**
             * 点击事件：删除
             * @param item
             */
            deleteBtn(item){
                this.$data.currentDataArr = item;
            },
            /**
             * 点击事件：修改
             * @param item
             */
            updateBtn(item){
                this.$data.currentDataArr = item;
            },
            /**
             * 点击事件：接待提醒设置
             * @param item
             */
            reminderSettings(item){
                this.$data.currentDataArr = item;
            },
            /**
             * 确认删除
             */
            sureDetele(){
                this.$data.dialogDetele = false;
            },
            /**
             * 取消删除
             */
            dialogDetele(){
                this.$data.dialogDetele = false;
            },

        },
    }
</script>

<style scoped>

</style>
