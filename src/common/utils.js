var moment = require('moment');
/**
 *
 Input	Example	Description
 YYYY	2014	4 or 2 digit year
 YY	14	2 digit year
 Q	1..4	Quarter of year. Sets month to first month in quarter.
 M MM	1..12	Month number
 MMM MMMM	Jan..December	Month name in locale set by moment.locale()
 D DD	1..31	Day of month
 Do	1st..31st	Day of month with ordinal
 DDD DDDD	1..365	Day of year
 X	1410715640.579	Unix timestamp
 x	1410715640579	Unix ms timestamp
 * @param date
 * @param formatter
 * @returns {*|moment.Moment}
 * @constructor
 */
const DateFormat = function(date,formatter) {
    return moment(date).format(formatter);
};

var getCookie = function(name){
  var strcookie = document.cookie;//获取cookie字符串
  var arrcookie = strcookie.split("; ");//分割
//遍历匹配
  for ( var i = 0; i < arrcookie.length; i++) {
    var arr = arrcookie[i].split("=");
    if (arr[0] == name){
      return arr[1];
    }
  }
  return "";
};

var getTokenHeader = function(){
  let token = localStorage._login_token;
  return {'Authorization': 'Bearer ' + token};
};

export default {
  getCookie,getTokenHeader,DateFormat
}
