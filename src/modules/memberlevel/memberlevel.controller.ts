import { Body, Controller, Get, Post } from '@nestjs/common';
import { NoAuth } from 'src/common/decorator/customize';
import { MemberlevelService } from './memberlevel.service';
import { CreateMemberlevelDto } from './memberlevelDto';

@Controller('memberlevel')
export class MemberlevelController {
    constructor (
        private readonly memberlevelService:MemberlevelService
    ) {}

    @Post()
    @NoAuth()
    async createMemberlevel (@Body() body:CreateMemberlevelDto) {
        return this.memberlevelService.createMemberlevel(body)
    }

    @Get('/getAllMemberlevel')
    @NoAuth()
    async getAllMemberlevel () {
        return this.memberlevelService.getAllMemberlevel()
    }
}
