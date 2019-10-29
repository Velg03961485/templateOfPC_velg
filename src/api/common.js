import axios from 'axios'

export default {



//  图片上传公众接口
  uploadImages (list) {
    return new Promise((resolve, reject) => {
      axios.post(global.JAVA_UPLOAD_IMAGES,list).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },




/****上传base64图片的接口***/
uploadBaseImages(list) {
  return new Promise((resolve, reject) => {
    axios.post(global.JAVA_UPLOAD_64IMAGES,list).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
},




}
