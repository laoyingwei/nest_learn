import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skustock } from 'src/entity/skustock.entity';
import { Repository } from 'typeorm';
import { createSkustockDto } from './skustockDto';

@Injectable()
export class SkustockService {
    constructor (
        @InjectRepository(Skustock) private usersRepository: Repository<Skustock>
    ) {}

    async createSkustock (data:createSkustockDto[],transactionalEntityManager) {
        const skustocks = []
        data.forEach(skustock => {
            const s = new Skustock()
            Object.keys(skustock).forEach((key,index) =>{
                s[key] = skustock[key]
            })
            skustocks.push(s)
        });
        return await transactionalEntityManager.save(Skustock, skustocks);  
    }
    async findSkus (ids:number[]) {
        return await this.usersRepository.findByIds(ids,{ relations:['productId'] })
    }
}
