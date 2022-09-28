import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attribute } from 'src/entity/productattribute.entity';
import { ProductattributecategoryModule } from '../productattributecategory/productattributecategory.module';
import { ProductattributeController } from './productattribute.controller';
import { ProductattributeService } from './productattribute.service';

@Module({
  imports: [TypeOrmModule.forFeature([Attribute]),ProductattributecategoryModule],
  controllers: [ProductattributeController],
  providers: [ProductattributeService],
  exports:[ProductattributeService]
})
export class ProductattributeModule {
  
}
