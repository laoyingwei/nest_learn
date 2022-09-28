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
exports.AccountType = exports.User = void 0;
var typeorm_1 = require("typeorm");
var swagger_1 = require("@nestjs/swagger");
var base_entity_1 = require("./base.entity");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column({ comment: '手机号码' }),
        swagger_1.ApiProperty({ description: '手机号码' })
    ], User.prototype, "phone");
    __decorate([
        typeorm_1.Column({ comment: '用户密码' }),
        swagger_1.ApiProperty({ description: '用户密码' })
    ], User.prototype, "password");
    __decorate([
        typeorm_1.Column({ comment: '用户支付密码' }),
        swagger_1.ApiProperty({ description: '用户支付密码' })
    ], User.prototype, "paymentPassword");
    __decorate([
        typeorm_1.Column({ "default": false, comment: '是否锁定' }),
        swagger_1.ApiProperty({ description: '是否锁定' })
    ], User.prototype, "locked");
    __decorate([
        typeorm_1.Column({ "default": '300', comment: '用户角色' }),
        swagger_1.ApiProperty({ description: '用户角色' })
    ], User.prototype, "role");
    __decorate([
        typeorm_1.Column({ comment: '昵称' }),
        swagger_1.ApiProperty({ description: '昵称' })
    ], User.prototype, "nickname");
    __decorate([
        typeorm_1.Column({ comment: '认证名称' }),
        swagger_1.ApiProperty({ description: '认证名称' })
    ], User.prototype, "verifiedName");
    __decorate([
        typeorm_1.Column({ comment: '邮箱' }),
        swagger_1.ApiProperty({ description: '邮箱' })
    ], User.prototype, "email");
    __decorate([
        typeorm_1.Column({ comment: '自身邀请码' }),
        swagger_1.ApiProperty({ description: '自身邀请码' })
    ], User.prototype, "inviteCode");
    __decorate([
        typeorm_1.Column({ comment: '邀请人id', nullable: true }),
        swagger_1.ApiProperty({ description: '邀请人id', nullable: true })
    ], User.prototype, "inviteId");
    __decorate([
        swagger_1.ApiProperty({ description: '管理人id', nullable: true }),
        typeorm_1.Column({ comment: '管理人id', nullable: true })
    ], User.prototype, "manageUserId");
    __decorate([
        typeorm_1.Column({ type: "enum", "enum": ['individual_mainland', 'corp_mainland', 'corp_hk', 'individual_hk'], comment: '账户类型' }),
        swagger_1.ApiProperty({ description: '账户类型' })
    ], User.prototype, "accountType");
    __decorate([
        typeorm_1.Column({ comment: '用户来源', nullable: true }),
        swagger_1.ApiProperty({ description: '用户来源', nullable: true })
    ], User.prototype, "userSource");
    __decorate([
        typeorm_1.Column({ type: 'int', "default": 1, comment: '注册进度' }),
        swagger_1.ApiProperty({ description: '注册进度' })
    ], User.prototype, "signUpProgress");
    __decorate([
        typeorm_1.Column({ comment: '备注', nullable: true }),
        swagger_1.ApiProperty({ description: '备注', nullable: true })
    ], User.prototype, "remarks");
    User = __decorate([
        typeorm_1.Entity('user', { name: "用户表" })
    ], User);
    return User;
}(base_entity_1.Base));
exports.User = User;
var AccountType;
(function (AccountType) {
    AccountType["individual_mainland"] = "individual_mainland";
    AccountType["corp_mainland"] = "corp_mainland";
    AccountType["corp_hk"] = "corp_hk";
    AccountType["individual_hk"] = "individual_hk";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
