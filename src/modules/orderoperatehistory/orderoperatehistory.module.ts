import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orderoperatehistory } from 'src/entity/orderoperatehistory.entity';
import { OrderoperatehistoryController } from './orderoperatehistory.controller';
import { OrderoperatehistoryService } from './orderoperatehistory.service';

@Module({
  imports:[TypeOrmModule.forFeature([Orderoperatehistory])],
  controllers: [OrderoperatehistoryController],
  providers: [OrderoperatehistoryService]
})
export class OrderoperatehistoryModule {}
