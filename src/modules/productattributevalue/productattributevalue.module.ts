import { Module } from '@nestjs/common';
import { ProductattributevalueService } from './productattributevalue.service';
import { ProductattributevalueController } from './productattributevalue.controller';
import { Attributevalue } from 'src/entity/productattributevalue.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Attributevalue])],
  providers: [ProductattributevalueService],
  exports:[ProductattributevalueService],
  controllers: [ProductattributevalueController]
})
export class ProductattributevalueModule {}
