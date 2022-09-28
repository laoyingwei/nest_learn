"use strict";
exports.__esModule = true;
exports.CurrentUser = exports.Roles = exports.LoginAuth = exports.NoAuth = void 0;
var common_1 = require("@nestjs/common");
/**
* 接口不用验证
*/
exports.NoAuth = function () { return common_1.SetMetadata('no-auth', true); };
/**
* 登录认证
*/
exports.LoginAuth = function () { return common_1.SetMetadata('login-auth', true); };
/**
* 某个角色能访问
*/
exports.Roles = function () {
    var roles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        roles[_i] = arguments[_i];
    }
    return common_1.SetMetadata('roles', roles);
};
/**
* 当前登录的User
*/
exports.CurrentUser = common_1.createParamDecorator(function (data, ctx) {
    var request = ctx.switchToHttp().getRequest();
    return request.user;
});
