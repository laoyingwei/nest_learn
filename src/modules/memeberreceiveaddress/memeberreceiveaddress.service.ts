import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Memeberreceiveaddress } from 'src/entity/memeberreceiveaddress.entity';
import { Repository } from 'typeorm';
import { MemberService } from '../member/member.service';
import { createMemeberreceiveaddressDto } from './memeberreceiveaddressDto';

@Injectable()
export class MemeberreceiveaddressService {
    constructor (
        @InjectRepository(Memeberreceiveaddress) private usersRepository: Repository<Memeberreceiveaddress>,
        private readonly memberService:MemberService
    ) {}

    async createAddress (data:createMemeberreceiveaddressDto) {
        let memeberreceiveaddress = new Memeberreceiveaddress()
        memeberreceiveaddress.member = await this.memberService.findMemberId(data.memeberId)
        memeberreceiveaddress = {
            ...memeberreceiveaddress,
            ...data   
        }
        return this.usersRepository.save(memeberreceiveaddress)
    }

    async findOneById (id:number) {
        return await this.usersRepository.findOne(id)
    }
}
