
import globalRules from '@/config/global_rules'
let upload_token = localStorage.getItem('knock_knock');
export default {
    name: "visitorsList",
    components: {

    },
    data(){
        return {
            //陌生访客列表
            companyStaffList:[
                {
                    name:'1111',
                    time:'2018/02/12 15:45:12',
                    status_active:0,
                }
            ],
            currentPage: 1,
            page_size:10,
            pagination:{
                currentPage:1,
                totalCount:1,
            },
            //修改
            dialogAdd:false,
            addForm:{
                type:3,
            },
            options:[
                {
                    value:0,
                    label:'重要客户',
                },
                {
                    value:1,
                    label:'预约客户',
                },
                {
                    value:2,
                    label:'公司员工',
                },
                {
                    value:3,
                    label:'陌生访客',
                },
            ],
            time1:'',
            time2:''
        }
    },
    watch: {
        'remindsForm.remindsStyle': function (val) { //单个数据验证
            console.log(val)
            if(val == 0){

            }
        }
    },
    methods: {
        handleCurrentChange(currentPage) {
            this.$data.currentPage = currentPage;
            // this.getBusinessList();
        },
        handleCloseDes(formName){
            this.$data.dialogAdd = false;
            console.log(this.$data.remindsForm)
        },
        /**
         * 提交修改表单
         */
        sureAdd(formName){
            this.updateBusinessSure(formName);
        },
        /**
         * 修改表单
         */
        updateBusinessSure(){

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
            this.$emit('deleteInfo',item)
        },
        /**
         * 点击事件：修改
         * @param item
         */
        updateBtn(item){
            this.$data.currentDataArr = item;
            this.$data.dialogAdd = true;
        },
        /**
         * 查询
         */
        selectList(){

        },
        indexMethod(index) {
            return (this.$data.pagination.currentPage - 1) * 10 + index + 1
        },
    },
}