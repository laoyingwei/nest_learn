import { ApiProperty } from '@nestjs/swagger';

export enum status {
  no = 0,
  yes = 1,
}

export enum genderTypes {
  male = 1,
  girl = 0,
}

export enum sourceTypes {
  weixin = 0,
  admin = 1,
}
export class createMemberDto {
  @ApiProperty({ description: '用户名称' })
  userName: string;

  @ApiProperty({ description: '用户昵称' })
  nickName: string;

  @ApiProperty({ description: '电话号码' })
  phone: string;

  @ApiProperty({ description: '状态' })
  status: status;

  @ApiProperty({ description: '头像' })
  icon: string;

  @ApiProperty({ description: '性别' })
  gender: genderTypes;

  @ApiProperty({ description: '生日' })
  birthday: Date;

  @ApiProperty({ description: '城市' })
  city: string;

  @ApiProperty({ description: '工作' })
  job: string;

  @ApiProperty({ description: '个性签名' })
  personnalizedSignature: string;

  @ApiProperty({ description: '来源' })
  sourceType: sourceTypes;

  @ApiProperty({ description: '积分' })
  integration: number;

  @ApiProperty({ description: '成长值' })
  growth: number;
 
  @ApiProperty({ description:'微信小程序openId' })
  openId:string

  @ApiProperty({ description:'微信小程序session_key' })
  sessionKey:string

}

export class wxloaginDto {
  code: string;
  userInfo: {
    avatarUrl: string;
    city: string;
    country: string;
    gender: string;
    language: string;
    nickName: string;
    province: string;
  };
}
