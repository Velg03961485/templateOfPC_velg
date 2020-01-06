import MenuLeft from '@/views/menu/MenuLeft'



export default {

  name: 'main-box',

  components: {
    MenuLeft
  },

  data () {
    return {
        userName:'xxxxx',
        horizontalIndex: '0',
        isCollapse: false,
        leftMenu: {
            leftMenu1:true,
            leftMenu2:false,
            leftMenu3:false,
            leftMenu4:false
        },
        userImg:'',
      topMenuData:[
        {name:'首页',id:1},
        {name:'企业',id:2},
        {name:'订单',id:3},
        {name:'服务',id:4},
        {name:'创客',id:5},
        {name:'任务',id:6},
        {name:'运营',id:7},
        {name:'内容',id:8},
        {name:'统计',id:9},
        {name:'财务',id:10},
        {name:'设置',id:11},
        {name:'权限',id:12},
      ],
    }

  },

  created: function(){
    this.$data.userName = sessionStorage.getItem('userPhone')
      this.getUserInfo()
  },

  methods: {

      //获取个人信息的头像
      getUserInfo(){
        // console.log(this.$data.userName)
        // let list = {
        //   phone:this.$data.userName
        // }
        // let qs = require('querystring')
        //   userApi.getUserInfo(qs.stringify(list)).then((res) => {
        //       if(res.data.code === 200){
        //         if(res.data.data.avatar === '' || res.data.data.avatar === null || res.data.data.avatar === undefined){
        //           this.$data.userImg = bannerHead;
        //         }else{
        //           this.$data.userImg = res.data.data.avatar;
        //         }
        //       }else{
        //           this.$message.error(res.data.message);
        //       }
        //   })
      },
    handleSelect(key, keyPath) {
        console.log(key)
        // var nowKey = "leftMenu"+key;
        // for(var i in this.$data.leftMenu){
        //     var nowI = i;
        //     this.$data.leftMenu[nowI] = false;
        //     if(nowKey == nowI){
        //         this.$data.leftMenu[nowI] = true;
        //     }
        // }
    /****
     * 如果是静态菜单，注入不同的模块，如果是动态菜单，点击一级菜单就请求一次数据 获取二级菜单
     * ****/



    },
    //退等操作
    logout(){

      window.location.href = '/';
      sessionStorage.setItem('userPhone', '');
    },

    handleOpen(key, keyPath) {
    },

    handleClose(key, keyPath) {
    },



    user_personal(){
        this.$router.push('/UserPersonal')
    },

    created_notice(){
      this.$router.push('/Notice')
    },
    inbox(){
      this.$router.push('/Inbox')
    },
    outbox(){
      this.$router.push('/Outbox')
    },
    drafts(){
      this.$router.push('/Drafts')
    },
    goDataView(){
    	this.$router.push('/DataView')
    }

  }

}
