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
exports.Orderoperatehistory = exports.orderStatus = void 0;
var swagger_1 = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var order_entity_1 = require("./order.entity");
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["noPay"] = 0] = "noPay";
    orderStatus[orderStatus["noDeliver"] = 1] = "noDeliver";
    orderStatus[orderStatus["deliver"] = 2] = "deliver";
    orderStatus[orderStatus["success"] = 3] = "success";
    orderStatus[orderStatus["close"] = 4] = "close";
    orderStatus[orderStatus["invalid"] = 5] = "invalid";
})(orderStatus = exports.orderStatus || (exports.orderStatus = {}));
var Orderoperatehistory = /** @class */ (function (_super) {
    __extends(Orderoperatehistory, _super);
    function Orderoperatehistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return order_entity_1.Order; }, function (order) { return order.orderoperatehistorys; })
    ], Orderoperatehistory.prototype, "orderId");
    __decorate([
        typeorm_1.Column({ comment: '操作人：用户；系统；后台管理员', length: 100 }),
        swagger_1.ApiProperty({ description: '操作人：用户；系统；后台管理员' })
    ], Orderoperatehistory.prototype, "operateMan");
    __decorate([
        typeorm_1.Column({ comment: '订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单', type: 'int', "default": orderStatus.noPay }),
        swagger_1.ApiProperty({ description: '订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单' })
    ], Orderoperatehistory.prototype, "orderStatus");
    __decorate([
        typeorm_1.Column({ comment: '备注', length: 500 }),
        swagger_1.ApiProperty({ description: '备注' })
    ], Orderoperatehistory.prototype, "note");
    Orderoperatehistory = __decorate([
        typeorm_1.Entity('orderoperatehistory', { name: '订单操作记录表' })
    ], Orderoperatehistory);
    return Orderoperatehistory;
}(base_entity_1.Base));
exports.Orderoperatehistory = Orderoperatehistory;
// order_id             bigint comment '订单id',
// operate_man          varchar(100) comment '操作人：用户；系统；后台管理员',
// create_time          datetime comment '操作时间',
// order_status         int(1) comment '订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单',
// note                 varchar(500) comment '备注',
