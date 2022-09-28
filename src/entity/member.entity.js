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
exports.Member = exports.sourceTypes = exports.genderTypes = exports.status = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var memberlevel_entity_1 = require("./memberlevel.entity");
var memeberreceiveaddress_entity_1 = require("./memeberreceiveaddress.entity");
var order_entity_1 = require("./order.entity");
var status;
(function (status) {
    status[status["no"] = 0] = "no";
    status[status["yes"] = 1] = "yes";
})(status = exports.status || (exports.status = {}));
var genderTypes;
(function (genderTypes) {
    genderTypes[genderTypes["male"] = 0] = "male";
    genderTypes[genderTypes["girl"] = 1] = "girl";
})(genderTypes = exports.genderTypes || (exports.genderTypes = {}));
var sourceTypes;
(function (sourceTypes) {
    sourceTypes[sourceTypes["weixin"] = 0] = "weixin";
    sourceTypes[sourceTypes["admin"] = 1] = "admin";
})(sourceTypes = exports.sourceTypes || (exports.sourceTypes = {}));
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.OneToOne(function (type) { return memberlevel_entity_1.Memberlevel; }),
        typeorm_1.JoinColumn()
    ], Member.prototype, "memberlevel");
    __decorate([
        typeorm_1.Column({ comment: '用户名称', length: 64, nullable: true }),
        swagger_1.ApiProperty({ description: '用户名称' })
    ], Member.prototype, "userName");
    __decorate([
        typeorm_1.Column({ comment: '用户密码', nullable: true }),
        swagger_1.ApiProperty({ description: '用户密码' })
    ], Member.prototype, "password");
    __decorate([
        typeorm_1.Column({ comment: '用户昵称', length: 64, nullable: true }),
        swagger_1.ApiProperty({ description: '用户昵称' })
    ], Member.prototype, "nickName");
    __decorate([
        typeorm_1.Column({ comment: '电话号码', length: 64, nullable: true }),
        swagger_1.ApiProperty({ description: '电话号码' })
    ], Member.prototype, "phone");
    __decorate([
        typeorm_1.Column({ comment: '状态', "default": status.yes }),
        swagger_1.ApiProperty({ description: '状态' })
    ], Member.prototype, "status");
    __decorate([
        typeorm_1.Column({ comment: '头像', length: 500, nullable: true }),
        swagger_1.ApiProperty({ description: '头像' })
    ], Member.prototype, "icon");
    __decorate([
        typeorm_1.Column({ comment: '性别', type: 'int', "default": genderTypes.male }),
        swagger_1.ApiProperty({ description: '性别' })
    ], Member.prototype, "gender");
    __decorate([
        typeorm_1.Column({ comment: '生日', type: 'date', nullable: true }),
        swagger_1.ApiProperty({ description: '生日' })
    ], Member.prototype, "birthday");
    __decorate([
        typeorm_1.Column({ comment: '城市', length: 64, nullable: true }),
        swagger_1.ApiProperty({ description: '城市' })
    ], Member.prototype, "city");
    __decorate([
        typeorm_1.Column({ comment: '工作', length: 100, nullable: true }),
        swagger_1.ApiProperty({ description: '工作' })
    ], Member.prototype, "job");
    __decorate([
        typeorm_1.Column({ comment: '个性签名', length: 200, nullable: true }),
        swagger_1.ApiProperty({ description: '个性签名' })
    ], Member.prototype, "personnalizedSignature");
    __decorate([
        typeorm_1.Column({ comment: '来源', type: 'int', "default": sourceTypes.weixin }),
        swagger_1.ApiProperty({ description: '来源' })
    ], Member.prototype, "sourceType");
    __decorate([
        typeorm_1.Column({ comment: '积分', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '积分' })
    ], Member.prototype, "integration");
    __decorate([
        typeorm_1.Column({ comment: '成长值', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '成长值' })
    ], Member.prototype, "growth");
    __decorate([
        typeorm_1.Column({ comment: '消费积分', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '消费积分' })
    ], Member.prototype, "historyIntegration");
    __decorate([
        typeorm_1.Column({ comment: '消费次数', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '消费次数' })
    ], Member.prototype, "luckeyCount");
    __decorate([
        typeorm_1.Column({ comment: '微信小程序openId' }),
        class_transformer_1.Exclude(),
        swagger_1.ApiProperty({ description: '微信小程序openId' })
    ], Member.prototype, "openId");
    __decorate([
        typeorm_1.Column({ comment: '微信小程序session_key' }),
        class_transformer_1.Exclude(),
        swagger_1.ApiProperty({ description: '微信小程序session_key' })
    ], Member.prototype, "sessionKey");
    __decorate([
        typeorm_1.OneToMany(function () { return order_entity_1.Order; }, function (order) { return order.member; })
    ], Member.prototype, "orders");
    __decorate([
        typeorm_1.OneToMany(function () { return memeberreceiveaddress_entity_1.Memeberreceiveaddress; }, function (memeberreceiveaddress) { return memeberreceiveaddress.member; })
    ], Member.prototype, "address");
    Member = __decorate([
        typeorm_1.Entity('member', { name: '会员表' })
    ], Member);
    return Member;
}(base_entity_1.Base));
exports.Member = Member;
