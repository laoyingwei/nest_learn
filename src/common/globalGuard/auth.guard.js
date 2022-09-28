"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GlobalAuthGuard = void 0;
var common_1 = require("@nestjs/common");
var jwt_auth_guard_1 = require("../specialModules/auth/guards/jwt.auth.guard");
var auth_local_guard_1 = require("../specialModules/auth/guards/auth.local.guard");
var GlobalAuthGuard = /** @class */ (function () {
    function GlobalAuthGuard(reflector) {
        this.reflector = reflector;
    }
    GlobalAuthGuard_1 = GlobalAuthGuard;
    GlobalAuthGuard.prototype.canActivate = function (context) {
        // 获取登录的注解
        var loginAuth = this.reflector.get('login-auth', context.getHandler());
        // 在这里取metadata中的no-auth，得到的会是一个bool
        var noAuth = this.reflector.get('no-auth', context.getHandler());
        if (noAuth) {
            return true;
        }
        var guard = GlobalAuthGuard_1.getAuthGuard(loginAuth);
        // 执行所选策略Guard的canActivate方法
        return guard.canActivate(context);
    };
    // 根据NoAuth的t/f选择合适的策略Guard
    GlobalAuthGuard.getAuthGuard = function (loginAuth) {
        if (loginAuth) {
            return new auth_local_guard_1.LocalAuthGuard();
        }
        else {
            return new jwt_auth_guard_1.JwtAuthGuard();
        }
    };
    var GlobalAuthGuard_1;
    GlobalAuthGuard = GlobalAuthGuard_1 = __decorate([
        common_1.Injectable()
    ], GlobalAuthGuard);
    return GlobalAuthGuard;
}());
exports.GlobalAuthGuard = GlobalAuthGuard;
