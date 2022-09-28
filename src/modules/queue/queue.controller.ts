import { Controller, Get } from '@nestjs/common';
import { NoAuth } from 'src/common/decorator/customize';
import { QueneService } from './queue.service';

@Controller('queue')
export class QueueController {
    constructor (
        private readonly queueService:QueneService
    ) {}

    @Get()
    @NoAuth()
    async ceshi () {
        this.queueService.addTask()
    }

}
