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
exports.Productcomment = exports.showStatus = exports.startType = void 0;
var swagger_1 = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var product_entity_1 = require("./product.entity");
var productcommentreplay_entity_1 = require("./productcommentreplay.entity");
var startType;
(function (startType) {
    startType[startType["zero"] = 0] = "zero";
    startType[startType["one"] = 1] = "one";
    startType[startType["two"] = 2] = "two";
    startType[startType["three"] = 3] = "three";
    startType[startType["four"] = 4] = "four";
    startType[startType["five"] = 5] = "five";
})(startType = exports.startType || (exports.startType = {}));
var showStatus;
(function (showStatus) {
    showStatus[showStatus["no"] = 0] = "no";
    showStatus[showStatus["yes"] = 1] = "yes";
})(showStatus = exports.showStatus || (exports.showStatus = {}));
var Productcomment = /** @class */ (function (_super) {
    __extends(Productcomment, _super);
    function Productcomment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return product_entity_1.Product; }, function (product) { return product.ladders; }),
        swagger_1.ApiProperty({ description: '商品id' })
    ], Productcomment.prototype, "productId");
    __decorate([
        typeorm_1.Column({ comment: '会员名称', length: 255 }),
        swagger_1.ApiProperty({ description: '会员名称' })
    ], Productcomment.prototype, "memberNickName");
    __decorate([
        typeorm_1.Column({ comment: '商品名称', length: 255 }),
        swagger_1.ApiProperty({ description: '商品名称' })
    ], Productcomment.prototype, "productName");
    __decorate([
        typeorm_1.Column({ comment: '评分星数', type: 'int', "default": startType.three }),
        swagger_1.ApiProperty({ description: '评分星数' })
    ], Productcomment.prototype, "start");
    __decorate([
        typeorm_1.Column({ comment: '评价的ip', length: 64 }),
        swagger_1.ApiProperty({ description: '评价的ip' })
    ], Productcomment.prototype, "memberIp");
    __decorate([
        typeorm_1.Column({ comment: '是否显示', type: 'int', "default": showStatus.no }),
        swagger_1.ApiProperty({ description: '是否显示' })
    ], Productcomment.prototype, "showStatus");
    __decorate([
        typeorm_1.Column({ comment: '购买时的商品属性', length: 255 }),
        swagger_1.ApiProperty({ description: '购买时的商品属性' })
    ], Productcomment.prototype, "productAttribute");
    __decorate([
        typeorm_1.Column({ comment: '收藏数', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '收藏数' })
    ], Productcomment.prototype, "collectCount");
    __decorate([
        typeorm_1.Column({ comment: '阅读数', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '阅读数' })
    ], Productcomment.prototype, "readCount");
    __decorate([
        typeorm_1.Column({ comment: '内容', type: 'text' }),
        swagger_1.ApiProperty({ description: '内容' })
    ], Productcomment.prototype, "content");
    __decorate([
        typeorm_1.Column({ comment: '上传图片的地址，以逗号隔开', length: 1000 }),
        swagger_1.ApiProperty({ description: '上传图片的地址，以逗号隔开' })
    ], Productcomment.prototype, "pics");
    __decorate([
        typeorm_1.Column({ comment: '评论用户头像', length: 255 }),
        swagger_1.ApiProperty({ description: '评论用户头像' })
    ], Productcomment.prototype, "memberIcon");
    __decorate([
        typeorm_1.Column({ comment: '回复数', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '回复数' })
    ], Productcomment.prototype, "replayCount");
    __decorate([
        typeorm_1.OneToMany(function () { return productcommentreplay_entity_1.Productcommentreplay; }, function (productcomment) { return productcomment.commentId; })
    ], Productcomment.prototype, "productcommentreplays");
    Productcomment = __decorate([
        typeorm_1.Entity('productcomment', { name: '商品评价表' })
    ], Productcomment);
    return Productcomment;
}(base_entity_1.Base));
exports.Productcomment = Productcomment;
