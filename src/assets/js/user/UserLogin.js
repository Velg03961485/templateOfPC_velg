

import UserLoginForm from '@/views/user/UserLoginForm'
import userApi from '@/api/user.js'

import commonApi from '@/api/common.js'

let timeGetTaken;

export default {
  name: 'home',
  components: {
    UserLoginForm,
  },
  data () {
    return {
      topText:'欢迎登录，智能展厅后台管理系统！',
      isFirstLogin:false,   //默认 false为已经注册超级管理员
      domain:'',
    }
  },
  created: function () {
    let getUrl = window.location.origin.split('//')[1];
    console.log(getUrl)
    if(getUrl === 'localhost:8091'){
      this.$data.domain  = window.location.origin.split('//')[1].split(':')[0];
    }else{
      this.$data.domain  = window.location.origin.split('//')[1].split('.')[0];
    }
    // 调整窗口尺寸事件
    window.addEventListener('resize', this.handleResize)
    // 设置显示内容
    let pathName = this.$route.name.toLowerCase();

  //  定时请求 token
  //   let that = this;
  //   timeGetTaken = window.setInterval(function () {
  //     that.getTokenBtn();
  //   },1000 * 5 * 60)
  },
  mounted: function () {
    // 背景粒子效果
    // window.particlesJS.load('particles-js', 'static/js/particles/particles.json')

    // 自动设置页面高度
    this.handleResize()


  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {

    fetchData: function () {
      let pathName = this.$route.name.toLowerCase()
      this.show = pathName
      this.handleResize()
    },
    handleResize () {
      let home = document.querySelector('.home')
      if (home) {
        home.style.height = 0 + 'px'
        // 兼容firefox ie google
        let h = document.body.scrollHeight === 0 ? document.documentElement.scrollHeight : document.body.scrollHeight
        // 自动设置页面高度
        if (window.innerHeight <= 800) {
          home.style.height = (h + 30) + 'px'
        } else {
          home.style.height = h + 'px'
        }
      }
    },


  }
}
