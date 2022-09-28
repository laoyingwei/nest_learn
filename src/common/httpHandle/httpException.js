"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpExceptionFilter = void 0;
var common_1 = require("@nestjs/common");
var customException_1 = require("./customException");
var HttpExceptionFilter = /** @class */ (function () {
    function HttpExceptionFilter() {
    }
    HttpExceptionFilter.prototype["catch"] = function (exception, host) {
        var ctx = host.switchToHttp();
        var response = ctx.getResponse();
        var request = ctx.getRequest();
        var errorResponse;
        var date = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
        if (exception instanceof customException_1.CustomException) {
            // 自定义异常
            errorResponse = {
                code: exception.getErrorCode(),
                errorMessage: exception.getErrorMessage(),
                message: 'error',
                url: request.originalUrl,
                date: date
            };
        }
        else {
            // 非自定义异常
            errorResponse = {
                code: exception.getStatus(),
                errorMessage: exception.message,
                url: request.originalUrl,
                date: date
            };
        }
        var status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        // 设置返回的状态码、请求头、发送错误信息
        response.status(status);
        response.header('Content-Type', 'application/json; charset=utf-8');
        response.send(errorResponse);
        console.log("=-=-=-=-=-=-=-=-=-=-=[error:" + errorResponse.url + "]=-=-=-=-=-=-=-=-=-=-=");
        console.log(errorResponse);
    };
    HttpExceptionFilter = __decorate([
        common_1.Catch(common_1.HttpException)
    ], HttpExceptionFilter);
    return HttpExceptionFilter;
}());
exports.HttpExceptionFilter = HttpExceptionFilter;
