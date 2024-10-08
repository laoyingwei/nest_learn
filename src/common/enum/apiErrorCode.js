"use strict";
exports.__esModule = true;
exports.ApiErrorMessage = void 0;
var ApiErrorMessage;
(function (ApiErrorMessage) {
    // 用户不存在
    ApiErrorMessage[ApiErrorMessage["USER_IS_NOT_EXIST_CODE"] = 101] = "USER_IS_NOT_EXIST_CODE";
    ApiErrorMessage["USER_IS_NOT_EXIST"] = "user account is not exist";
    // 用户密码错误
    ApiErrorMessage[ApiErrorMessage["USER_PASSWD_IS_ERROR_CODE"] = 102] = "USER_PASSWD_IS_ERROR_CODE";
    ApiErrorMessage["USER_PASSWD_IS_ERROR"] = "user password is error";
})(ApiErrorMessage = exports.ApiErrorMessage || (exports.ApiErrorMessage = {}));
