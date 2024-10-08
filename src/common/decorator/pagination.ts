import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { PaginationDto } from "../specialModules/pagination";

/**
* 分页装饰器
*/
export const Paginations = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const paginationDto = new PaginationDto();
    // 条数
    if (request.query.hasOwnProperty('limit')) {
      paginationDto.limit = request.query.limit;
    } else {
      paginationDto.limit = 2;
    }
    // 页数
    if (request.query.hasOwnProperty('page')) {
      paginationDto.page =  ( (request.query.page > 0 ? ((+request.query.page) - 1) : 0) ) * paginationDto.limit;
    } else {
      paginationDto.page = 0;
    }

    return paginationDto;
  }
);