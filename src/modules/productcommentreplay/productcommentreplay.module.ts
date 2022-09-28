import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productcommentreplay } from 'src/entity/productcommentreplay.entity';
import { ProductcommentreplayController } from './productcommentreplay.controller';
import { ProductcommentreplayService } from './productcommentreplay.service';

@Module({
  imports:[TypeOrmModule.forFeature([Productcommentreplay])],
  controllers: [ProductcommentreplayController],
  providers: [ProductcommentreplayService]
})
export class ProductcommentreplayModule {}
