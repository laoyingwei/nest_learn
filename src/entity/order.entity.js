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
exports.Order = exports.deleteStatus = exports.confirmStatus = exports.billTypes = exports.orderTypes = exports.statuTypes = exports.sourceTypes = exports.payTypes = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var member_entity_1 = require("./member.entity");
var orderitem_entity_1 = require("./orderitem.entity");
var orderoperatehistory_entity_1 = require("./orderoperatehistory.entity");
var payTypes;
(function (payTypes) {
    payTypes[payTypes["weiixn"] = 2] = "weiixn";
    payTypes[payTypes["zhifubao"] = 1] = "zhifubao";
    payTypes[payTypes["noPay"] = 0] = "noPay";
})(payTypes = exports.payTypes || (exports.payTypes = {}));
var sourceTypes;
(function (sourceTypes) {
    sourceTypes[sourceTypes["pc"] = 0] = "pc";
    sourceTypes[sourceTypes["app"] = 1] = "app";
})(sourceTypes = exports.sourceTypes || (exports.sourceTypes = {}));
// 2->已发货；3->已完成；4->已关闭；5->无效订单
var statuTypes;
(function (statuTypes) {
    statuTypes[statuTypes["noPay"] = 0] = "noPay";
    statuTypes[statuTypes["noDeliver"] = 1] = "noDeliver";
    statuTypes[statuTypes["deliver"] = 2] = "deliver";
    statuTypes[statuTypes["success"] = 3] = "success";
    statuTypes[statuTypes["close"] = 4] = "close";
    statuTypes[statuTypes["invalid"] = 5] = "invalid";
})(statuTypes = exports.statuTypes || (exports.statuTypes = {}));
var orderTypes;
(function (orderTypes) {
    orderTypes[orderTypes["plain"] = 0] = "plain";
    orderTypes[orderTypes["seckill"] = 1] = "seckill";
})(orderTypes = exports.orderTypes || (exports.orderTypes = {}));
var billTypes;
(function (billTypes) {
    billTypes[billTypes["no"] = 0] = "no";
    billTypes[billTypes["electron"] = 1] = "electron";
    billTypes[billTypes["paper"] = 2] = "paper";
})(billTypes = exports.billTypes || (exports.billTypes = {}));
var confirmStatus;
(function (confirmStatus) {
    confirmStatus[confirmStatus["no"] = 0] = "no";
    confirmStatus[confirmStatus["yes"] = 1] = "yes";
})(confirmStatus = exports.confirmStatus || (exports.confirmStatus = {}));
var deleteStatus;
(function (deleteStatus) {
    deleteStatus[deleteStatus["no"] = 0] = "no";
    deleteStatus[deleteStatus["yes"] = 1] = "yes";
})(deleteStatus = exports.deleteStatus || (exports.deleteStatus = {}));
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return member_entity_1.Member; }, function (member) { return member.orders; }),
        swagger_1.ApiProperty({ description: '用户id' }),
        class_validator_1.IsNotEmpty({ message: '用户id不能为空' })
    ], Order.prototype, "member");
    __decorate([
        typeorm_1.Column({ comment: '优惠券id', nullable: true }),
        swagger_1.ApiProperty({ description: '优惠券id' })
    ], Order.prototype, "couponId");
    __decorate([
        typeorm_1.Column({ comment: '订单编号', length: 64 }),
        swagger_1.ApiProperty({ description: '订单编号' })
    ], Order.prototype, "orderSn");
    __decorate([
        typeorm_1.Column({ comment: '用户账号', length: 64 }),
        swagger_1.ApiProperty({ description: '用户账号' })
    ], Order.prototype, "memberUserName");
    __decorate([
        typeorm_1.Column({ comment: '订单总金额', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '订单总金额' })
    ], Order.prototype, "totalAmount");
    __decorate([
        typeorm_1.Column({ comment: '应付金额（实际支付金额）', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '应付金额（实际支付金额）' })
    ], Order.prototype, "payAmount");
    __decorate([
        typeorm_1.Column({ comment: '运费金额', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '运费金额' })
    ], Order.prototype, "freightAmount");
    __decorate([
        typeorm_1.Column({ comment: '促销优化金额（促销价、满减、阶梯价）', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '促销优化金额（促销价、满减、阶梯价）' })
    ], Order.prototype, "promotionAmount");
    __decorate([
        typeorm_1.Column({ comment: '积分抵扣金额', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '积分抵扣金额' })
    ], Order.prototype, "integrationAmount");
    __decorate([
        typeorm_1.Column({ comment: '优惠券抵扣金额', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '优惠券抵扣金额' })
    ], Order.prototype, "couponAmount");
    __decorate([
        typeorm_1.Column({ comment: '管理员后台调整订单使用的折扣金额', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '管理员后台调整订单使用的折扣金额' })
    ], Order.prototype, "discountAmount");
    __decorate([
        typeorm_1.Column({
            comment: '支付方式 0->未支付；1->支付宝；2->微信 ',
            type: 'int',
            "default": payTypes.noPay
        }),
        swagger_1.ApiProperty({ description: '支付方式 0->未支付；1->支付宝；2->微信 ' })
    ], Order.prototype, "payType");
    __decorate([
        typeorm_1.Column({ comment: '订单来源：0->PC订单；1->app订单 ', type: 'int', "default": sourceTypes.app }),
        swagger_1.ApiProperty({ description: '订单来源：0->PC订单；1->app订单 ' })
    ], Order.prototype, "sourceType");
    __decorate([
        typeorm_1.Column({
            comment: '订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单',
            type: 'int',
            "default": statuTypes.noPay
        }),
        swagger_1.ApiProperty({
            description: '订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单'
        })
    ], Order.prototype, "status");
    __decorate([
        typeorm_1.Column({ comment: '订单类型 0->正常订单；1->秒杀订单', "default": orderTypes.plain }),
        swagger_1.ApiProperty({ description: '订单类型 0->正常订单；1->秒杀订单' })
    ], Order.prototype, "orderType");
    __decorate([
        typeorm_1.Column({ comment: '物流公司(配送方式)' }),
        swagger_1.ApiProperty({ description: '物流公司(配送方式)' })
    ], Order.prototype, "deliveryCompany");
    __decorate([
        typeorm_1.Column({ comment: '自动确认(天) 默认五天', type: 'int', "default": 5 }),
        swagger_1.ApiProperty({ description: '自动确认(天) 默认五天' })
    ], Order.prototype, "autoConfirmDay");
    __decorate([
        typeorm_1.Column({ comment: '可以获得的积分', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '可以获得的积分' })
    ], Order.prototype, "integration");
    __decorate([
        typeorm_1.Column({ comment: '可以活动的成长值', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '可以活动的成长值' })
    ], Order.prototype, "growth");
    __decorate([
        typeorm_1.Column({ comment: '活动信息', length: 100, "default": '', nullable: true }),
        swagger_1.ApiProperty({ description: '活动信息' })
    ], Order.prototype, "promotionInfo");
    __decorate([
        typeorm_1.Column({ comment: '发票类型：0->不开发票；1->电子发票；2->纸质发票', "default": billTypes.no }),
        swagger_1.ApiProperty({ description: '发票类型：0->不开发票；1->电子发票；2->纸质发票' })
    ], Order.prototype, "billType");
    __decorate([
        typeorm_1.Column({ comment: '发票抬头', length: 200, nullable: true }),
        swagger_1.ApiProperty({ description: '发票抬头' })
    ], Order.prototype, "billHeader");
    __decorate([
        typeorm_1.Column({ comment: '发票内容', length: 200, nullable: true }),
        swagger_1.ApiProperty({ description: '发票内容' })
    ], Order.prototype, "billContent");
    __decorate([
        typeorm_1.Column({ comment: '收票人电话', length: 32, nullable: true }),
        swagger_1.ApiProperty({ description: '收票人电话' })
    ], Order.prototype, "billReceiverPhone");
    __decorate([
        typeorm_1.Column({ comment: '收票人邮箱', length: 32, nullable: true }),
        swagger_1.ApiProperty({ description: '收票人邮箱' })
    ], Order.prototype, "billReceiverEmail");
    __decorate([
        typeorm_1.Column({ comment: '收票人名字', length: 100, nullable: true }),
        swagger_1.ApiProperty({ description: '收票人名字' })
    ], Order.prototype, "receiverName");
    __decorate([
        typeorm_1.Column({ comment: '收票人电话', length: 32, nullable: true }),
        swagger_1.ApiProperty({ description: '收票人电话' })
    ], Order.prototype, "receiverPhone");
    __decorate([
        typeorm_1.Column({ comment: '收货人邮编', length: 32, nullable: true }),
        swagger_1.ApiProperty({ description: '收货人邮编' })
    ], Order.prototype, "receiverPostCode");
    __decorate([
        typeorm_1.Column({ comment: '收货人电话', length: 32 }),
        swagger_1.ApiProperty({ description: '收货人电话' })
    ], Order.prototype, "receiverPhoneNumber");
    __decorate([
        typeorm_1.Column({ comment: '省份/直辖市', length: 32 }),
        swagger_1.ApiProperty({ description: '省份/直辖市' })
    ], Order.prototype, "receiverProvince");
    __decorate([
        typeorm_1.Column({ comment: '城市', length: 32 }),
        swagger_1.ApiProperty({ description: '城市' })
    ], Order.prototype, "receiverCity");
    __decorate([
        typeorm_1.Column({ comment: '区', length: 32 }),
        swagger_1.ApiProperty({ description: '区' })
    ], Order.prototype, "receiverRegion");
    __decorate([
        typeorm_1.Column({ comment: '详细地址', length: 200 }),
        swagger_1.ApiProperty({ description: '详细地址' })
    ], Order.prototype, "receiverDetailAddress");
    __decorate([
        typeorm_1.Column({ comment: '订单备注', length: 500, nullable: true }),
        swagger_1.ApiProperty({ description: '订单备注' })
    ], Order.prototype, "note");
    __decorate([
        typeorm_1.Column({ comment: '确认收货状态：0->未确认；1->已确认', type: 'int', "default": confirmStatus.no }),
        swagger_1.ApiProperty({ description: '确认收货状态：0->未确认；1->已确认' })
    ], Order.prototype, "confirmStatus");
    __decorate([
        typeorm_1.Column({ comment: '是否删除', type: 'int', "default": deleteStatus.no }),
        swagger_1.ApiProperty({ description: '是否删除' })
    ], Order.prototype, "deleteStatus");
    __decorate([
        typeorm_1.Column({ comment: '下单时使用积分', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '下单时使用积分' })
    ], Order.prototype, "useIntegration");
    __decorate([
        typeorm_1.Column({ comment: '支付时间', type: 'datetime', nullable: true }),
        swagger_1.ApiProperty({ description: '支付时间' })
    ], Order.prototype, "paymentTime");
    __decorate([
        typeorm_1.Column({ comment: '发货时间', type: 'datetime', nullable: true }),
        swagger_1.ApiProperty({ description: '发货时间' })
    ], Order.prototype, "deliveryTime");
    __decorate([
        typeorm_1.Column({ comment: '确认收货时间', type: 'datetime', nullable: true }),
        swagger_1.ApiProperty({ description: '确认收货时间' })
    ], Order.prototype, "receiveTime");
    __decorate([
        typeorm_1.Column({ comment: '评价时间', type: 'datetime', nullable: true }),
        swagger_1.ApiProperty({ description: '评价时间' })
    ], Order.prototype, "commentTime");
    __decorate([
        typeorm_1.OneToMany(function () { return orderitem_entity_1.Orderitem; }, function (orderitem) { return orderitem.order; })
    ], Order.prototype, "orderitems");
    __decorate([
        typeorm_1.OneToMany(function () { return orderoperatehistory_entity_1.Orderoperatehistory; }, function (orderoperatehistory) { return orderoperatehistory.orderId; })
    ], Order.prototype, "orderoperatehistorys");
    Order = __decorate([
        typeorm_1.Entity('order', { name: '订单表' })
    ], Order);
    return Order;
}(base_entity_1.Base));
exports.Order = Order;
