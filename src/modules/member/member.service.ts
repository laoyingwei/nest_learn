import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from 'src/entity/member.entity';
import { Repository } from 'typeorm';
import { createMemberDto } from './memberDto';

@Injectable()
export class MemberService {
    constructor (
        @InjectRepository(Member) private usersRepository: Repository<Member>,
    ) {}

    /**
     * 
     * @returns 登录
     */
    async createMember (data) {
     
       const hasUser = await this.findMemberOne(data.openId)
       if(hasUser) {
        data.id = hasUser.id
       }
       const  userData = await this.usersRepository.save(data)
       userData.openId = ''
       userData.sessionKey = ''
       return userData
       
    }
    async findMemberOne (openId:string) {
        return await this.usersRepository.findOne({openId})
    }
    async findMemberId (id:number) {
        return await this.usersRepository.findOne(id)
    }
}
