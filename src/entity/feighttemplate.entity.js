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
exports.Feighttemplate = exports.chargeTypes = void 0;
var swagger_1 = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var product_entity_1 = require("./product.entity");
var chargeTypes;
(function (chargeTypes) {
    chargeTypes[chargeTypes["num"] = 0] = "num";
    chargeTypes[chargeTypes["weight"] = 1] = "weight";
})(chargeTypes = exports.chargeTypes || (exports.chargeTypes = {}));
var Feighttemplate = /** @class */ (function (_super) {
    __extends(Feighttemplate, _super);
    function Feighttemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column({ comment: '运费模板名称', length: 64 }),
        swagger_1.ApiProperty({ description: '运费模板名称' })
    ], Feighttemplate.prototype, "name");
    __decorate([
        typeorm_1.Column({ comment: '计价方式 0 ->计件 1->计重', "default": chargeTypes.num }),
        swagger_1.ApiProperty({ description: '计价方式 0 ->计件 1->计重' })
    ], Feighttemplate.prototype, "chargeType");
    __decorate([
        typeorm_1.Column({ comment: '默认重量', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '默认重量' })
    ], Feighttemplate.prototype, "firstWeight");
    __decorate([
        typeorm_1.Column({ comment: '默认运费', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '默认运费' })
    ], Feighttemplate.prototype, "firstFee");
    __decorate([
        typeorm_1.Column({ comment: '每增加重量', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '每增加重量' })
    ], Feighttemplate.prototype, "continueWeight");
    __decorate([
        typeorm_1.Column({ comment: '每增加重量增加的运费运费', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '每增加重量增加的运费运费' })
    ], Feighttemplate.prototype, "continueFee");
    __decorate([
        typeorm_1.Column({ comment: '备注', length: 500 }),
        swagger_1.ApiProperty({ description: '备注' })
    ], Feighttemplate.prototype, "note");
    __decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.Product; }, function (skustock) { return skustock.feightTemplate; })
    ], Feighttemplate.prototype, "products");
    Feighttemplate = __decorate([
        typeorm_1.Entity('feighttemplate', { name: '运费模板' })
    ], Feighttemplate);
    return Feighttemplate;
}(base_entity_1.Base));
exports.Feighttemplate = Feighttemplate;
