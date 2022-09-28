import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Procutmemberprice } from 'src/entity/procutmemberprice.entity';
import { Repository } from 'typeorm';
import { createProductmemberpriceDto } from './productmemberpriceDto';

@Injectable()
export class ProcutmemberpriceService {
    constructor (
        @InjectRepository(Procutmemberprice) private usersRepository: Repository<Procutmemberprice>,
    ) {}

    async createProcutmemberprice (data:createProductmemberpriceDto,transactionalEntityManager) {
        // return 
        return transactionalEntityManager.save(Procutmemberprice,data)
    }
}
