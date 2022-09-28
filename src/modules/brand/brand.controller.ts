import { Body, Controller, Delete, Get, Post, Put, Query  } from '@nestjs/common';
import { NoAuth } from 'src/common/decorator/customize';
import { Paginations } from 'src/common/decorator/pagination';
import { IPagination } from 'src/common/specialModules/pagination';
import { BrandService } from './brand.service';
import { createBrandDto, updateBrandDto } from './brandDto';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}
  @Post()
  @NoAuth()
  async createBrand(@Body() data: createBrandDto) {
    return await this.brandService.createBrand(data);
  }

  @Put()
  @NoAuth()
  async updateBrand(@Body() data: updateBrandDto) {
    return await this.brandService.updateBrand(data);
  }

  @Get()
  @NoAuth()
  async getBrandList(@Paginations() paginationDto: IPagination) {
    return await this.brandService.getBrandList(paginationDto);
  }

  @Delete()
  @NoAuth()
  async delBrandList(@Body() ids:any[]) {
    return await this.brandService.delBrandList(ids)
  }

  @Get('/all')
  @NoAuth()
  async findAllBrand () {
    return  await this.brandService.findAll()
  }
}
