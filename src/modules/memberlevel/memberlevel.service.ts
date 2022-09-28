import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Memberlevel } from 'src/entity/memberlevel.entity';
import { Repository } from 'typeorm';
import { CreateMemberlevelDto } from './memberlevelDto';

@Injectable()
export class MemberlevelService {
    constructor (
        @InjectRepository(Memberlevel) private usersRepository: Repository<Memberlevel>,
    ) {}
    
    /**
     * 
     * @param data 
     * @returns 创建会员等级
     */
    async createMemberlevel (data:CreateMemberlevelDto) {
        return await this.usersRepository.save(data)
    }

    async getAllMemberlevel () {
        return await this.usersRepository.find()
    }

}
