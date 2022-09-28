import { Module } from '@nestjs/common';
import { MemeberreceiveaddressService } from './memeberreceiveaddress.service';
import { MemeberreceiveaddressController } from './memeberreceiveaddress.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Memeberreceiveaddress } from 'src/entity/memeberreceiveaddress.entity';
import { MemberModule } from '../member/member.module';

@Module({
  imports:[TypeOrmModule.forFeature([Memeberreceiveaddress]),MemberModule],
  providers: [MemeberreceiveaddressService],
  controllers: [MemeberreceiveaddressController],
  exports:[ MemeberreceiveaddressService ]
})
export class MemeberreceiveaddressModule {}
