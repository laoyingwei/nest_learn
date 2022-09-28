import { Module } from '@nestjs/common';
import { ProductfullreductionService } from './productfullreduction.service';
import { ProductfullreductionController } from './productfullreduction.controller';
import { Productfullreduction } from 'src/entity/productfullreduction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Productfullreduction])],
  providers: [ProductfullreductionService],
  controllers: [ProductfullreductionController],
  exports:[ProductfullreductionService]
})
export class ProductfullreductionModule {}
