import { Controller, Get } from '@nestjs/common';
import { NoAuth } from 'src/common/decorator/customize';
import { WeixinService } from './weixin.service';

@Controller('weixin')
export class WeixinController {
    constructor (
        private readonly weixinService:WeixinService
    ) {}

    @Get()
    @NoAuth()
    async getAccessToken () {
        return await this.weixinService.getAccessToken()
    }
}
