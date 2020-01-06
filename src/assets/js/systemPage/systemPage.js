

import CustomerLineData from '@/components/customerLineData';
import ActivityRingTwo from '@/components/activityRingTwo';
import ActivityPie from '@/components/DataViewAge';


export default {
  name: "systemPage",
  components: {
    CustomerLineData,
    ActivityRingTwo,
    ActivityPie,
  },
  data(){
    return{
      timeFrom:{
        time1:'',
        time2:'',
        tabPosition:'0',
      },
      pickerOptionsSet: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },

      //折线图
      lineFlag: true,
      guestParameters:{},
    //  环装
      timeTakeTwo:false,
      CusDataTwo:[],
    //  饼状
      timeing:false,
      ageData:[],

    }
  },
  created(){
    this.getLineInfo();
    this.getRingInfo();
    this.getPeiInfo();
  },
  methods:{
    isChoseTimeBtnOne(){

    },
    isChoseTimeBtn(){

    },
    choseTimeTypeBtn(){

    },

  /***
   * 折线图
   * ***/

    getLineInfo(){
      this.$data.guestParameters = {"data":[{"data":[30,12,120,69,21,6],"name":"数据"}],"dateList":["城市合伙人","推广合伙人","种子商户","投资合伙人","特色商户","普通创客",]};
      this.$data.lineFlag = !this.$data.lineFlag;
    },

    /****
     * 环
     * ****/
    getRingInfo(){
      this.$data.CusDataTwo = [
        {name:'其他',y:5.53},
        {name:'体育健康',y:7.31},
        {name:'美容养生',y:7.2},
        {name:'家政保姆',y:9.92},
        {name:'家庭洗护',y:15.14},
      ];
      this.$data.timeTakeTwo = !this.$data.timeTakeTwo;
    },

  /****
   * 饼
   * ****/
    getPeiInfo(){
      this.$data.ageData = [
        {name:'其他',y:5.53},
        {name:'体育健康',y:7.31},
        {name:'美容养生',y:7.2},
        {name:'家政保姆',y:9.92},
        {name:'家庭洗护',y:15.14},
      ];
      this.$data.timeing = !this.$data.timeing;
    },

  },
}
