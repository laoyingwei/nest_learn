


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductcategoryService } from './productcategory.service';
import { ProductcategoryController } from './productcategory.controller';
import { Category } from '../../entity/productcategory.entity';
import { ProductattributeModule } from '../productattribute/productattribute.module';


@Module({
  imports: [TypeOrmModule.forFeature([Category]),ProductattributeModule],
  controllers: [ProductcategoryController],
  providers: [ProductcategoryService],
  exports: [ProductcategoryService],
})
export class ProductcategoryModule { }