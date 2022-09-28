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
exports.Productoperatelog = void 0;
var swagger_1 = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var Productoperatelog = /** @class */ (function (_super) {
    __extends(Productoperatelog, _super);
    function Productoperatelog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column({ comment: '商品id', type: 'bigint' }),
        swagger_1.ApiProperty({ description: '商品id' })
    ], Productoperatelog.prototype, "productId");
    __decorate([
        typeorm_1.Column({ comment: '改变前价格', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '改变前价格' })
    ], Productoperatelog.prototype, "priceOld");
    __decorate([
        typeorm_1.Column({ comment: '改变后价格', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '改变后价格' })
    ], Productoperatelog.prototype, "priceNew");
    __decorate([
        typeorm_1.Column({ comment: '改变前优惠价', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '改变前优惠价' })
    ], Productoperatelog.prototype, "salePriceOld");
    __decorate([
        typeorm_1.Column({ comment: '改变后优惠价', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '改变后优惠价' })
    ], Productoperatelog.prototype, "salePriceNew");
    __decorate([
        typeorm_1.Column({ comment: '改变前积分', type: 'int' }),
        swagger_1.ApiProperty({ description: '改变前积分' })
    ], Productoperatelog.prototype, "giftPointOld");
    __decorate([
        typeorm_1.Column({ comment: '改变后积分', type: 'int' }),
        swagger_1.ApiProperty({ description: '改变后积分' })
    ], Productoperatelog.prototype, "giftPointNew");
    __decorate([
        typeorm_1.Column({ comment: '改变前积分使用限制', type: 'int' }),
        swagger_1.ApiProperty({ description: '改变前积分使用限制' })
    ], Productoperatelog.prototype, "giftPointLimitOld");
    __decorate([
        typeorm_1.Column({ comment: '改变后积分使用限制', type: 'int' }),
        swagger_1.ApiProperty({ description: '改变后积分使用限制' })
    ], Productoperatelog.prototype, "giftPointLimitNew");
    __decorate([
        typeorm_1.Column({ comment: '操作人', length: 64 }),
        swagger_1.ApiProperty({ description: '操作人' })
    ], Productoperatelog.prototype, "operateMan");
    Productoperatelog = __decorate([
        typeorm_1.Entity('productoperatelog', { name: "商品操作记录表" })
    ], Productoperatelog);
    return Productoperatelog;
}(base_entity_1.Base));
exports.Productoperatelog = Productoperatelog;
