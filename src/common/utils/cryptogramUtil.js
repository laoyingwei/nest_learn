"use strict";
exports.__esModule = true;
exports.encryptPassword = void 0;
var crypto = require("crypto");
/**
 * 加密密码
 */
exports.encryptPassword = function (password) {
    if (!password) {
        return '';
    }
    var md5 = crypto.createHash('md5');
    var newPasswd = md5.update(password).digest('hex');
    return newPasswd;
};
