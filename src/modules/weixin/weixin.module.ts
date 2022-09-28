
import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeixinController } from './weixin.controller';
import { WeixinService } from './weixin.service';

@Module({
  imports:[HttpModule,ConfigModule],
  controllers: [WeixinController],
  providers: [WeixinService]
})
export class WeixinModule {}
