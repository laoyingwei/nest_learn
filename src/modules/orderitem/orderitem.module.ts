import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orderitem } from 'src/entity/orderitem.entity';
import { OrderitemController } from './orderitem.controller';
import { OrderitemService } from './orderitem.service';

@Module({
  imports:[TypeOrmModule.forFeature([Orderitem])],
  controllers: [OrderitemController],
  providers: [OrderitemService],
  exports:[OrderitemService]
})
export class OrderitemModule {}
