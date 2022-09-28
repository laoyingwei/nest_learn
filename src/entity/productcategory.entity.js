"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.type = exports.Category = void 0;
var swagger_1 = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var orderitem_entity_1 = require("./orderitem.entity");
var product_entity_1 = require("./product.entity");
var productattribute_entity_1 = require("./productattribute.entity");
var Category = /** @class */ (function () {
    function Category() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        swagger_1.ApiProperty({ description: 'id' })
    ], Category.prototype, "id");
    __decorate([
        typeorm_1.Column({ comment: '名称', nullable: true }),
        swagger_1.ApiProperty({ description: '名称' })
    ], Category.prototype, "name");
    __decorate([
        typeorm_1.Column({ comment: '等级 0 一级 1 二级', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '等级' })
    ], Category.prototype, "level");
    __decorate([
        typeorm_1.Column({ comment: '商品数量', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '商品数量' })
    ], Category.prototype, "productCount");
    __decorate([
        typeorm_1.Column({ comment: '商品单位', type: 'varchar', nullable: true, length: 64 }),
        swagger_1.ApiProperty({ description: '商品单位' })
    ], Category.prototype, "productUnit");
    __decorate([
        typeorm_1.Column({ comment: '是否显示在导航栏：0->不显示；1->显示', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '是否显示在导航栏：0->不显示；1->显示' })
    ], Category.prototype, "navStatus");
    __decorate([
        typeorm_1.Column({ comment: '显示状态：0->不显示；1->显示', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '显示状态：0->不显示；1->显示' })
    ], Category.prototype, "showStatus");
    __decorate([
        typeorm_1.Column({ comment: '排序', type: 'int' }),
        swagger_1.ApiProperty({ description: '排序' })
    ], Category.prototype, "sort");
    __decorate([
        typeorm_1.Column({ comment: '图标', type: 'varchar' }),
        swagger_1.ApiProperty({ description: '图标' })
    ], Category.prototype, "icon");
    __decorate([
        typeorm_1.Column({ comment: '关键字', type: 'varchar', length: 250 }),
        swagger_1.ApiProperty({ description: '关键字' })
    ], Category.prototype, "keywords");
    __decorate([
        typeorm_1.Column({ comment: '描述', type: 'text' }),
        swagger_1.ApiProperty({ description: '描述' })
    ], Category.prototype, "text");
    __decorate([
        typeorm_1.TreeChildren()
    ], Category.prototype, "children");
    __decorate([
        typeorm_1.TreeParent()
    ], Category.prototype, "parent");
    __decorate([
        swagger_1.ApiProperty({ description: '创建时间' }),
        typeorm_1.CreateDateColumn({ comment: '创建时间', type: 'datetime' })
    ], Category.prototype, "createTime");
    __decorate([
        swagger_1.ApiProperty({ description: '更新时间' }),
        typeorm_1.CreateDateColumn({ comment: '更新时间', type: 'datetime' })
    ], Category.prototype, "updateTime");
    __decorate([
        typeorm_1.ManyToMany(function () { return productattribute_entity_1.Attribute; }),
        typeorm_1.JoinTable()
    ], Category.prototype, "attributes");
    __decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.Product; }, function (product) { return product.category; })
    ], Category.prototype, "products");
    __decorate([
        typeorm_1.OneToMany(function () { return orderitem_entity_1.Orderitem; }, function (orderitem) { return orderitem.category; })
    ], Category.prototype, "orderitems");
    Category = __decorate([
        typeorm_1.Entity('category', { name: '商品分类表' }),
        typeorm_1.Tree('closure-table')
    ], Category);
    return Category;
}());
exports.Category = Category;
var type;
(function (type) {
    type[type["have"] = 1] = "have";
    type[type["no"] = 0] = "no";
})(type = exports.type || (exports.type = {}));
