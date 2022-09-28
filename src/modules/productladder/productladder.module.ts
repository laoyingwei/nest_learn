import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productladder } from 'src/entity/productLadder.entity';
import { ProductladderController } from './productladder.controller';
import { ProductladderService } from './productladder.service';

@Module({
  imports: [TypeOrmModule.forFeature([Productladder])],
  controllers: [ProductladderController],
  providers: [ProductladderService],
  exports:[ProductladderService]
})
export class ProductladderModule {}
