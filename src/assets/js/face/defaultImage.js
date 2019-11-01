

//图片拼接地址
import imgUrlHead from '@/config/API'


export default {
  name: "defaultImage",
  data(){
     return{
       boxHeight:(document.documentElement.clientHeight - 135) + 'px',
       choseType:[true,false,false,false],

       imageUrlOne:'',
       imageUrlTwo:'',
       imageUrlThree:'',
       // zeroIsChose:true,
       // oneIsChose:false,
       // twoIsChose:false,
       // threeIsChose:false,

       imgUrlHead:imgUrlHead.IMAGES_JAVA_URL,
       upLoadData: {
         // access_token: localStorage.getItem('knock_knock'),
       },
     
     }
  },
  created(){

  },
  methods:{
    //上传图片动态地址
    importFileUrl() {
      return global.JAVA_UPLOAD_IMAGES
    },

    /***默认***/
    chooseThisZero(){
       this.$data.zeroIsChose = true;
      this.$data.choseType = [true,false,false,false];
    },

    /***第一个图片上传***/
    handleSuccessOne(response, file, fileList){
      this.$data.imageUrlOne = response.data;
    },
    deleteThisOne(){
      this.$data.imageUrlOne = '';
    },
    chooseThisOne(){
      if(this.$data.imageUrlOne){
        this.$data.choseType = [false,true,false,false];
      }
    },



    /***第二个图片上传***/
    handleSuccessTwo(response, file, fileList){
      this.$data.imageUrlTwo = response.data;
    },
    deleteThisTwo(){
      this.$data.imageUrlTwo = '';
    },
    chooseThisTwo(){
       if(this.$data.imageUrlTwo){
         this.$data.choseType = [false,false,true,false];
       }
    },
    /***第三个图片上传***/
    handleSuccessThree(response, file, fileList){
      this.$data.imageUrlThree = response.data;
    },
    deleteThisThree(){
      this.$data.imageUrlThree = '';
    },
    chooseThisThree(){
       if(this.$data.imageUrlThree){
         this.$data.choseType = [false,false,false,true];
       }
    },


    beforeMaterialUpload(){
      
    },


    // handleRemove(file, fileList) {
    //   console.log(file, fileList);
    // },

    // handleSuccess(response, file, fileList){
    //    console.log(response)
    //    console.log(file)
    //    console.log(fileList)
    // },
    // checkoutThis(file){
    //    console.log(file)
    // },



  }
}
