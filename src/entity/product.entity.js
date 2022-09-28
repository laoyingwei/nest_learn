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
exports.promotionTypes = exports.PreviewStatus = exports.RerifyStatus = exports.RecommandStatus = exports.NewStatus = exports.DelStatus = exports.Product = exports.PublishStatus = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("./base.entity");
var brand_entity_1 = require("./brand.entity");
var feighttemplate_entity_1 = require("./feighttemplate.entity");
var orderitem_entity_1 = require("./orderitem.entity");
var productattributecategory_entity_1 = require("./productattributecategory.entity");
var productcategory_entity_1 = require("./productcategory.entity");
var productcomment_entity_1 = require("./productcomment.entity");
var productLadder_entity_1 = require("./productLadder.entity");
var skustock_entity_1 = require("./skustock.entity");
var PublishStatus;
(function (PublishStatus) {
    PublishStatus[PublishStatus["yes"] = 1] = "yes";
    PublishStatus[PublishStatus["no"] = 0] = "no";
})(PublishStatus = exports.PublishStatus || (exports.PublishStatus = {}));
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return brand_entity_1.Brand; }, function (brand) { return brand.products; }, {
            eager: true
        }),
        swagger_1.ApiProperty({ description: '品牌id' }),
        class_validator_1.IsNotEmpty({ message: '品牌不能为空' })
    ], Product.prototype, "brand");
    __decorate([
        typeorm_1.ManyToOne(function () { return productcategory_entity_1.Category; }, function (category) { return category.products; }, {
            eager: true
        }),
        swagger_1.ApiProperty({ description: '品牌分类id' }),
        class_validator_1.IsNotEmpty({ message: '品牌分类不能为空' })
    ], Product.prototype, "category");
    __decorate([
        typeorm_1.ManyToOne(function () { return feighttemplate_entity_1.Feighttemplate; }, function (feighttemplate) { return feighttemplate.products; }, {
            eager: true
        }),
        swagger_1.ApiProperty({ description: '运费模板id' }),
        class_validator_1.IsNotEmpty({ message: '运费模板不能为空' })
    ], Product.prototype, "feightTemplate");
    __decorate([
        typeorm_1.ManyToOne(function () { return productattributecategory_entity_1.Attributecategory; }, function (attributecategory) { return attributecategory.products; }, {
            eager: true
        }),
        swagger_1.ApiProperty({ description: '品牌属性分类id' }),
        class_validator_1.IsNotEmpty({ message: '品牌属性分类不能为空' })
    ], Product.prototype, "attributecategory");
    __decorate([
        typeorm_1.Column({ comment: '商品名称', length: 64, unique: true }),
        swagger_1.ApiProperty({ description: '商品名称' }),
        class_validator_1.IsNotEmpty({ message: '商品名称不能为空' })
    ], Product.prototype, "name");
    __decorate([
        typeorm_1.Column({ comment: '图片', length: 255 }),
        swagger_1.ApiProperty({ description: '图片' })
    ], Product.prototype, "pic");
    __decorate([
        typeorm_1.Column({ comment: '货号', length: 64 }),
        swagger_1.ApiProperty({ description: '货号' })
    ], Product.prototype, "productSn");
    __decorate([
        typeorm_1.Column({ comment: '删除状态 0 -> 未删除 1 -> 已删除', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '删除状态' })
    ], Product.prototype, "deleteStatus");
    __decorate([
        typeorm_1.Column({ comment: '上架状态 0 -> 未上架 1 -> 已上架', "default": PublishStatus.no, "enum": PublishStatus }),
        swagger_1.ApiProperty({ description: '上架状态' })
    ], Product.prototype, "publishStatus");
    __decorate([
        typeorm_1.Column({ comment: '新品状态 0 -> 不是新品 1 -> 是新品', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '新品状态' })
    ], Product.prototype, "newStatus");
    __decorate([
        typeorm_1.Column({ comment: '推荐状态 0 -> 不推荐 1 -> 推荐', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '推荐状态' })
    ], Product.prototype, "recommandStatus");
    __decorate([
        typeorm_1.Column({ comment: '审核状态 0 -> 未审核 1 -> 审核通过', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '审核状态' })
    ], Product.prototype, "rerifyStatus");
    __decorate([
        typeorm_1.Column({ comment: '排序', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '排序' })
    ], Product.prototype, "sort");
    __decorate([
        typeorm_1.Column({ comment: '销量', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '销量' })
    ], Product.prototype, "sale");
    __decorate([
        typeorm_1.Column({ comment: '价格', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '价格' })
    ], Product.prototype, "price");
    __decorate([
        typeorm_1.Column({ comment: '促销价格', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '促销价格' })
    ], Product.prototype, "promotionPrice");
    __decorate([
        typeorm_1.Column({ comment: '赠送的成长值', type: 'int' }),
        swagger_1.ApiProperty({ description: '赠送的成长值' })
    ], Product.prototype, "giftGrowth");
    __decorate([
        typeorm_1.Column({ comment: '赠送的积分', type: 'int' }),
        swagger_1.ApiProperty({ description: '赠送的积分' })
    ], Product.prototype, "giftPoint");
    __decorate([
        typeorm_1.Column({ comment: '限制使用的积分', type: 'int' }),
        swagger_1.ApiProperty({ description: '限制使用的积分' })
    ], Product.prototype, "usePontLimit");
    __decorate([
        typeorm_1.Column({ comment: '副标题', length: 255 }),
        swagger_1.ApiProperty({ description: '副标题' })
    ], Product.prototype, "subTitle");
    __decorate([
        typeorm_1.Column({ comment: '商品描述', type: 'text' }),
        swagger_1.ApiProperty({ description: '商品描述' })
    ], Product.prototype, "description");
    __decorate([
        typeorm_1.Column({ comment: '市场价', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '市场价' })
    ], Product.prototype, "originalPrice");
    __decorate([
        typeorm_1.Column({ comment: '库存', type: 'int' }),
        swagger_1.ApiProperty({ description: '库存' })
    ], Product.prototype, "stock");
    __decorate([
        typeorm_1.Column({ comment: '库存预警值', type: 'int' }),
        swagger_1.ApiProperty({ description: '库存预警值' })
    ], Product.prototype, "lowStock");
    __decorate([
        typeorm_1.Column({ comment: '单位', length: 16 }),
        swagger_1.ApiProperty({ description: '单位' })
    ], Product.prototype, "unit");
    __decorate([
        typeorm_1.Column({ comment: '商品重量,默认为克', type: 'decimal', precision: 10, scale: 2, "default": 0 }),
        swagger_1.ApiProperty({ description: '商品重量' })
    ], Product.prototype, "weight");
    __decorate([
        typeorm_1.Column({ comment: '是否为预告商品 0 -> 不是 1 -> 是', type: 'int', "default": 0 }),
        swagger_1.ApiProperty({ description: '推荐状态' })
    ], Product.prototype, "previewStatus");
    __decorate([
        typeorm_1.Column({ comment: '以逗号分割的产品服务:1 -> 无忧退货 2 -> 快速退货 3-> 免费包邮' }),
        swagger_1.ApiProperty({ description: '推荐状态' })
    ], Product.prototype, "serviceIds");
    __decorate([
        typeorm_1.Column({ comment: '关键字', length: 255 }),
        swagger_1.ApiProperty({ description: '关键字' })
    ], Product.prototype, "keywords");
    __decorate([
        typeorm_1.Column({ comment: '备注', length: 255 }),
        swagger_1.ApiProperty({ description: '备注' })
    ], Product.prototype, "note");
    __decorate([
        typeorm_1.Column({ comment: '图片', length: 255 }),
        swagger_1.ApiProperty({ description: '图片' })
    ], Product.prototype, "albumPics");
    __decorate([
        typeorm_1.Column({ comment: '详情标题', length: 255 }),
        swagger_1.ApiProperty({ description: '详情标题' })
    ], Product.prototype, "detailTitle");
    __decorate([
        typeorm_1.Column({ comment: '详情描述', type: 'text' }),
        swagger_1.ApiProperty({ description: '详情描述' })
    ], Product.prototype, "detailDesc");
    __decorate([
        typeorm_1.Column({ comment: '产品详情网页内容', type: 'text' }),
        swagger_1.ApiProperty({ description: '产品详情网页内容' })
    ], Product.prototype, "detailHtml");
    __decorate([
        typeorm_1.Column({ comment: '移动端网页详情', type: 'text' }),
        swagger_1.ApiProperty({ description: '移动端网页详情' })
    ], Product.prototype, "detaiMobilelHtml");
    __decorate([
        typeorm_1.Column({ comment: '促销开始时间', type: 'datetime' }),
        swagger_1.ApiProperty({ description: '促销开始时间' })
    ], Product.prototype, "promotionStartTime");
    __decorate([
        typeorm_1.Column({ comment: '促销结束时间', type: 'datetime' }),
        swagger_1.ApiProperty({ description: '促销结束时间' })
    ], Product.prototype, "promotionEndTime");
    __decorate([
        typeorm_1.Column({ comment: '活动限购数量', type: 'int' }),
        swagger_1.ApiProperty({ description: '活动限购数量' })
    ], Product.prototype, "promotionPerLimit");
    __decorate([
        typeorm_1.Column({
            comment: '促销类型：0->没有促销使用原价;1->使用促销价；2->使用会员价；3->使用阶梯价格；4->使用满减价格；5->限时购',
            type: 'int',
            "default": 0
        }),
        swagger_1.ApiProperty({
            description: '促销类型：0->没有促销使用原价;1->使用促销价；2->使用会员价；3->使用阶梯价格；4->使用满减价格；5->限时购'
        })
    ], Product.prototype, "promotionType");
    __decorate([
        typeorm_1.Column({ comment: '产品分类名称', length: 255 }),
        swagger_1.ApiProperty({ description: '产品分类名称' })
    ], Product.prototype, "categoryName");
    __decorate([
        typeorm_1.Column({ comment: '品牌名称', length: 255 }),
        swagger_1.ApiProperty({ description: '品牌名称' })
    ], Product.prototype, "brandName");
    __decorate([
        typeorm_1.OneToMany(function () { return skustock_entity_1.Skustock; }, function (skustock) { return skustock.productId; }, {
            eager: true
        })
    ], Product.prototype, "skustocks");
    __decorate([
        typeorm_1.OneToMany(function () { return productLadder_entity_1.Productladder; }, function (productladder) { return productladder.productId; })
    ], Product.prototype, "ladders");
    __decorate([
        typeorm_1.OneToMany(function () { return productcomment_entity_1.Productcomment; }, function (productcomment) { return productcomment.productId; })
    ], Product.prototype, "comments");
    __decorate([
        typeorm_1.OneToMany(function () { return orderitem_entity_1.Orderitem; }, function (orderitem) { return orderitem.product; })
    ], Product.prototype, "orderitems");
    Product = __decorate([
        typeorm_1.Entity('product')
    ], Product);
    return Product;
}(base_entity_1.Base));
exports.Product = Product;
var DelStatus;
(function (DelStatus) {
    DelStatus[DelStatus["yes"] = 1] = "yes";
    DelStatus[DelStatus["no"] = 0] = "no";
})(DelStatus = exports.DelStatus || (exports.DelStatus = {}));
var NewStatus;
(function (NewStatus) {
    NewStatus[NewStatus["yes"] = 1] = "yes";
    NewStatus[NewStatus["no"] = 0] = "no";
})(NewStatus = exports.NewStatus || (exports.NewStatus = {}));
var RecommandStatus;
(function (RecommandStatus) {
    RecommandStatus[RecommandStatus["yes"] = 1] = "yes";
    RecommandStatus[RecommandStatus["no"] = 0] = "no";
})(RecommandStatus = exports.RecommandStatus || (exports.RecommandStatus = {}));
var RerifyStatus;
(function (RerifyStatus) {
    RerifyStatus[RerifyStatus["yes"] = 1] = "yes";
    RerifyStatus[RerifyStatus["no"] = 0] = "no";
})(RerifyStatus = exports.RerifyStatus || (exports.RerifyStatus = {}));
var PreviewStatus;
(function (PreviewStatus) {
    PreviewStatus[PreviewStatus["yes"] = 1] = "yes";
    PreviewStatus[PreviewStatus["no"] = 0] = "no";
})(PreviewStatus = exports.PreviewStatus || (exports.PreviewStatus = {}));
// 0->没有促销使用原价;1->使用促销价；2->使用会员价；3->使用阶梯价格；4->使用满减价格；5->限时购
var promotionTypes;
(function (promotionTypes) {
    promotionTypes[promotionTypes["no"] = 0] = "no";
    promotionTypes[promotionTypes["yes"] = 1] = "yes";
    promotionTypes[promotionTypes["vip"] = 2] = "vip";
    promotionTypes[promotionTypes["ladder"] = 3] = "ladder";
    promotionTypes[promotionTypes["decrease"] = 4] = "decrease";
    promotionTypes[promotionTypes["purchase"] = 5] = "purchase";
})(promotionTypes = exports.promotionTypes || (exports.promotionTypes = {}));
