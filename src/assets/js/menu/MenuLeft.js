import userApi from '@/api/user.js'

  //引入图标地址

import culturePng from '@/assets/images/menu/culturePng.png'
import dataPng from '@/assets/images/menu/dataPng.png'
import facePng from '@/assets/images/menu/facePng.png'

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
        culturePng:culturePng,
        dataPng:dataPng,
        facePng:facePng,
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
            "front_icon": "culturePng.png",
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
            "front_icon_url": "culturePng"
          },
          {
            "id": 120,
            "name": "战略数据呈现",
            "parent_id": 0,
            "front_url": "StrategicData",
            "front_icon": "facePng.png",
            "childList": [],
            "no_child": true,
            "front_icon_url": "facePng"
          },
          {
            "id": 130,
            "name": "企业文化宣传",
            "parent_id": 0,
            "front_url": "culturePropaganda",
            "front_icon": "common/navigation/menuStore.png",
            "childList": [],
            "no_child": true,
            "front_icon_url": "dataPng"
          },
        ]

        console.log(_this.$data.tableData)

      },

    }
  }
