"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ProductattributeService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var pagination_1 = require("../../../../../../../../../src/common/specialModules/pagination");
var typeormUtil_1 = require("../../../../../../../../../src/common/utils/typeormUtil");
var productattribute_entity_1 = require("../../../../../../../../../src/entity/productattribute.entity");
var typeorm_2 = require("typeorm");
var ProductattributeService = /** @class */ (function () {
    function ProductattributeService(usersRepository, productattributecategoryService) {
        this.usersRepository = usersRepository;
        this.productattributecategoryService = productattributecategoryService;
    }
    /**
     *
     * @param data
     * @returns 创建商品属性表
     */
    ProductattributeService.prototype.createAttribute = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var attributecategory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productattributecategoryService.findProductattributecategoryOne(data.attributeCategoryId)];
                    case 1:
                        attributecategory = _a.sent();
                        data.productAttributeCategoryId = attributecategory;
                        return [4 /*yield*/, this.usersRepository.save(data)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *
     * @param data
     * @returns 修改商品属性表
     */
    ProductattributeService.prototype.updateAttribute = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var attributecategory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productattributecategoryService.findProductattributecategoryOne(data.attributeCategoryId)];
                    case 1:
                        attributecategory = _a.sent();
                        data.productAttributeCategoryId = attributecategory;
                        return [4 /*yield*/, this.usersRepository.save(data)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 商品属性列表
     */
    /**
     * 获取分类分页
     */
    ProductattributeService.prototype.getAttributeList = function (pagination, filter) {
        if (filter === void 0) { filter = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var startTime, endTime, timeSql, query, _a, results, total;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        startTime = filter.startTime;
                        endTime = filter.endTime;
                        timeSql = typeormUtil_1.createCompareTimeSql(startTime, endTime);
                        query = typeorm_2.getRepository(productattribute_entity_1.Attribute)
                            .createQueryBuilder('attribute')
                            .andWhere(timeSql.sqlStr, timeSql.value)
                            .take(pagination.limit)
                            .skip(pagination.page)
                            .orderBy('category.createTime', 'ASC');
                        return [4 /*yield*/, query.getManyAndCount()];
                    case 1:
                        _a = _b.sent(), results = _a[0], total = _a[1];
                        return [2 /*return*/, new pagination_1.Pagination({ results: results, total: total })];
                }
            });
        });
    };
    /**
     *
     * @param ids
     * @returns 删除属性
     */
    ProductattributeService.prototype.delAttributeList = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.usersRepository["delete"](ids)];
            });
        });
    };
    ProductattributeService.prototype.getAttributeListIds = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.usersRepository.findByIds(ids)];
            });
        });
    };
    ProductattributeService.prototype.getOneAttribute = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.usersRepository.findOne(id)];
            });
        });
    };
    ProductattributeService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(productattribute_entity_1.Attribute))
    ], ProductattributeService);
    return ProductattributeService;
}());
exports.ProductattributeService = ProductattributeService;
