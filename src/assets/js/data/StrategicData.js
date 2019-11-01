
import Customer from '@/views/data/customer.vue'
import StarProduct from '@/views/data/starProduct.vue'

export default {
  name: "StrategicData",
  components:{
    Customer,
    StarProduct
  },
  data(){
    return{
      activeName: 'first'
    }
  },
  created(){

  },
  methods:{
    handleClick(){

    },
  },
}
