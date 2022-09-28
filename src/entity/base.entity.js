"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Base = void 0;
var typeorm_1 = require("typeorm");
var swagger_1 = require("@nestjs/swagger");
/**
* 表基类
*/
var Base = /** @class */ (function () {
    function Base() {
    }
    __decorate([
        swagger_1.ApiProperty({ description: 'id' }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Base.prototype, "id");
    __decorate([
        swagger_1.ApiProperty({ description: '创建时间' }),
        typeorm_1.CreateDateColumn({ comment: '创建时间', type: 'datetime' })
    ], Base.prototype, "createTime");
    __decorate([
        swagger_1.ApiProperty({ description: '更新时间' }),
        typeorm_1.CreateDateColumn({ comment: '更新时间', type: 'datetime' })
    ], Base.prototype, "updateTime");
    return Base;
}());
exports.Base = Base;
