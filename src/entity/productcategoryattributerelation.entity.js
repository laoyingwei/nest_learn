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
exports.Categoryattributerelation = void 0;
var swagger_1 = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var Categoryattributerelation = /** @class */ (function (_super) {
    __extends(Categoryattributerelation, _super);
    function Categoryattributerelation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column({ comment: '商品分类id' }),
        swagger_1.ApiProperty({ description: '商品分类id' })
    ], Categoryattributerelation.prototype, "productCategoryId");
    __decorate([
        typeorm_1.Column({ comment: '商品属性id' }),
        swagger_1.ApiProperty({ description: '商品属性id' })
    ], Categoryattributerelation.prototype, "productAttributeId");
    Categoryattributerelation = __decorate([
        typeorm_1.Entity('categoryattributerelation', { name: '商品分类和属性的关系表' })
    ], Categoryattributerelation);
    return Categoryattributerelation;
}(base_entity_1.Base));
exports.Categoryattributerelation = Categoryattributerelation;
