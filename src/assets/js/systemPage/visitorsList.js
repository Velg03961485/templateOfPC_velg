


export default {
  name: "visitorsList",
  data(){
    return{
      pickerOptionsSet: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e6
          // return time.getTime() < Date.now() - 8.64e7;
          // return time.getTime() ;
        }
      },
      //查询
      search:{
        createBeginTime:'',
        createEndTime:'',
        registrationBeginTime:'',
        registrationEndTime:'',
        userType:1,
      },
      tableData:[
        {name:'XX',nickname:'nickname',sex:0,birth:'2015-12-12',age:12,telephone:'18666566656',registrationTime:'12:23'},
        {name:'XX',nickname:'nickname',sex:0,birth:'2015-12-12',age:12,telephone:'18666566656',registrationTime:'12:23'},
        {name:'XX',nickname:'nickname',sex:0,birth:'2015-12-12',age:12,telephone:'18666566656',registrationTime:'12:23'},
        {name:'XX',nickname:'nickname',sex:0,birth:'2015-12-12',age:12,telephone:'18666566656',registrationTime:'12:23'},
      ],
      //顾客类型数据
      customerTypeData:[
        {id:1,name:'注册顾客'},
        {id:2,name:'游客'}
      ],

      //分页
      requestParameters: {
        page: 1,
        page_size:15,
      },
      pagination:{
        currentPage:1,
        totalCount:0,
      },

    }
  },
  created(){

  },
  methods:{
    timeChoseBtn_one(){

    },
    timeChoseBtn_tow(){

    },
    getStoreListByQuery(){

    },
    exportListBtn(){

    },
    indexMethod(){

    },
    handleCurrentChange(){

    },
    handleSelectionChange(){

    },
  },
}
