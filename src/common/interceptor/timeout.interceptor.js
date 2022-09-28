"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TimeoutInterceptor = void 0;
var common_1 = require("@nestjs/common");
var operators_1 = require("rxjs/operators");
/**
* 您想要处理路线请求的超时。当您的端点在一段时间后没有返回任何内容时，
* 您希望以错误响应终止。以下结构可实现此目的
* 10s 超时
*/
var TimeoutInterceptor = /** @class */ (function () {
    function TimeoutInterceptor() {
    }
    TimeoutInterceptor.prototype.intercept = function (context, next) {
        return next.handle().pipe(operators_1.timeout(10000));
    };
    TimeoutInterceptor = __decorate([
        common_1.Injectable()
    ], TimeoutInterceptor);
    return TimeoutInterceptor;
}());
exports.TimeoutInterceptor = TimeoutInterceptor;
