import { Module } from '@nestjs/common';
import { SkustockService } from './skustock.service';
import { SkustockController } from './skustock.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skustock } from 'src/entity/skustock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Skustock])],
  providers: [SkustockService],
  controllers: [SkustockController],
  exports: [SkustockService],
})
export class SkustockModule {}
