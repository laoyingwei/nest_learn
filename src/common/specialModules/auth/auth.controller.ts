import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../../../modules/user/userDto';
import { LoginAuth, NoAuth } from '../../decorator/customize';
import { createMemberDto, wxloaginDto } from 'src/modules/member/memberDto';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
 
    ) { }

  // @LoginAuth()
  @NoAuth()
  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    debugger
    return this.authService.login(loginDto.account, loginDto.password);
  }

  @NoAuth()
  @Post('/wxLogin')
  async wxLogin(@Body() data: wxloaginDto) {
   
    return this.authService.wxLogin(data)
  }



}
