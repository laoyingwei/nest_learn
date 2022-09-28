import { Controller, Get, Param, Post,Request } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { LoginAuth, NoAuth } from 'src/common/decorator/customize';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
    constructor (
        private readonly memberService:MemberService
    ) {}
    
    @Get('/findOne')
    async getMemberInfo (@Request() req) {
        const { user } = req
        return this.memberService.findMemberOne(user.openId)
    }

}
