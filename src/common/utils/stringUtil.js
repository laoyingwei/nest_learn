"use strict";
exports.__esModule = true;
exports.formatAmount = exports.createSomeDigitNumber = void 0;
/**
* 产生x位的随机数
*/
exports.createSomeDigitNumber = function (digit) {
    var randomCode = '';
    for (var i = 0; i < digit; i++) {
        randomCode += Math.floor(Math.random() * 10);
    }
    return randomCode;
};
/**
* 数字格式化
*/
exports.formatAmount = function (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
