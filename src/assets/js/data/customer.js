
import globalRule from '@/config/global_rules.js'
import DataLine from '@/components/DataViewLine.vue'

export default {
  name: "customer",
  components:{
    DataLine,
  },
  data(){
    return{
      formCustomer:{
        name:'',
      },
      formCustomerRules:{
        // name: [
        //   { required: true, message: '请输入公司名称', trigger: 'blur' },
        //   { min: 1, max: 16, message: '长度在 1到16个中英文字符', trigger: 'blur' },
        //
        // ],
        name: globalRule.rules.customername('请输入公司名称'),
      },
      nameNumber:0,
      checked:'',
      areaData:[
        {
          name:'华东大区',
          color:'#ffba00',
          children:[
            {name:'上海',data:20,check:true},
            {name:'浙江',data:20,check:false},
            {name:'江苏',data:20,check:false},
            {name:'安徽',data:20,check:false},
            {name:'山东',data:20,check:false},
          ],
        },
        {
          name:'华南大区',
          color:'#ca81de',
          children:[
            {name:'广东',data:20,check:false},
            {name:'福建',data:20,check:false},
            {name:'广西',data:20,check:false},
            {name:'海南',data:20,check:false},
          ],
        },
        {
          name:'华中大区',
          color:'#444444',
          children:[
            {name:'河南',data:20,check:false},
            {name:'湖北',data:20,check:false},
            {name:'湖南',data:20,check:false},
            {name:'江西',data:20,check:false},
          ],
        },
        {
          name:'西南大区',
          color:'#f19ec2',
          children:[
            {name:'四川',data:20,check:false},
            {name:'重庆',data:20,check:false},
            {name:'云南',data:20,check:false},
            {name:'贵州',data:20,check:false},
            {name:'西藏',data:20,check:false},
          ],
        },
        {
          name:'华北大区',
          color:'#ff6853',
          children:[
            {name:'北京',data:20,check:false},
            {name:'天津',data:20,check:false},
            {name:'河北',data:20,check:false},
            {name:'内蒙古',data:20,check:false},
            {name:'山西',data:20,check:false},
          ],
        },
      ],

      putData:[],
      chartData:{},
      lineFlag:false,
    }
  },
  created(){

  },
  methods:{

    //验证输入框 只能输入正整数
    verifyInputBtn(index,num){
      // console.log(index)
      // console.log(num)
      if(this.$data.areaData[index].children[num].data.match(/^[0-9]\d*$/)){

      }else{
        this.$message({
          type: 'warning',
          message: '只能输入正整数',
        });
        this.$data.areaData[index].children[num].data = '';
        return;
      }
    },

    saveCustomerData(){
      if(this.$data.formCustomer.name === ''){
        this.$message({
          type: 'warning',
          message: '请输入公司名称',
        })
        return;
      }

    //  计算每个地区的值 进行 填 柱状图
      let data = {
        name:[],
        data:[],
        // color:[],
      };
        for(let i = 0; i < this.$data.areaData.length; i++){
          // let a = {
          //   name:'',
          //   data:0,
          // };
          // a.name = this.$data.areaData[i].name;
          data.name.push(this.$data.areaData[i].name);
          // data.color.push(this.$data.areaData[i].color);
          let oreData = 0;
          let ownData = {
            y:0,
            color:'',
          };
          for (let j = 0; j < this.$data.areaData[i].children.length; j++){
            if(this.$data.areaData[i].children[j].check === true){
              oreData += parseFloat(this.$data.areaData[i].children[j].data);
            }
          }
          ownData.y = oreData;
          ownData.color = this.$data.areaData[i].color;
          // a.data = oreData;
          // data.push(a)
          data.data.push(ownData)
        }
        console.log(data);
         this.$data.chartData = data;
         // this.$data.lineFlag = true;
         this.$data.lineFlag = !this.$data.lineFlag;
    },


    nameChangeInput(){
      this.$data.nameNumber = this.$data.formCustomer.name.length;
    },


  },
}
