"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Productvertifyrecord = exports.bitchStatus = void 0;
var swagger_1 = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var bitchStatus;
(function (bitchStatus) {
    bitchStatus[bitchStatus["no"] = 0] = "no";
    bitchStatus[bitchStatus["yes"] = 1] = "yes";
})(bitchStatus = exports.bitchStatus || (exports.bitchStatus = {}));
var Productvertifyrecord = /** @class */ (function (_super) {
    __extends(Productvertifyrecord, _super);
    function Productvertifyrecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column({ comment: '商品id', type: 'bigint' }),
        swagger_1.ApiProperty({ description: '商品id' })
    ], Productvertifyrecord.prototype, "productId");
    __decorate([
        typeorm_1.Column({ comment: '审核人', length: 64 }),
        swagger_1.ApiProperty({ description: '审核人' })
    ], Productvertifyrecord.prototype, "vertifyMan");
    __decorate([
        typeorm_1.Column({ comment: '审核后的状态 0 -> 未通过 1 ->已通过', type: 'int', "default": bitchStatus.no }),
        swagger_1.ApiProperty({ description: '审核后的状态 0 -> 未通过 1 ->已通过' })
    ], Productvertifyrecord.prototype, "status");
    __decorate([
        typeorm_1.Column({ comment: '反馈详情', length: 255 }),
        swagger_1.ApiProperty({ description: '反馈详情' })
    ], Productvertifyrecord.prototype, "detail");
    Productvertifyrecord = __decorate([
        typeorm_1.Entity('productvertifyrecord', { name: '商品审核记录表' })
    ], Productvertifyrecord);
    return Productvertifyrecord;
}(base_entity_1.Base));
exports.Productvertifyrecord = Productvertifyrecord;
