import { Module } from '@nestjs/common';
import { ProductvertifyrecordService } from './productvertifyrecord.service';
import { ProductvertifyrecordController } from './productvertifyrecord.controller';

@Module({
  providers: [ProductvertifyrecordService],
  controllers: [ProductvertifyrecordController]
})
export class ProductvertifyrecordModule {}
