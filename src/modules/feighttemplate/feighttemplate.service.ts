import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Feighttemplate } from 'src/entity/feighttemplate.entity';
import { Repository } from 'typeorm';
import { craeteFeighttemplateDto } from './feighttemplateDto';

@Injectable()
export class FeighttemplateService {
    constructor (
        @InjectRepository(Feighttemplate) private usersRepository: Repository<Feighttemplate>,
    ) {}


    async createFeighttemplate (data:craeteFeighttemplateDto) {
        return await this.usersRepository.save(data)
    }

    async findFeighttemplateOne (id:any) {
        return await this.usersRepository.findOne(id)
    }
}
