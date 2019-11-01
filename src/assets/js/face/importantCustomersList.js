
import globalRules from '@/config/global_rules'
let upload_token = localStorage.getItem('knock_knock');
export default {
    name: "visitorsList",
    components: {

    },
    data(){
        return {
            //重要客户列表
            importantCustomersList:[
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
            },
            editfileList:[],
            title:'',
            actionInsert:true,//true为新增 false为修改
        //    接待设置
            dialogReminds:false,
            remindsForm:{
                remindsStyle:0,
                name:'',
                time:'',
                showTime:0,
            },
            //提醒方式
            options:[
                {
                    value:0,
                    label:'短时间展示'
                },
                {
                    value:1,
                    label:'时间段展示上传照片'
                },
                {
                    value:2,
                    label:'时间段展示默认图片'
                },
            ],
            //短时间展示的时候，展示时长
            timeOptions:[
                {
                    value:0,
                    label:'5s'
                },
                {
                    value:1,
                    label:'6s'
                },
                {
                    value:2,
                    label:'7s'
                },
                {
                    value:3,
                    label:'8s'
                },
                {
                    value:4,
                    label:'9s'
                },
                {
                    value:5,
                    label:'10s'
                },
                {
                    value:6,
                    label:'11s'
                },
                {
                    value:7,
                    label:'12s'
                },
                {
                    value:8,
                    label:'13s'
                },
                {
                    value:9,
                    label:'14s'
                },
                {
                    value:10,
                    label:'15s'
                },
            ],
            //默认图片列表
            defaultPictureList:[
                {
                    id:0,
                    img:'',
                    isSelect:false,
                },
                {
                    id:1,
                    img:'',
                    isSelect:false,
                },
                {
                    id:2,
                    img:'',
                    isSelect:false,
                },
                {
                    id:3,
                    img:'',
                    isSelect:false,
                },
            ],
            currentSelectedImg:{}
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
        selectImg(item){
            console.log(item);
            let arr = this.$data.defaultPictureList;
            let obj = this.$data.currentSelectedImg;
            if(obj&& (item.id == obj.id)){
                arr.forEach(function (v,i) {
                    v.isSelect = false;
                })
                obj = {};
            }else{
                arr.forEach(function (v,i) {
                    v.isSelect = false;
                    if(v.id == item.id){
                        obj = v;
                        v.isSelect = true;
                    }
                })
            };
            this.$data.currentSelectedImg = obj;
            this.$data.defaultPictureList = [];
            this.$data.defaultPictureList = arr;

        },
        handleCurrentChange(currentPage) {
            this.$data.currentPage = currentPage;
            // this.getBusinessList();
        },
        handleCloseDes(formName){
            this.$data.dialogAdd = false;
            this.$data.dialogReminds = false;
            this.$data.remindsForm = {
                remindsStyle:0,
                    name:'',
                    time:'',
                    showTime:0,
            };
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
        /**
         * 点击事件：接待提醒设置
         * @param item
         */
        reminderSettings(item){
            this.$data.currentDataArr = item;
            this.$data.dialogReminds = true;
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
        handleCloseReminds(){
            this.$data.dialogReminds = false;
        },
        indexMethod(index) {
            return (this.$data.pagination.currentPage - 1) * 10 + index + 1
        },

    },
}