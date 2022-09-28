import { Module } from '@nestjs/common';
import { ProcutmemberpriceService } from './productmemberprice.service';
import { ProductmemberpriceController } from './productmemberprice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Procutmemberprice } from 'src/entity/procutmemberprice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Procutmemberprice])],
  providers: [ProcutmemberpriceService],
  controllers: [ProductmemberpriceController]
})
export class ProductmemberpriceModule {}
