import Vue from 'vue'
import Router from 'vue-router'

// 模板框架
const Main = resolve => require(['@/views/menu/Main'],resolve)

// 登录页面
const UserLogin = resolve => require(['@/views/user/UserLogin'],resolve);



//个人中心
const UserPersonal = resolve => require(['@/views/user/UserPersonal'],resolve)

//首页
const systemPage = resolve => require(['@/views/systemPage/systemPage'],resolve)
const visitorsType = resolve => require(['@/views/face/visitorsType'],resolve)
const visitorsList = resolve => require(['@/views/face/visitorsList'],resolve)

//战略数据
const StrategicData = resolve => require(['@/views/data/StrategicData'],resolve)

//文化宣传
const culturePropaganda = resolve => require(['@/views/culture/culturePropaganda'],resolve)





Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login',name: 'UserLogin',component: UserLogin},
    {

      path: '/',
      meta: { requiresAuth: true },
      component: Main,

      children: [

        {path: 'UserPersonal',name: 'UserPersonal',component: UserPersonal},
        {path: 'systemPage',name: 'systemPage',component: systemPage},
        {path: 'visitorsType',name: 'visitorsType',component: visitorsType},
        {path: 'visitorsList',name: 'visitorsList',component: visitorsList},
        {path: 'StrategicData',name: 'StrategicData',component: StrategicData},
        {path: 'culturePropaganda',name: 'culturePropaganda',component: culturePropaganda},

      ]

  }]
})

router.beforeEach((to, from, next) => {
  let userPhone = window.sessionStorage.getItem('userPhone')
  if (to.matched.some(record => record.meta.requiresAuth)&& (!userPhone || userPhone === null)) {
      // window.location.href = '/';
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
  } else {
    next()
  }
  // next()
})

export default router
