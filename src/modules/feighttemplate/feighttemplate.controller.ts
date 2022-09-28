import { Body, Controller, Post } from '@nestjs/common';
import { NoAuth } from 'src/common/decorator/customize';
import { FeighttemplateService } from './feighttemplate.service';
import { craeteFeighttemplateDto } from './feighttemplateDto';

@Controller('feighttemplate')
export class FeighttemplateController {
    constructor (
        private readonly feighttemplateService:FeighttemplateService
    ) {}

    @Post()
    @NoAuth()
    async createFeighttemplate (@Body() feighttemplate:craeteFeighttemplateDto) {
        return this.feighttemplateService.createFeighttemplate(feighttemplate)
    }
}
