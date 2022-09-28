import { Body, Module, Post } from '@nestjs/common';
import { ProductattributecategoryService } from './productattributecategory.service';
import { ProductattributecategoryController } from './productattributecategory.controller';
import { Attributecategory } from 'src/entity/productattributecategory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Attributecategory])],
  providers: [ProductattributecategoryService],
  controllers: [ProductattributecategoryController],
  exports: [ProductattributecategoryService],
})
export class ProductattributecategoryModule {
 
}
