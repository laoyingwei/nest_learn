import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productcomment } from 'src/entity/productcomment.entity';
import { ProductcommentController } from './productcomment.controller';
import { ProductcommentService } from './productcomment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Productcomment])],
  controllers: [ProductcommentController],
  providers: [ProductcommentService]
})
export class ProductcommentModule {}
