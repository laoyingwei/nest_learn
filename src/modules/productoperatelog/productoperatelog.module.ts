import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productoperatelog } from 'src/entity/productoperatelog.entity';
import { ProductoperatelogController } from './productoperatelog.controller';
import { ProductoperatelogService } from './productoperatelog.service';

@Module({
  imports:[TypeOrmModule.forFeature([Productoperatelog])],
  controllers: [ProductoperatelogController],
  providers: [ProductoperatelogService]
})
export class ProductoperatelogModule {}
