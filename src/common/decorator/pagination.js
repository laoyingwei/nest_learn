"use strict";
exports.__esModule = true;
exports.Paginations = void 0;
var common_1 = require("@nestjs/common");
var pagination_1 = require("../specialModules/pagination");
/**
* 分页装饰器
*/
exports.Paginations = common_1.createParamDecorator(function (data, ctx) {
    var request = ctx.switchToHttp().getRequest();
    var paginationDto = new pagination_1.PaginationDto();
    // 条数
    if (request.query.hasOwnProperty('limit')) {
        paginationDto.limit = request.query.limit;
    }
    else {
        paginationDto.limit = 2;
    }
    // 页数
    if (request.query.hasOwnProperty('page')) {
        paginationDto.page = ((request.query.page > 0 ? ((+request.query.page) - 1) : 0)) * paginationDto.limit;
    }
    else {
        paginationDto.page = 0;
    }
    return paginationDto;
});
