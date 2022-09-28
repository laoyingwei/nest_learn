import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NoAuth } from 'src/common/decorator/customize';
import { Paginations } from 'src/common/decorator/pagination';
import { IPagination } from 'src/common/specialModules/pagination';
import { ProductattributecategoryService } from './productattributecategory.service';
import { CreateProductAttributecategoryDto, UpdateProductAttributecategoryDto } from './productattributecategoryDto';

@Controller('productattributecategory')
export class ProductattributecategoryController {
    constructor (
        private readonly productattributecategoryService:ProductattributecategoryService
      ) {}
      /**
       * 
       * @param body 
       * @returns 新建商品属性分类
       */
      @Post()
      @NoAuth()
      async createProductAttributecategory (@Body() body: CreateProductAttributecategoryDto) {
        return this.productattributecategoryService.createProductattributecategory(body)
      }

       /**
       * 
       * @param body 
       * @returns 修改商品属性分类
       */
      @Put()
      @NoAuth()
      async updateProductAttributecategory (@Body() body: UpdateProductAttributecategoryDto) {
        return this.productattributecategoryService.updateProductattributecategory(body)
      }

      /**
       * 
       * @param paginationDto 
       * @returns 商品属性分类列表
       */
      @Get()
      @NoAuth()
      async getProductAttributecategoryList (@Paginations() paginationDto: IPagination) {
          return await this.productattributecategoryService.getProductattributecategoryList(paginationDto)
      }
      /**
       * 
       * @param ids 
       * @returns 删除商品属性分类
       */
      @Delete()
      @NoAuth()
      async delProductAttributecategoryList (@Body() ids:any[]) {
        return await this.productattributecategoryService.delProductattributecategoryList(ids)
      }

      @Get("attributes/:id")
      @NoAuth()
      async getOneProductAttributes (@Param('id') id:string) {
          return await this.productattributecategoryService.findProductattributes(id)
      }
      
      @Get('/all')
      @NoAuth()
      async findAllProductAttributeCategory () {
        return this.productattributecategoryService.findAll()
      }
    
}
