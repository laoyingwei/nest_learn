"use strict";
exports.__esModule = true;
exports.getnowTimeStrStampStr = exports.getSomeMonthEndDate = exports.getSomeMonthStartDate = void 0;
/**
 * 获取某月开始日期
 */
exports.getSomeMonthStartDate = function (date) {
    if (date === void 0) { date = new Date(); }
    var nowMonth = date.getMonth(); //当前月 
    var nowYear = date.getFullYear(); //当前年
    var monthStartDate = new Date(nowYear, nowMonth, 1);
    return monthStartDate;
};
/**
* 获取某月结束日期
*/
exports.getSomeMonthEndDate = function (date) {
    if (date === void 0) { date = new Date(); }
    var nowMonth = date.getMonth(); //当前月 
    var nowYear = date.getFullYear(); //当前年
    var monthEndDate = new Date(nowYear, nowMonth + 1, 0);
    return monthEndDate;
};
/**
  * 获取当前时间的时间戳的字符串
  */
exports.getnowTimeStrStampStr = function () {
    var nowTimeStr = '';
    var now = new Date(Date.now());
    nowTimeStr += now.getFullYear().toString() + '-';
    var month = now.getMonth();
    nowTimeStr += getTimeAddZeroStr(month + 1);
    nowTimeStr += now.getDate().toString() + '-';
    var hours = now.getHours();
    nowTimeStr += getTimeAddZeroStr(hours);
    var minutes = now.getMinutes();
    nowTimeStr += getTimeAddZeroStr(minutes) + '-';
    var seconds = now.getSeconds();
    nowTimeStr += getTimeAddZeroStr(seconds);
    var milliseconds = now.getMilliseconds();
    var millisecondsStr = '';
    if (milliseconds < 10) {
        millisecondsStr = '00' + milliseconds;
    }
    else if (milliseconds >= 10 && milliseconds < 100) {
        millisecondsStr = '0' + milliseconds;
    }
    else {
        millisecondsStr = milliseconds.toString();
    }
    nowTimeStr += millisecondsStr;
    return nowTimeStr;
};
/**
* 获取当前时间的时间位不够10补0的字符串
*/
function getTimeAddZeroStr(num) {
    var numStr = '';
    if (num < 10) {
        numStr += '0' + num;
    }
    else {
        numStr = num.toString();
    }
    return numStr;
}
