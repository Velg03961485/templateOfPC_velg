import userApi from '@/api/user.js'

  //引入图标地址

import m_guke from '@/assets/images/menu/m_guke.png'
import m_huodong from '@/assets/images/menu/m_huodong.png'
import m_juese from '@/assets/images/menu/m_juese.png'
import m_mendian from '@/assets/images/menu/m_mendian.png'
import m_quyu from '@/assets/images/menu/m_quyu.png'
import m_xiaochengxu from '@/assets/images/menu/m_xiaochengxu.png'
import m_yuangong from '@/assets/images/menu/m_yuangong.png'
import m_youhuiquan from '@/assets/images/menu/m_youhuiquan.png'

  export default {
    name: 'word-item',
    props: {
      
    },
    data() {
      return {
        currentMenu: 'StoreTime',
        tableData: [],
        userPhone:'',
        isCollapse:false,
        m_guke:m_guke,
        m_huodong:m_huodong,
        m_juese:m_juese,
        m_mendian:m_mendian,
        m_quyu:m_quyu,
        m_xiaochengxu:m_xiaochengxu,
        m_yuangong:m_yuangong,
        m_youhuiquan:m_youhuiquan,
        iconUrlHead:'',
      }
    },
    watch:{
    	$route(to,from){
    		this.getUrl();
    	}
    },
    created() {
      let getUrl = window.location.origin.split('//')[1];
      console.log(getUrl)
      if(getUrl === 'localhost:8091'){
        this.$data.iconUrlHead = '/static/images/menu/';
      }else{
        this.$data.iconUrlHead = '/static/images/menu/';
      }
      this.$data.userPhone = sessionStorage.getItem('userPhone')
      this.getUrl();
      this.menu();
    },
    methods: {
      getUrl() {
       switch (this.$route.name){

         case "faceRecognition":
           this.$data.currentMenu = 'faceRecognition';
           break;
    			default:
    			  this.$data.currentMenu = this.$route.name;
    				break;
    		}
        this.$router.replace({
          name: this.$data.currentMenu
        })
      },
      handleSelect(index,indexPath){
          // console.log(index);
          // console.log(indexPath)
        
      	this.$router.push({
      		 name:index
      	})
      },
      menu() {

		  let _this = this;

        //传入静态菜单
        _this.$data.tableData = [
          {
            "id": 151,
            "name": "智能人脸识别",
            "parent_id": 0,
            "front_url": "",
            "front_icon": "common/navigation/menuTarget.png",
            "childList": [
              {
                "id": 152,
                "name": "默认图片",
                "parent_id": 151,
                "front_url": "defaultImage",
                "front_icon": null
              },
              {
                "id": 153,
                "name": "访客类型",
                "parent_id": 151,
                "front_url": "visitorsType",
                "front_icon": null
              },
              {
                "id": 154,
                "name": "访客列表",
                "parent_id": 151,
                "front_url": "visitorsList",
                "front_icon": null
              },
            ],
            "no_child": false,
            "front_icon_url": "m_huodong"
          },
          {
            "id": 120,
            "name": "战略数据呈现",
            "parent_id": 0,
            "front_url": "StrategicData",
            "front_icon": "common/navigation/menuStore.png",
            "childList": [],
            "no_child": true,
            "front_icon_url": "m_huodong"
          },
          {
            "id": 130,
            "name": "企业文化宣传",
            "parent_id": 0,
            "front_url": "culturePropaganda",
            "front_icon": "common/navigation/menuStore.png",
            "childList": [],
            "no_child": true,
            "front_icon_url": "m_huodong"
          },
        ]

        console.log(_this.$data.tableData)

      },

    }
  }
