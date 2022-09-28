"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Role = void 0;
var typeorm_1 = require("typeorm");
var swagger_1 = require("@nestjs/swagger");
var Role = /** @class */ (function () {
    function Role() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Role.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        swagger_1.ApiProperty({ description: '角色编号', required: true })
    ], Role.prototype, "no");
    __decorate([
        typeorm_1.Column(),
        swagger_1.ApiProperty({ description: '角色名称', required: true })
    ], Role.prototype, "name");
    Role = __decorate([
        typeorm_1.Entity('role')
    ], Role);
    return Role;
}());
exports.Role = Role;
