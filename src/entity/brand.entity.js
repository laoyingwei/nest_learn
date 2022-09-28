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
exports.Brand = exports.statusTypes = void 0;
var typeorm_1 = require("typeorm");
var swagger_1 = require("@nestjs/swagger");
var base_entity_1 = require("./base.entity");
var class_validator_1 = require("class-validator");
var product_entity_1 = require("./product.entity");
var statusTypes;
(function (statusTypes) {
    statusTypes[statusTypes["yes"] = 1] = "yes";
    statusTypes[statusTypes["no"] = 0] = "no";
})(statusTypes = exports.statusTypes || (exports.statusTypes = {}));
var Brand = /** @class */ (function (_super) {
    __extends(Brand, _super);
    function Brand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column({ length: 64, comment: '品牌名称' }),
        class_validator_1.IsNotEmpty({ message: "名称不能为空" }),
        swagger_1.ApiProperty({ description: '品牌名称' })
    ], Brand.prototype, "name");
    __decorate([
        typeorm_1.Column({ length: 8, comment: '首字母' }),
        swagger_1.ApiProperty({ description: '首字母' })
    ], Brand.prototype, "firstLetter");
    __decorate([
        typeorm_1.Column({ type: "int", comment: '排序' }),
        swagger_1.ApiProperty({ description: '排序' })
    ], Brand.prototype, "sort");
    __decorate([
        typeorm_1.Column({ type: "int", comment: '是否为品牌制造商 0 -> 不是; 1 -> 是', "default": 0 }),
        swagger_1.ApiProperty({ description: '是否为品牌制造商 0 -> 不是; 1 -> 是' })
    ], Brand.prototype, "factoryStatus");
    __decorate([
        typeorm_1.Column({ comment: '显示状态：0->不显示；1->显示', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '显示状态：0->不显示；1->显示' })
    ], Brand.prototype, "showStatus");
    __decorate([
        typeorm_1.Column({ comment: '产品数量', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '产品数量' })
    ], Brand.prototype, "productCount");
    __decorate([
        typeorm_1.Column({ comment: '产品评论数量', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '产品评论数量' })
    ], Brand.prototype, "productCommentCount");
    __decorate([
        typeorm_1.Column({ length: 255, comment: '品牌logo' }),
        swagger_1.ApiProperty({ description: '品牌logo' })
    ], Brand.prototype, "logo");
    __decorate([
        typeorm_1.Column({ length: 255, comment: '专区大图' }),
        swagger_1.ApiProperty({ description: '专区大图' })
    ], Brand.prototype, "bigPic");
    __decorate([
        typeorm_1.Column({ type: 'text', comment: '品牌故事' }),
        swagger_1.ApiProperty({ description: '品牌故事' })
    ], Brand.prototype, "brandStory");
    __decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.Product; }, function (product) { return product.brand; })
    ], Brand.prototype, "products");
    Brand = __decorate([
        typeorm_1.Entity('brand')
    ], Brand);
    return Brand;
}(base_entity_1.Base));
exports.Brand = Brand;
