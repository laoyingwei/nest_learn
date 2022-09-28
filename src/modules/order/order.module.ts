import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/entity/order.entity';
import { MemberModule } from '../member/member.module';
import { MemeberreceiveaddressModule } from '../memeberreceiveaddress/memeberreceiveaddress.module';
import { OrderitemModule } from '../orderitem/orderitem.module';
import { SkustockModule } from '../skustock/skustock.module';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports:[TypeOrmModule.forFeature([Order]),OrderitemModule,SkustockModule,MemeberreceiveaddressModule,MemberModule],
  controllers: [OrderController],
  providers: [OrderService],
  exports:[OrderService]
})
export class OrderModule {}
