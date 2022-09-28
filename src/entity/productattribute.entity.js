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
exports.Attribute = exports.typeEnum = exports.handAddStatusEnum = exports.relatedStatusEnum = exports.searchTypeEnum = exports.filterTypeEnum = exports.inputTypeEnum = exports.selectTypeEnum = void 0;
var swagger_1 = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var productattributecategory_entity_1 = require("./productattributecategory.entity");
var productcategory_entity_1 = require("./productcategory.entity");
var selectTypeEnum;
(function (selectTypeEnum) {
    selectTypeEnum[selectTypeEnum["only"] = 0] = "only";
    selectTypeEnum[selectTypeEnum["single"] = 1] = "single";
    selectTypeEnum[selectTypeEnum["many"] = 2] = "many";
})(selectTypeEnum = exports.selectTypeEnum || (exports.selectTypeEnum = {}));
var inputTypeEnum;
(function (inputTypeEnum) {
    inputTypeEnum[inputTypeEnum["manual"] = 0] = "manual";
    inputTypeEnum[inputTypeEnum["list"] = 1] = "list";
})(inputTypeEnum = exports.inputTypeEnum || (exports.inputTypeEnum = {}));
var filterTypeEnum;
(function (filterTypeEnum) {
    filterTypeEnum[filterTypeEnum["ordinary"] = 0] = "ordinary";
    filterTypeEnum[filterTypeEnum["color"] = 1] = "color";
})(filterTypeEnum = exports.filterTypeEnum || (exports.filterTypeEnum = {}));
var searchTypeEnum;
(function (searchTypeEnum) {
    searchTypeEnum[searchTypeEnum["no"] = 0] = "no";
    searchTypeEnum[searchTypeEnum["keyword"] = 1] = "keyword";
    searchTypeEnum[searchTypeEnum["range"] = 2] = "range";
})(searchTypeEnum = exports.searchTypeEnum || (exports.searchTypeEnum = {}));
var relatedStatusEnum;
(function (relatedStatusEnum) {
    relatedStatusEnum[relatedStatusEnum["no"] = 0] = "no";
    relatedStatusEnum[relatedStatusEnum["yes"] = 1] = "yes";
})(relatedStatusEnum = exports.relatedStatusEnum || (exports.relatedStatusEnum = {}));
var handAddStatusEnum;
(function (handAddStatusEnum) {
    handAddStatusEnum[handAddStatusEnum["no"] = 0] = "no";
    handAddStatusEnum[handAddStatusEnum["yes"] = 1] = "yes";
})(handAddStatusEnum = exports.handAddStatusEnum || (exports.handAddStatusEnum = {}));
var typeEnum;
(function (typeEnum) {
    typeEnum[typeEnum["spec"] = 0] = "spec";
    typeEnum[typeEnum["parameter"] = 1] = "parameter";
})(typeEnum = exports.typeEnum || (exports.typeEnum = {}));
var Attribute = /** @class */ (function (_super) {
    __extends(Attribute, _super);
    function Attribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column({ comment: "名称", length: 64 }),
        swagger_1.ApiProperty({ description: '名称' })
    ], Attribute.prototype, "name");
    __decorate([
        typeorm_1.Column({ comment: '属性选择类型 0 -> 唯一; 1->单选;2->多选对应属性和参数', "default": selectTypeEnum.only }),
        swagger_1.ApiProperty({ description: '属性选择类型 0 -> 唯一; 1->单选;2->多选对应属性和参数' })
    ], Attribute.prototype, "selectType");
    __decorate([
        typeorm_1.Column({ comment: '属性选择类型 0 -> 唯一; 1->单选;2->多选对应属性和参数', "default": inputTypeEnum.manual }),
        swagger_1.ApiProperty({ description: '属性选择类型 0 -> 唯一; 1->单选;2->多选对应属性和参数' })
    ], Attribute.prototype, "inputType");
    __decorate([
        typeorm_1.Column({ comment: '可选值列表,以逗号隔开', length: 255 }),
        swagger_1.ApiProperty({ description: '可选值列表,以逗号隔开' })
    ], Attribute.prototype, "inputList");
    __decorate([
        typeorm_1.Column({ comment: '排序', type: 'int' }),
        swagger_1.ApiProperty({ description: '排序' })
    ], Attribute.prototype, "sort");
    __decorate([
        typeorm_1.Column({ comment: '分类筛选样式 0-> 普通 1-> 颜色', "default": filterTypeEnum.ordinary }),
        swagger_1.ApiProperty({ description: '分类筛选样式 0-> 普通 1-> 颜色' })
    ], Attribute.prototype, "filterType");
    __decorate([
        typeorm_1.Column({ comment: '检索类型; 0 -> 不需要进行检索 1 -> 关键字检索 2-> 范围搜索', "default": searchTypeEnum.no }),
        swagger_1.ApiProperty({ description: '检索类型; 0 -> 不需要进行检索 1 -> 关键字检索 2-> 范围搜索' })
    ], Attribute.prototype, "searchType");
    __decorate([
        typeorm_1.Column({ comment: '相同属性产品是否关联; 0->不关联;1->关联', "default": relatedStatusEnum.no }),
        swagger_1.ApiProperty({ description: '相同属性产品是否关联; 0->不关联;1->关联' })
    ], Attribute.prototype, "relatedStatus");
    __decorate([
        typeorm_1.Column({ comment: '是否支持手动新增; 0->不支持;1-> 支持', "default": handAddStatusEnum.no }),
        swagger_1.ApiProperty({ description: '是否支持手动新增; 0->不支持;1-> 支持' })
    ], Attribute.prototype, "handAddStatus");
    __decorate([
        typeorm_1.Column({ comment: '属性的类型; 0->规格;1-> 参数', "default": typeEnum.spec }),
        swagger_1.ApiProperty({ description: '属性的类型; 0->规格;1-> 参数' })
    ], Attribute.prototype, "type");
    __decorate([
        typeorm_1.ManyToMany(function () { return productcategory_entity_1.Category; })
    ], Attribute.prototype, "categories");
    __decorate([
        typeorm_1.ManyToOne(function () { return productattributecategory_entity_1.Attributecategory; }, function (attributecategory) { return attributecategory.attributes; }),
        swagger_1.ApiProperty({ description: '商品属性分类id' })
    ], Attribute.prototype, "productAttributeCategoryId");
    Attribute = __decorate([
        typeorm_1.Entity('attribute', { name: '商品属性表' })
    ], Attribute);
    return Attribute;
}(base_entity_1.Base));
exports.Attribute = Attribute;
