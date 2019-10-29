import MenuLeft from '@/views/menu/MenuLeft'

import userApi from '@/api/user.js'

import bannerHead from '@/assets/images/bannerHead.png'

export default {

  name: 'main-box',

  components: {
    MenuLeft
  },

  data () {
    return {
        userName:'xxxxx',
        horizontalIndex: '1',
        isCollapse: false,
        leftMenu: {
            leftMenu1:true,
            leftMenu2:false,
            leftMenu3:false,
            leftMenu4:false
        },
        userImg:'',
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
        var nowKey = "leftMenu"+key;
        for(var i in this.$data.leftMenu){
            var nowI = i;
            this.$data.leftMenu[nowI] = false;
            if(nowKey == nowI){
                this.$data.leftMenu[nowI] = true;
            }
        }

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
