import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feighttemplate } from 'src/entity/feighttemplate.entity';
import { FeighttemplateController } from './feighttemplate.controller';
import { FeighttemplateService } from './feighttemplate.service';

@Module({
  imports:[TypeOrmModule.forFeature([Feighttemplate])],
  controllers: [FeighttemplateController],
  providers: [FeighttemplateService],
  exports:[FeighttemplateService]
})
export class FeighttemplateModule {}
