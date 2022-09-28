import { Module } from '@nestjs/common';
import { ProductcategoryattributerelationService } from './productcategoryattributerelation.service';
import { ProductcategoryattributerelationController } from './productcategoryattributerelation.controller';
import { Categoryattributerelation } from 'src/entity/productcategoryattributerelation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // imports: [TypeOrmModule.forFeature([Categoryattributerelation])],
  providers: [ProductcategoryattributerelationService],
  controllers: [ProductcategoryattributerelationController]
})
export class ProductcategoryattributerelationModule {}
