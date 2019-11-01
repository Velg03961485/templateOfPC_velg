let format = (value) => {
  return value >= 10 ? value : '0' + value
}
/**
 * 时间格式化
 */
export const dateFilter = (time, type) => {
  let date = new Date(time * 1000)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let second = date.getSeconds()
  let result
  switch (type) {
    case 0: // 01-05
      result = `${(month)}月${format(day)}日`
      break
    case 1: // 11:12
      result = `${format(hours)}:${format(minutes)}:${format(second)}`
      break
    case 2: // 2015-01-05
      result = `${year}-${format(month)}-${format(day)}`
      break
    case 3: // 2015-01-05 11:12
      result = `${year}.${format(month)}.${format(day)}  ${format(hours)}:${format(minutes)}`
      break
    case 4:// 2015-01-05 11:12:06
      result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}:${format(second)}`
      break
    case 5:// Jan 05, 2015 11:12:06
      result = date.format('M dd, yyyy HH:mm:ss')
      break
    case 6:// Jan 05, 2015
      result = date.format('M dd, yyyy')
      break
    case 7:// Jan 05, 2015
      result = `${year}年${format(month)}月${format(day)}日  ${format(hours)}:${format(minutes)}`
      break
  }
  return result
}

Date.prototype.format = function (mask) {
  var d = this
  var zeroize = function (value, length) {
    if (!length) {
      length = 2
    }
    value = String(value)
    for (var i = 0, zeros = ''; i < (length - value.length); i++) {
      zeros += '0'
    }
    return zeros + value
  }
  return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function ($0) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let monthsAll = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    switch ($0) {
      case 'd': return d.getDate()
      case 'dd': return zeroize(d.getDate())
      case 'ddd': return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()]
      case 'dddd': return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()]
      case 'M': return months[d.getMonth()]
      case 'MM': return zeroize(d.getMonth() + 1)
      case 'MMM': return months[d.getMonth()]
      case 'MMMM': return monthsAll[d.getMonth()]
      case 'yy': return String(d.getFullYear()).substr(2)
      case 'yyyy': return d.getFullYear()
      case 'h': return d.getHours() % 12 || 12
      case 'hh': return zeroize(d.getHours() % 12 || 12)
      case 'H': return d.getHours()
      case 'HH': return zeroize(d.getHours())
      case 'm': return d.getMinutes()
      case 'mm': return zeroize(d.getMinutes())
      case 's': return d.getSeconds()
      case 'ss': return zeroize(d.getSeconds())
      case 'l': return zeroize(d.getMilliseconds(), 3)
      case 'L': var m = d.getMilliseconds()
        if (m > 99) m = Math.round(m / 10)
        return zeroize(m)
      case 'tt': return d.getHours() < 12 ? 'am' : 'pm'
      case 'TT': return d.getHours() < 12 ? 'AM' : 'PM'
      case 'Z': return d.toUTCString().match(/[A-Z]+$/)
      // Return quoted strings with the surrounding quotes removed
      default: return $0.substr(1, $0.length - 2)
    }
  })
}
//保留两位小数,四舍五入
export const numberFilter = (value) => {
  let realNum = Number(value).toFixed(2);
  return realNum;
}

//保留两位小数，不进行四舍五入
export const numbersFilter = (value) =>{
  let transtnum = Number(value).toFixed(3);
  let realVal = transtnum.substring(0, transtnum.length - 1);
  // return Number(realVal);
  return realVal;
}

//数字数字大于亿用亿表示
export const hundredMillion = (value) =>{
	 let val;
   if(value >= 100000000){
   	val =  "约" + (value / 100000000).toFixed(3).slice(0,-1) + '亿';
   }else{
   	val = value;
   }
  return val;
}

//数字千分位用逗号隔开展示
export const numThousand = (value) =>{
  let res = value.toString().replace(/\d+/, function(n) { // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
      return $1 + ","
    });
  })
  return res
}
//文本过滤长度以及标签
export const fontFilter = (value,num) =>{
  let text = '';
  if(value === ''){
    text = '--';
  }else{
    if(value.length > num){
      value = value.replace(/<[^>]+>/gim, '');
      value = value.substr(0, num)
      text = value + ('...');
    }else{
      text = value;
    }

  }

  return text;
}

//字数长度过滤
export const fontNumberFilter = (value,num) =>{
  value = value.substr(0, num)
  return value + ('...');
}

//优惠券名称过滤
export const cardNameLength = (value,num) => {
  let text = '';
  if(value.length >= num){
    value = value.replace(/<[^>]+>/gim, '');
    value = value.substr(0, num)
    text = value + ('...');
  }else{
    text = value;
  }
  return text;
};

export const timeTypeFilter = (value) => {
  let typeText;
  if(value === 0){
    typeText = '180天';
  }else if(value === 1){
    typeText = '365天';
  }else if(value === 2){
    typeText = '730天';
  }else if(value === 3){
    typeText = '1096天';
  }else if(value === 4){
    typeText = '永久有效';
  }else if(value === 5){
    typeText = '次年清零';
  }else{
    typeText = '未知';
  }
  return typeText;
}

//活动数据过滤
export const activiType = (value) => {
  let type;
  //生日活动有效期,0生日当天,1生日当月
  if(value === '0'){
    type = '生日当天';
  }else if(value === '1'){
    type = '生日当月';
  }
  return type;
};


//复填下拉的时候，返回的id为 数字的时候，进行转字符串操作
export const stringNumber = (value) =>{
  let val;
  val = value.toString();
  return val;
};


//员工角色 信息过滤返回
export const employeeRoleInfo = (value) => {
  let text = '';
  //角色id 0超级管理员 -1店长-2导购-3收银
  if(value === '0' || value === 0){
    text = '超级管理员';
  }else if(value === '1' || value === 1){
    text = '店长';
  }else if(value === '2' || value === 2){
    text = '导购';
  }else if(value === '3' || value === 3){
    text = '收银';
  }else {
    text = '--';
  }
  return text;
};

//活动类型过滤
export const activityType = (value) => {
  let text = '';
  if(value === '0' || value === 0){
    text = '注册活动';
  }else if(value === '1' || value === 1){
    text = '促销活动';
  }else if(value === '2' || value === 2){
    text = '助力活动';
  }else if(value === '3' || value === 3){
    text = '裂变活动';
  }
  return text;
};


//活动 置换index返回中文

export const indexText = (value) => {
  let text = '';
  if(value === 0 || value === '0'){
    text = '一';
  }else if(value === 1 || value === '1'){
    text = '二';
  }else if(value === 2 || value === '2'){
    text = '三';
  }else if(value === 3 || value === '3'){
    text = '四';
  }else if(value === 4 || value === '4'){
    text = '五';
  }else if(value === 5 || value === '5'){
    text = '六';
  }else if(value === 6 || value === '6'){
    text = '七';
  }else if(value === 7 || value === '7'){
    text = '八';
  }else if(value === 8 || value === '8'){
    text = '九';
  }else if(value === 9 || value === '9'){
    text = '十';
  }
  return text;
};

/***正负数置换***/
export const plusOrMinus = (value) =>{
  let text = '';
  if(value < 0){
    text = value;
  }else if(value === 0){
    text = '';
  }else if (value > 0){
    text = '+' + value;
  }
  return text;
};
