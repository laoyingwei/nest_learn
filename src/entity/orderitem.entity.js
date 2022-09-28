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
exports.Orderitem = void 0;
var swagger_1 = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var order_entity_1 = require("./order.entity");
var product_entity_1 = require("./product.entity");
var productcategory_entity_1 = require("./productcategory.entity");
var skustock_entity_1 = require("./skustock.entity");
var Orderitem = /** @class */ (function (_super) {
    __extends(Orderitem, _super);
    function Orderitem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return order_entity_1.Order; }, function (order) { return order.orderitems; })
    ], Orderitem.prototype, "order");
    __decorate([
        typeorm_1.Column({ comment: '订单编号', length: 64 }),
        swagger_1.ApiProperty({ description: '订单编号' })
    ], Orderitem.prototype, "orderSn");
    __decorate([
        typeorm_1.ManyToOne(function () { return product_entity_1.Product; }, function (product) { return product.orderitems; })
    ], Orderitem.prototype, "product");
    __decorate([
        typeorm_1.Column({ comment: '商品图片', length: 500 }),
        swagger_1.ApiProperty({ description: '商品图片' })
    ], Orderitem.prototype, "productPic");
    __decorate([
        typeorm_1.Column({ comment: '商品名称', length: 200 }),
        swagger_1.ApiProperty({ description: '商品名称' })
    ], Orderitem.prototype, "productName");
    __decorate([
        typeorm_1.Column({ comment: '商品品牌', length: 200 }),
        swagger_1.ApiProperty({ description: '商品品牌' })
    ], Orderitem.prototype, "productBrand");
    __decorate([
        typeorm_1.Column({ comment: '商品条码', length: 64 }),
        swagger_1.ApiProperty({ description: '商品条码' })
    ], Orderitem.prototype, "productSn");
    __decorate([
        typeorm_1.Column({ comment: '销售价格', type: 'decimal', precision: 10, scale: 2 }),
        swagger_1.ApiProperty({ description: '销售价格' })
    ], Orderitem.prototype, "productPrice");
    __decorate([
        typeorm_1.Column({ comment: '购买数量', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '购买数量' })
    ], Orderitem.prototype, "productQuantity");
    __decorate([
        typeorm_1.ManyToOne(function () { return skustock_entity_1.Skustock; }, function (skustock) { return skustock.orderitems; })
    ], Orderitem.prototype, "productSku");
    __decorate([
        typeorm_1.Column({ comment: '商品sku条码', length: 50 }),
        swagger_1.ApiProperty({ description: '商品sku条码' })
    ], Orderitem.prototype, "productSkuCode");
    __decorate([
        typeorm_1.ManyToOne(function () { return productcategory_entity_1.Category; }, function (category) { return category.orderitems; })
    ], Orderitem.prototype, "category");
    __decorate([
        typeorm_1.Column({ comment: '商品属性1', length: 100 }),
        swagger_1.ApiProperty({ description: '商品属性1' })
    ], Orderitem.prototype, "sp1");
    __decorate([
        typeorm_1.Column({ comment: '商品属性2', length: 100 }),
        swagger_1.ApiProperty({ description: '商品属性2' })
    ], Orderitem.prototype, "sp2");
    __decorate([
        typeorm_1.Column({ comment: '商品属性3', length: 100 }),
        swagger_1.ApiProperty({ description: '商品属性3' })
    ], Orderitem.prototype, "sp3");
    __decorate([
        typeorm_1.Column({ comment: '商品促销名称', length: 100, nullable: true }),
        swagger_1.ApiProperty({ description: '商品促销名称' })
    ], Orderitem.prototype, "promotionName");
    __decorate([
        typeorm_1.Column({ comment: '商品促销分解金额', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '商品促销分解金额' })
    ], Orderitem.prototype, "promotionAmount");
    __decorate([
        typeorm_1.Column({ comment: '优惠券优惠分解金额', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '优惠券优惠分解金额' })
    ], Orderitem.prototype, "couponAmount");
    __decorate([
        typeorm_1.Column({ comment: '积分优惠分解金额', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '积分优惠分解金额' })
    ], Orderitem.prototype, "integrationAmount");
    __decorate([
        typeorm_1.Column({
            comment: '该商品经过优惠后的分解金额',
            type: 'decimal',
            precision: 10,
            scale: 2,
            "default": 0
        }),
        swagger_1.ApiProperty({ description: '该商品经过优惠后的分解金额' })
    ], Orderitem.prototype, "realAmount");
    __decorate([
        typeorm_1.Column({ comment: '商品赠送积分', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '商品赠送积分' })
    ], Orderitem.prototype, "giftIntegration");
    __decorate([
        typeorm_1.Column({ comment: '商品赠送成长值', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '商品赠送成长值' })
    ], Orderitem.prototype, "giftGrowth");
    __decorate([
        typeorm_1.Column({
            comment: '商品销售属性[{"key":"颜色","value":"颜色"},{"key":"容量","value":"4G"}]',
            length: 500
        }),
        swagger_1.ApiProperty({
            description: '商品销售属性 [{"key":"颜色","value":"颜色"},{"key":"容量","value":"4G"}] '
        })
    ], Orderitem.prototype, "productAttr");
    Orderitem = __decorate([
        typeorm_1.Entity('orderitem', { name: '订单商品信息表' })
    ], Orderitem);
    return Orderitem;
}(base_entity_1.Base));
exports.Orderitem = Orderitem;
