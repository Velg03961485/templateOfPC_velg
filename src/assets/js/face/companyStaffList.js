
import globalRules from '@/config/global_rules'
let upload_token = localStorage.getItem('knock_knock');
export default {
    name: "visitorsList",
    components: {

    },
    data(){
        return {
            //公司员工列表
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
            //新增
            dialogAdd:false,
            addForm:{
                name:'',
                url:'',
                describe:'您好，欢迎光临！'
            },
            uploadToken: {
                access_token: upload_token
            },
            describeNum:8,
            insertRules:{
                name: globalRules.rules.customername(),
                url: [{ required: true, message: '请上传头像', trigger: 'change' }],
            },
            editfileList:[],
            title:'',
            actionInsert:true,//true为新增 false为修改
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
            this.$data.addForm ={
                name:'',
                url:'',
                describe:'您好，欢迎光临！'
            };
            console.log(this.$data.remindsForm)
        },
        /**
         * 点击事件：新增
         */
        addInfo(){
            this.$data.title = '新增';
            this.$data.actionInsert = true;
            this.$data.dialogAdd = true;
        },
        /**
         * 提交新增表单
         */
        sureAdd(formName){
            this.$data.dialogAdd = false;
            if(this.$data.actionInsert){
                this.insertBusinessSure(formName);
            }else{
                this.updateBusinessSure(formName);
            }
        },
        /**
         * 新增表单
         */
        insertBusinessSure(){

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
            this.$data.title = '修改';
            this.$data.actionInsert = false;
            this.$data.dialogAdd = true;
        },
        imgUploadUrl() {
            return global.MERCHANT_UPLOAD
        },
        progressTipImg(event, file, fileList){
            // this.$data.isShowTip = true;
            // this.$data.progressTip = '上传中';
        },
        //图片上传
        getUploadImage(res, file) {
            console.log(res,file)
            this.$data.addForm.url = res.data.path;

        },
        exceedCallback(files, fileList) {
            this.$message({
                message: '最多只能上传一个！',
                type: 'warning'
            });
        },
        removeUploadImg(file, fileList, index) {
            this.$data.addForm.url = '';
            this.editfileList = [];
        },
        uploadImgError(err){
            console.log(err)
        },
        beforeAvatarUpload(file){
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('营业执照图片只能是 jpg/png/jpeg 格式!');
            }
            if (!isLt2M) {
                this.$message.error('营业执照图片大小不能超过2MB!');
            }
            return isJPG && isLt2M;
        },
        /**
         * 获得欢迎语长度
         */
        getDescribeOneNum(){
            this.$data.describeNum = this.$data.addForm.describe.length;
        },
        indexMethod(index) {
            return (this.$data.pagination.currentPage - 1) * 10 + index + 1
        },

    },
}