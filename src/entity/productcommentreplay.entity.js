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
exports.Productcommentreplay = exports.typeStatus = void 0;
var swagger_1 = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var productcomment_entity_1 = require("./productcomment.entity");
var typeStatus;
(function (typeStatus) {
    typeStatus[typeStatus["vip"] = 0] = "vip";
    typeStatus[typeStatus["admin"] = 1] = "admin";
})(typeStatus = exports.typeStatus || (exports.typeStatus = {}));
var Productcommentreplay = /** @class */ (function (_super) {
    __extends(Productcommentreplay, _super);
    function Productcommentreplay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return productcomment_entity_1.Productcomment; }, function (productcomment) { return productcomment.productcommentreplays; }),
        swagger_1.ApiProperty({ description: '评论id' })
    ], Productcommentreplay.prototype, "commentId");
    __decorate([
        typeorm_1.Column({ comment: '会员昵称', length: 255 }),
        swagger_1.ApiProperty({ description: '会员昵称' })
    ], Productcommentreplay.prototype, "memberNickName");
    __decorate([
        typeorm_1.Column({ comment: '会员头像', length: 255 }),
        swagger_1.ApiProperty({ description: '会员头像' })
    ], Productcommentreplay.prototype, "memberIcon");
    __decorate([
        typeorm_1.Column({ comment: '内容', length: 1000 }),
        swagger_1.ApiProperty({ description: '内容' })
    ], Productcommentreplay.prototype, "content");
    __decorate([
        typeorm_1.Column({ comment: '评论人员类型 0 -> 会员 1-> 管理员', type: 'int', "default": typeStatus.vip }),
        swagger_1.ApiProperty({ description: '评论人员类型' })
    ], Productcommentreplay.prototype, "type");
    Productcommentreplay = __decorate([
        typeorm_1.Entity('productcommentreplay', { name: '商品评价回复表' })
    ], Productcommentreplay);
    return Productcommentreplay;
}(base_entity_1.Base));
exports.Productcommentreplay = Productcommentreplay;
