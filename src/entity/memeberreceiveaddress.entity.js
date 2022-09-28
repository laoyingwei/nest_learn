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
exports.Memeberreceiveaddress = void 0;
var swagger_1 = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var member_entity_1 = require("./member.entity");
var Memeberreceiveaddress = /** @class */ (function (_super) {
    __extends(Memeberreceiveaddress, _super);
    function Memeberreceiveaddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return member_entity_1.Member; }, function (member) { return member.address; })
    ], Memeberreceiveaddress.prototype, "member");
    __decorate([
        typeorm_1.Column({
            comment: '姓名',
            length: 100
        }),
        swagger_1.ApiProperty({ description: '姓名' })
    ], Memeberreceiveaddress.prototype, "name");
    __decorate([
        typeorm_1.Column({
            comment: '电话号码',
            length: 64
        }),
        swagger_1.ApiProperty({ description: '电话号码' })
    ], Memeberreceiveaddress.prototype, "phoneNumber");
    __decorate([
        typeorm_1.Column({
            comment: '是否删除 0 删除 1 未删除',
            type: 'int',
            "default": 1
        })
    ], Memeberreceiveaddress.prototype, "defaultStatus");
    __decorate([
        typeorm_1.Column({
            comment: '邮政编码',
            length: 100
        }),
        swagger_1.ApiProperty({ description: '邮政编码' })
    ], Memeberreceiveaddress.prototype, "postCode");
    __decorate([
        typeorm_1.Column({
            comment: '省',
            length: 100
        }),
        swagger_1.ApiProperty({ description: '省' })
    ], Memeberreceiveaddress.prototype, "province");
    __decorate([
        typeorm_1.Column({
            comment: '市',
            length: 100
        }),
        swagger_1.ApiProperty({ description: '市' })
    ], Memeberreceiveaddress.prototype, "city");
    __decorate([
        typeorm_1.Column({
            comment: '区',
            length: 100
        }),
        swagger_1.ApiProperty({ description: '区' })
    ], Memeberreceiveaddress.prototype, "region");
    __decorate([
        typeorm_1.Column({
            comment: '详细地址',
            length: 128
        }),
        swagger_1.ApiProperty({ description: '详细地址' })
    ], Memeberreceiveaddress.prototype, "detailAddress");
    Memeberreceiveaddress = __decorate([
        typeorm_1.Entity('memeberreceiveaddress')
    ], Memeberreceiveaddress);
    return Memeberreceiveaddress;
}(base_entity_1.Base));
exports.Memeberreceiveaddress = Memeberreceiveaddress;
