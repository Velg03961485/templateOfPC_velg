
export default {
    name: "visitorsType",
    data(){
        return {
            tableData:[
                {
                    name:'111',
                    status_active:0,
                    time:0,
                    str:'您好，欢迎光临！'
                }
            ],
            currentInfo:{},//当前数据
            //短时间展示的时候，展示时长
            options:[
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
            dialogEdit:false,//编辑框显隐
            editForm:{
                type:'公司员工',
                describe:'您好，欢迎光临！'
            },
            describeNum:8,
        }
    },
    methods:{
        changeImportantBtn(item){
            this.$data.currentInfo = item
        },
        /**
         * 点击事件：编辑
         * @param item
         */
        updateBtn(item){
            this.$data.currentDataArr = item;
            this.$data.dialogEdit = true;
        },
        /**
         * 获得欢迎语长度
         */
        getDescribeOneNum(){
            this.$data.describeNum = this.$data.addForm.describe.length;
        },
        /**
         * 提交新增表单
         */
        sureEdit(formName){
            this.$data.dialogEdit = false;
            this.updateBusinessSure(formName);
        },
        /**
         * 修改表单
         */
        updateBusinessSure(){

        },
        handleCloseDe(formName){
            this.$data.dialogEdit = false;
            this.$data.editForm ={
                type:'公司员工',
                describe:'您好，欢迎光临！'
            };
        },
    }
}