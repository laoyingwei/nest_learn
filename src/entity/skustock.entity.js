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
exports.Skustock = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var orderitem_entity_1 = require("./orderitem.entity");
var product_entity_1 = require("./product.entity");
var Skustock = /** @class */ (function (_super) {
    __extends(Skustock, _super);
    function Skustock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return product_entity_1.Product; }, function (product) { return product.skustocks; }),
        swagger_1.ApiProperty({ description: '产品id' }),
        class_validator_1.IsNotEmpty({ message: '产品id不能为空' })
    ], Skustock.prototype, "productId");
    __decorate([
        typeorm_1.Column({ comment: 'sku编码', length: 64 }),
        swagger_1.ApiProperty({ description: 'sku编码' })
    ], Skustock.prototype, "skuCode");
    __decorate([
        typeorm_1.Column({ comment: '价格', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '价格' })
    ], Skustock.prototype, "price");
    __decorate([
        typeorm_1.Column({ comment: '库存', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '库存' })
    ], Skustock.prototype, "stock");
    __decorate([
        typeorm_1.Column({ comment: '预警库存', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '预警库存' })
    ], Skustock.prototype, "lowStock");
    __decorate([
        typeorm_1.Column({ comment: '规格属性1', length: 64 }),
        swagger_1.ApiProperty({ description: '规格属性1' })
    ], Skustock.prototype, "sp1");
    __decorate([
        typeorm_1.Column({ comment: '规格属性2', length: 64 }),
        swagger_1.ApiProperty({ description: '规格属性2' })
    ], Skustock.prototype, "sp2");
    __decorate([
        typeorm_1.Column({ comment: '规格属性3', length: 64 }),
        swagger_1.ApiProperty({ description: '规格属性3' })
    ], Skustock.prototype, "sp3");
    __decorate([
        typeorm_1.Column({ comment: '展示图片', length: 255 }),
        swagger_1.ApiProperty({ description: '展示图片' })
    ], Skustock.prototype, "pic");
    __decorate([
        typeorm_1.Column({ comment: '销量', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '销量' })
    ], Skustock.prototype, "sale");
    __decorate([
        typeorm_1.Column({ comment: '单品促销价格', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '单品促销价格' })
    ], Skustock.prototype, "promotionPrice");
    __decorate([
        typeorm_1.Column({ comment: '锁定库存', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '锁定库存' })
    ], Skustock.prototype, "lockStock");
    __decorate([
        typeorm_1.OneToMany(function () { return orderitem_entity_1.Orderitem; }, function (orderitem) { return orderitem.productSku; })
    ], Skustock.prototype, "orderitems");
    Skustock = __decorate([
        typeorm_1.Entity('skustock')
    ], Skustock);
    return Skustock;
}(base_entity_1.Base));
exports.Skustock = Skustock;
