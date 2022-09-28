
import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createMemberDto, wxloaginDto } from 'src/modules/member/memberDto';
import { UserService } from '../../../modules/user/user.service';
import {  ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios'
import { catchError, map } from 'rxjs/operators';
import AXIOS from 'axios';
import { MemberService } from 'src/modules/member/member.service';
import { Member } from 'src/entity/member.entity';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly memberService: MemberService
    
  ) { }

  async validateUser(account: string): Promise<any> {
    return await this.userService.findOneByAccount(account);
  }

  /**
   * 
   * @param account 
   * @param password 
   * @returns 后台登录 
   */
  async login(account: string, password: string) {
    const payload = { account, password, role: 'admin' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async wxLogin (data:wxloaginDto) {
    let { code:js_code,userInfo } = data
    const appid = this.configService.get('AppID')
    const secret = this.configService.get('AppSecret')
    const wxLoginResults: { data:{
      errcode:number,errmsg:string,openid:string
    ,session_key:string
    } } = await this.httpService.axiosRef.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${js_code}&grant_type=authorization_code`)
    const { errcode, errmsg,openid,session_key} = wxLoginResults.data
    if(errcode) {
      switch (errcode) {
        case -1:
          throw new HttpException('系统繁忙，此时请开发者稍候再试',500)
          break;
        case 40029:
          throw new HttpException('code 无效',500)
          break
        case 45011:
          throw new HttpException('频率限制，每个用户每分钟100次',500)
        case 40226:
            throw new HttpException('高风险等级用户，小程序登录拦截',500)
          break;
        default:
          break;
      }
      return
    }
  
  const userData = await  this.memberService.createMember({
      ...userInfo,
      icon:userInfo.avatarUrl,
      sessionKey:session_key,
      openId:openid
  })
  return {
   userInfo:{
    ...userData,
    openId:'',
    sessionKey:''
   },
   access_token: this.jwtService.sign({
    openId:openid,
    nickName:userData.nickName,
    id:userData.id,
    sessionKey: session_key
   }),
  }
    // wxLoginResults.subscribe()

    // return wxLoginResults
  
  }
  
}