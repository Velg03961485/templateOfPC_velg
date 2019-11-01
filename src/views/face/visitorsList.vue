<template>
    <div >
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="重要客户" name="first">
                <ImportantCustomersList @deleteInfo="deleteData"></ImportantCustomersList>
            </el-tab-pane>
            <el-tab-pane label="预约客户" name="second">
                <BookingCustomersList  @deleteInfo="deleteData"></BookingCustomersList>
            </el-tab-pane>
            <el-tab-pane label="公司员工" name="third">
                <CompanyStaffList   @deleteInfo="deleteData"></CompanyStaffList>
            </el-tab-pane>
            <el-tab-pane label="陌生访客" name="fourth">
                <StrangeVisitorList @deleteInfo="deleteData"></StrangeVisitorList>
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
    import ImportantCustomersList from '@/views/face/importantCustomersList' //重要客户
    import BookingCustomersList from '@/views/face/bookingCustomersList' //预约客户
    import CompanyStaffList from '@/views/face/companyStaffList' //公司员工
    import StrangeVisitorList from '@/views/face/strangeVisitorList' //陌生访客
    export default {
        name: "visitorsList",
        components: {
            ImportantCustomersList,BookingCustomersList,CompanyStaffList,StrangeVisitorList
        },
        data(){
            return {
                activeName:'first',
                dialogDetele:false,
                currentId:''
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleCloseDe(){
                this.dialogDetele = !this.dialogDetele;
            },
            deleteData(item){
                this.$data.currentId = item.id;
                this.dialogDetele = true;
            },
            /**
             * 确认删除
             */
            sureDetele(){
                this.$data.dialogDetele = false;
            },
        },
    }
</script>

