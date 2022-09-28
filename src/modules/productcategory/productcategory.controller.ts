import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
} from '@nestjs/common';
import { retry } from 'rxjs/operators';
import { NoAuth } from 'src/common/decorator/customize';
import { Paginations } from 'src/common/decorator/pagination';
import { IPagination } from 'src/common/specialModules/pagination';

import { ProductcategoryService } from './productcategory.service';
import { CreateProductcategoryDto, UpdateProductcategoryDto } from './productcategoryDto';
@Controller('productcategory')
export class ProductcategoryController {
  constructor(private readonly productcategoryService: ProductcategoryService) {}

  @Post()
  @NoAuth()
  async createCategory(@Body() body: CreateProductcategoryDto) {
    return await this.productcategoryService.createCategory(body);
  }

  @Get('treelist')
  @NoAuth()
  async findTree() {
    return await this.productcategoryService.getTree();
  }

  @Put()
  @NoAuth()
  async updateCategory(@Body() body: UpdateProductcategoryDto) {
    return await this.productcategoryService.uploadCategory(body);
  }

  @Get('categorylist')
  @NoAuth()
  async getCategoryList (@Paginations() paginationDto: IPagination ) {
    return await this.productcategoryService.getCategoryList(paginationDto);
  }

  @Get(':id')
  @NoAuth()
  async getgetCategoryOne (@Param() params: { id:any }) {
    return await this.productcategoryService.getCategoryOne(params.id)
  }
}
