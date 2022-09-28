"use strict";
exports.__esModule = true;
exports.div = exports.mul = exports.sub = exports.add = void 0;
var decimal_js_1 = require("decimal.js");
///加
exports.add = function (a, b) {
    var num = (new decimal_js_1["default"](a).add(new decimal_js_1["default"](b))).toNumber();
    return num;
};
///减 
exports.sub = function (a, b) {
    var num = new decimal_js_1["default"](a).sub(new decimal_js_1["default"](b)).toNumber();
    return num;
};
///乘
exports.mul = function (a, b) {
    var num = new decimal_js_1["default"](a).mul(new decimal_js_1["default"](b)).toNumber();
    return num;
};
// 除
exports.div = function (a, b) {
    var num = new decimal_js_1["default"](a).div(new decimal_js_1["default"](b)).toNumber();
    return num;
};
// 加法 let c = new Decimal(a).add(new Decimal(b))
// 减法 let d = new Decimal(a).sub(new Decimal(b))
// 乘法 let e = new Decimal(a).mul(new Decimal(b))
// 除法 let f = new Decimal(a).div(new Decimal(b))
