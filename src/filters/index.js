//去掉中文亿元，isThree => nameCn
export function teimZh(code) {
  //  console.log(code)
    if (!code) return '-';
    var reg = /[\u4e00-\u9fa5]/g;
var result=code.replace(reg,'');
//    console.log(result)
    return result;
  }
  //替换|，
export function replaceCode(code) {
   // console.log(code)
    if (!code) return '-';
    var reg = '|';
var result=code.replace(reg,'/');
//    console.log(result)
    return result;
  }