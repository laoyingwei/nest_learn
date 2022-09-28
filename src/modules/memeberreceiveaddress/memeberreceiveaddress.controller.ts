import { Body, Controller, Post } from '@nestjs/common';
import { NoAuth } from 'src/common/decorator/customize';
import { MemeberreceiveaddressService } from './memeberreceiveaddress.service';
import { createMemeberreceiveaddressDto } from './memeberreceiveaddressDto';

@Controller('memeberreceiveaddress')
export class MemeberreceiveaddressController {
    constructor (
        private readonly memeberreceiveaddressService:MemeberreceiveaddressService
    ) {}

    @Post()
    @NoAuth()
    createAddress (@Body() data:createMemeberreceiveaddressDto) {

        return this.memeberreceiveaddressService.createAddress(data)
    }
}

