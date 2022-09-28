"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WeixinModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var weixin_controller_1 = require("./weixin.controller");
var weixin_service_1 = require("./weixin.service");
var WeixinModule = /** @class */ (function () {
    function WeixinModule() {
    }
    WeixinModule = __decorate([
        common_1.Module({
            imports: [common_1.HttpModule, config_1.ConfigModule],
            controllers: [weixin_controller_1.WeixinController],
            providers: [weixin_service_1.WeixinService]
        })
    ], WeixinModule);
    return WeixinModule;
}());
exports.WeixinModule = WeixinModule;
