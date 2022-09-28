import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { ConfigService } from '@nestjs/config';
@Injectable()
export class WeixinService {
    constructor (
        private readonly  httpService:HttpService,
        private readonly configService:ConfigService
     
    ) {} 


    async getAccessToken () {
        const appid = this.configService.get('AppID')
        const secret = this.configService.get('AppSecret')
      
        const  accessTokenResults:{
          data:{
            access_token:string,
            expires_in:number,
            errcode:number,
            errmsg:string
          }
        } =  await this.httpService.axiosRef.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`)
        const {  access_token,expires_in,errcode,errmsg } = accessTokenResults.data
        if(errcode) {
            throw new HttpException(errmsg,500)
        }
        return access_token
    }
}
