

//拖拽
import vuedraggable from 'vuedraggable';

export default {
    name: "culturePropaganda",
  components: {vuedraggable},
    data(){
        return {
            formInline:{
                user:''
            },
            imageUrl:'',
            imgList:[]
        }
    },
    created(){
        this.recombinationArr([])
    },
    methods:{
        changeFile(file,index){
            let _this = this;
            // let inputDOM = this.$refs.uploadImg;
            // 通过DOM取文件数据
            // _this.fil = inputDOM[index].files;
            _this.fil = file.target.files[0];
            if(_this.fil.length>1){
                alert('最多可上传1张');
                return false;
            }
            if(_this.fil.length){
                _this.$data.imgList.forEach(function (v,i) {
                    if(i == index){
                        v.status = 1;
                    }
                })
            }

            let total = _this.fil.size;
            let reader = new FileReader();    //html5读文件 
            reader.readAsDataURL(_this.fil); //转BASE64    
            reader.onload=function(e) {        //读取完毕后调用接口   
                let imgFile = e.target.result;
                _this.$data.imgList.forEach(function (v,i) {
                    if(i == index){
                        v.url = imgFile;
                        v.status = 2;
                        if(_this.fil.type.indexOf('video') != -1){
                            v.type = 2;
                        }else{
                            v.type = 1;
                        }

                    }
                })
            }

            reader.onprogress = function(e) {
                _this.$data.imgList.forEach(function (v,i) {
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
        deleteImg(e,index){
            e.path[2].children[0].value = '';
            this.$data.imgList.forEach(function (v,i) {
                if(i == index){
                    v.url = '';
                    v.type = '';
                    v.status = 0;
                    v.progress= 0
                }
            })
        },
        /**
         * 重组数组
         * @param list
         */
        recombinationArr(list){
            let arr = [];
            if(list && list.length>0){
                arr = arr.concat(list);
                let len = list.length;
                for (let i = 0;i<18-len;i++){
                    let obj = {
                        id:Math.random(),
                        url:'',//img video路径
                        type:'',//1为图片 2为视频
                        status:0,//0为未上传  1为上传中  2为上传成功  3为上传失败
                        progress:0,
                    }
                    arr.push(obj)
                }
            }else{
                for (let i = 0;i<18;i++){
                    let obj = {
                        id:Math.random(),
                        url:'',//img video路径
                        type:'',//1为图片 2为视频
                        status:0,//0为未上传  1为上传中  2为上传成功  3为上传失败
                        progress:0,
                    }
                    arr.push(obj)
                }
            }
            this.$data.imgList = arr;
        },

    }
}
