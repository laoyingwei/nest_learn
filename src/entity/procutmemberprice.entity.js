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
exports.Procutmemberprice = exports.type = void 0;
var swagger_1 = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var product_entity_1 = require("./product.entity");
var type;
(function (type) {
    type[type["money"] = 1] = "money";
    type[type["discount"] = 0] = "discount";
})(type = exports.type || (exports.type = {}));
var Procutmemberprice = /** @class */ (function (_super) {
    __extends(Procutmemberprice, _super);
    function Procutmemberprice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return product_entity_1.Product; }, function (product) { return product.ladders; }),
        swagger_1.ApiProperty({ description: '商品优惠券商品id' })
    ], Procutmemberprice.prototype, "productId");
    __decorate([
        typeorm_1.Column({ comment: '会员等级id' }),
        swagger_1.ApiProperty({ description: "会员等级id" })
    ], Procutmemberprice.prototype, "memberLevelId");
    __decorate([
        typeorm_1.Column({ comment: '会员等级id', "default": type.money }),
        swagger_1.ApiProperty({ description: "会员等级id" })
    ], Procutmemberprice.prototype, "type");
    __decorate([
        typeorm_1.Column({ comment: '商品减少金额', type: 'decimal', "default": 0, precision: 10, scale: 2 }),
        swagger_1.ApiProperty({ description: "商品减少金额" })
    ], Procutmemberprice.prototype, "reducePrice");
    __decorate([
        typeorm_1.Column({ comment: '折扣', type: 'decimal', "default": 0, precision: 10, scale: 2 }),
        swagger_1.ApiProperty({ description: "折扣" })
    ], Procutmemberprice.prototype, "discount");
    __decorate([
        typeorm_1.Column({ comment: '折后价格', type: 'decimal', "default": 0, precision: 10, scale: 2 }),
        swagger_1.ApiProperty({ description: "折后价格" })
    ], Procutmemberprice.prototype, "price");
    Procutmemberprice = __decorate([
        typeorm_1.Entity('procutmemberprice')
    ], Procutmemberprice);
    return Procutmemberprice;
}(base_entity_1.Base));
exports.Procutmemberprice = Procutmemberprice;
