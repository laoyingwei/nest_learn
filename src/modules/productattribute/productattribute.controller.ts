import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NoAuth } from 'src/common/decorator/customize';
import { Paginations } from 'src/common/decorator/pagination';
import { IPagination } from 'src/common/specialModules/pagination';
import { ProductattributeService } from './productattribute.service';
import { createProductattribute, updateProductattribute } from './productattributeDto';

@Controller('productattribute')
export class ProductattributeController {
    constructor (
        private readonly productattributeService:ProductattributeService
    ) {}

    /**
     * 
     * @param body 
     * @returns 新建商品属性
     */
    @Post()
    @NoAuth()
    async createAttribute (@Body() body:createProductattribute) {
        return this.productattributeService.createAttribute(body)
    }

    /**
     * 
     * @param body 
     * @returns 修改商品属性
     */
    @Put()
    @NoAuth()
    async updateAttribute  (@Body() body:updateProductattribute) {
        return this.productattributeService.updateAttribute(body)
    }

    /**
     * 
     * @param paginationDto 获取商品属性分页
     * @returns 
     */
    @Get()
    @NoAuth()
    async getAttributeList (@Paginations() paginationDto: IPagination) {
        return this.productattributeService.getAttributeList(paginationDto)
    }

    /**
     * 
     * @param ids 
     * @returns 删除商品属性
     */
    @Delete()
    @NoAuth()
    async delAttributeList (@Body() ids:any[]) {
        return this.productattributeService.delAttributeList(ids)
    }

    @Get(':id')
    @NoAuth()
    async getOneAttribute(@Param('id') id:string) {
        return this.productattributeService.getOneAttribute(id)
    }

}
