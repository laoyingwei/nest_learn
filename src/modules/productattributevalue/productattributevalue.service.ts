import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoAuth } from 'src/common/decorator/customize';
import { Attributevalue } from 'src/entity/productattributevalue.entity';
import { Repository } from 'typeorm';
import { createProductattributevalueDto, updateProductattributevalueDto } from './productattributevalueDto';

@Injectable()
export class ProductattributevalueService {
    constructor (
        @InjectRepository(Attributevalue) private usersRepository: Repository<Attributevalue>,
    ) {}
    async createAttributevalue (data:createProductattributevalueDto) {
        return await this.usersRepository.save(data)
    }

    async updateAttributevalue (data:updateProductattributevalueDto) {
        return await this.usersRepository.save(data)
    }
}
