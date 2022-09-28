import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Productfullreduction } from 'src/entity/productfullreduction.entity';
import { Repository } from 'typeorm';
import { createProductfullreductionDto } from './productfullreductionDto';

@Injectable()
export class ProductfullreductionService {
    constructor (
        @InjectRepository(Productfullreduction) private usersRepository: Repository<Productfullreduction>,
    ) {}

    async createProductfullreduction (data:createProductfullreductionDto,transactionalEntityManager) {
        return await transactionalEntityManager.save(Productfullreduction, data);
    }
}
