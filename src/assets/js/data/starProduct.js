
export default {
  name: "starProduct",
  data(){
    let _this = this;
    return{
      productData:[
        {name:'小金鱼项链',num:789788,dis:-1,url:'http://test-static.dongdian.vip/1572573903102.png',status:0,canUpdate_a:false,canUpdate_b:false,canUpdate_c:false,highlight:true,},
        {name:'传家项链',num:12333,dis:-1,url:'http://test-static.dongdian.vip/1572573949077.png',status:0,canUpdate_a:false,canUpdate_b:false,canUpdate_c:false,highlight:false,},
        {name:'小幸运项链',num:12,dis:-1,url:'http://test-static.dongdian.vip/1572573977273.png',status:0,canUpdate_a:false,canUpdate_b:false,canUpdate_c:false,highlight:false,},
        {name:'传家手镯',num:12,dis:-1,url:'http://test-static.dongdian.vip/1572577880705.png',status:0,canUpdate_a:false,canUpdate_b:false,canUpdate_c:false,highlight:false,},
        {name:'开心果吊坠',num:12,dis:-1,url:'http://test-static.dongdian.vip/1572577919848.jpg',status:0,canUpdate_a:false,canUpdate_b:false,canUpdate_c:false,highlight:false,},
        {name:'王源小幸运手链',num:12,dis:5,url:'http://test-static.dongdian.vip/1572577941817.jpeg',status:0,canUpdate_a:false,canUpdate_b:false,canUpdate_c:false,highlight:false,},
      ],
      swiperOption:{
        slidesPerView: 2.8,
        spaceBetween: -5,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        observer:true,   //切换tab重新加载swiperOption
        observeParents:true, //切换tab重新加载swiperOption
        on: {
          slideChangeTransitionEnd: function(){
            // alert(this.realIndex);
            _this.highlightType(this.realIndex)
          }//切换结束时，告诉我现在是第几个slide
         },
      },
      
    }
  },

  created(){

  },

  methods:{

    //当上面的轮播切换的时候，下面的列表进行高亮
    highlightType(index){

        for(let i = 0; i < this.$data.productData.length; i++){
          if(index === i){
             this.$data.productData[i].highlight = true;
          }else{
            this.$data.productData[i].highlight = false;
          }
        }
    },

    changeFile(file,index){
      let _this = this;
      let inputDOM = this.$refs.uploadImg;
      // 通过DOM取文件数据
      _this.fil = inputDOM[index].files;
      let len= _this.fil.length;
      if(len>1){
        alert('最多可上传1张');
        return false;
      }
      if(len){
        _this.$data.productData.forEach(function (v,i) {
          if(i == index){
            v.status = 1;
          }
        })
      }

      let total = _this.fil[0].size;
      let reader = new FileReader();    //html5读文件 
      reader.readAsDataURL(_this.fil[0]); //转BASE64    
      reader.onload=function(e) {        //读取完毕后调用接口   
        let imgFile = e.target.result;
        _this.$data.productData.forEach(function (v,i) {
          if(i == index){
            v.url = imgFile;
            v.status = 2;
            if(_this.fil[0].type.indexOf('video') != -1){
              v.type = 2;
            }else{
              v.type = 1;
            }

          }
        })
        console.log(_this.$data.productData)
      }

      reader.onprogress = function(e) {
        console.log(e)
        console.log(e.loaded,total)
        _this.$data.productData.forEach(function (v,i) {
          if(i == index){
            v.progress = (e.loaded/total)*100 + '%';
          }
        })
      };
      reader.onabort=function () {
        // layer.msg("文件上传中断,请重试")
      };
      reader.onerror=function () {
        // layer.msg("文件上传出错，请重试")
      }
    },
    deleteImg(index){
      let inputDOM = this.$refs.uploadImg;
      inputDOM[index].value = ''
      this.$data.productData.forEach(function (v,i) {
        if(i == index){
          v.url = '';
          v.type = '';
          v.status = 0;
          v.progress= '0%'
        }
      })
    },


  //  修改名称
    updateName(index){
      this.$data.productData[index].canUpdate_a = true;
    },
  //  修改数量
    updateNum(index){
      this.$data.productData[index].canUpdate_b = true;
    },
  //  修改增减值
    updateDis(index){
      this.$data.productData[index].canUpdate_c = true;
    },

  //  验证名称输入
    verifyName(index){
      if(this.$data.productData[index].name.match(/^[\u4E00-\u9FA5A-Za-z0-9]+$/)){

      }else{
        this.$message({
          type: 'warning',
          message: '只能输入数字中英文大小写，1-16个字符',
        });
        this.$data.productData[index].name = '';
        return;
      }
    },

  //  数量输入验证
    verifyNum(index){
      if(this.$data.productData[index].num.match(/^[0-9]\d*$/)){
         if(this.$data.productData[index].num > 1000000){
           this.$message({
             type: 'warning',
             message: '最大只能输入一百万',
           });
           this.$data.productData[index].num = '';
           return;
         }
      }else{
        this.$message({
          type: 'warning',
          message: '只能输入正整数，必填',
        });
        this.$data.productData[index].num = '';
        return;
      }
    },

  //  验证增减值
    verifyDis(index){
      if(this.$data.productData[index].dis.match(/^[0-9]\d*$/) || this.$data.productData[index].dis.match(/^-[0-9]\d*$/)){

      }else{
        this.$message({
          type: 'warning',
          message: '只能输入正负整数，非必填',
        });
        this.$data.productData[index].dis = 0;
        return;
      }
    },



  },
}
