/**
 * 当前用户登录、退出、修改密码、信息
 */
import axios from 'axios'

export default {


/***获取个人信息**/
  getUserInfo (list) {
    return new Promise((resolve, reject) => {
      axios.post(global.JAVA_GET_PERSONAL_INFO,list).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },

/***修改密码***/
updatePassword (list) {
  return new Promise((resolve, reject) => {
    axios.post(global.JAVA_CHANGE_PERSONAL_CODE,list).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
},














}
