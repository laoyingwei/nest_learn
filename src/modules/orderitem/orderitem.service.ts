import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orderitem } from 'src/entity/orderitem.entity';
import { EntityManager, Repository, TransactionCommitEvent } from 'typeorm';
import { createOrderitemDto } from './orderitemDto';

@Injectable()
export class OrderitemService {
    constructor (
        @InjectRepository(Orderitem) private usersRepository: Repository<Orderitem>,
    ) {}

        
   async createOrderItems (list:createOrderitemDto[],transactionalEntityManager:EntityManager) {
        
        return  await transactionalEntityManager.save(Orderitem, list)
   }
    
}
