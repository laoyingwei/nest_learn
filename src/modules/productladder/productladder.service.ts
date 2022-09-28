import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Productladder } from 'src/entity/productLadder.entity';
import { Repository } from 'typeorm';
import { createProductladderDto } from './productladderDto';

@Injectable()
export class ProductladderService {
    constructor (
        @InjectRepository(Productladder) private usersRepository: Repository<Productladder>,
    ) {}


    async createProductladder (data:createProductladderDto,transactionalEntityManager) {
        const { discount,productId } = data;
        data.price = (Number(productId.price) * (discount / 10))
        return await transactionalEntityManager.save(Productladder, data);  
    } 
}
