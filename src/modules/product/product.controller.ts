import { Body, Controller, Get, HttpException, Param, Post,Request } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { NoAuth } from 'src/common/decorator/customize';
import { Paginations } from 'src/common/decorator/pagination';
import { IPagination } from 'src/common/specialModules/pagination';
import { ProductService } from './product.service';
import { createProductDto } from './productDto';

@Controller('product')
export class ProductController {
    constructor (
        private readonly productService:ProductService,
    ) {}

    /**
     * 
     * @param body 创建商品
     */
    @Post()
    @NoAuth()
    async createProduct (@Body() body:createProductDto) {
      
            await this.productService.createProduct(body)
    
    }

   /**
    * 
    * @param params 
    * @returns 获取商品详情
    */
    @Get(':id')
    @NoAuth()
    async getProductDetail (@Param() params: { id:any }) {
        return this.productService.getProductDetail(params.id)
    }

    
    @Get()
    @NoAuth()
    @ApiOperation({ description: '获取产品列表' })
    async userList(@Paginations() paginationDto: IPagination, @Request() req) {
        return await this.productService.getProductList(paginationDto)
    }

    @Post('/editPublishStatus')
    @NoAuth()
    @ApiOperation({ description: '修改上下线' })
    async editPublishStatus (@Body() data: { id:number, status:number }) {
        return this.productService.editPublishStatus(data)
    }

}
