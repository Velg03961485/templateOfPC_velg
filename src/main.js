// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/iconfont.css'
import '../static/css/home.css'
import '../static/css/main.css'
import '../static/font/iconfont.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


import http from './api/http.js'

import App from './App'
import router from './router'
import axios from 'axios'
import * as filters from './filters'
import './config/constantAPI'
import globalFunction from '@/assets/js/globalFunction'
import global_ from '@/config/Global'
import loadingDemo from '@/config/loadingDemo'

Vue.prototype.GLOBAL = global_

Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.use(globalFunction);
Vue.use(loadingDemo);

Vue.filter('date', filters.dateFilter)
Vue.filter('timeType', filters.timeTypeFilter)
Vue.filter('numberFilter', filters.numberFilter)
Vue.filter('numbersFilter', filters.numbersFilter)
Vue.filter('fonts',filters.fontFilter);
Vue.filter('numThousand', filters.numThousand);
Vue.filter('hundredMillion', filters.hundredMillion);
Vue.filter('fontLength', filters.fontNumberFilter)
Vue.filter('acvitiType',filters.activiType)
Vue.filter('stringNumber',filters.stringNumber)
Vue.filter('employeeRoleInfo',filters.employeeRoleInfo)
Vue.filter('activityType',filters.activityType)
Vue.filter('indexText',filters.indexText)
Vue.filter('cardNameLength',filters.cardNameLength)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
