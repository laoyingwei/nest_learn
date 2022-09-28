import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entity/product.entity';
import { SkustockModule } from '../skustock/skustock.module';
import { ProductladderModule } from '../productladder/productladder.module';
import { ProductfullreductionModule } from '../productfullreduction/productfullreduction.module';
import { ProductcategoryModule } from '../productcategory/productcategory.module';
import { BrandModule } from '../brand/brand.module';
import { ProductattributecategoryModule } from '../productattributecategory/productattributecategory.module';
import { FeighttemplateModule } from '../feighttemplate/feighttemplate.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]),SkustockModule,ProductladderModule,ProductfullreductionModule,ProductcategoryModule,BrandModule,ProductattributecategoryModule,FeighttemplateModule],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
