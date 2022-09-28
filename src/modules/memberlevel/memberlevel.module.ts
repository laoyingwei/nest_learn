import { Module } from '@nestjs/common';
import { MemberlevelService } from './memberlevel.service';
import { MemberlevelController } from './memberlevel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Memberlevel } from 'src/entity/memberlevel.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Memberlevel])],
  providers: [MemberlevelService],
  controllers: [MemberlevelController],
  exports:[MemberlevelService]
})
export class MemberlevelModule {}
