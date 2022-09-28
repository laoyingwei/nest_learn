import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Base } from './base.entity';
import { Memberlevel } from './memberlevel.entity';
import { Memeberreceiveaddress } from './memeberreceiveaddress.entity';
import { Order } from './order.entity';

export enum status {
  no = 0,
  yes = 1,
}

export enum genderTypes {
  male = 0,
  girl = 1,
}

export enum sourceTypes {
  weixin = 0,
  admin = 1,
}

@Entity('member', { name: '会员表' })
export class Member extends Base {
  // 会员等级
  @OneToOne(type => Memberlevel)
  @JoinColumn()
  memberlevel: Memberlevel;

  @Column({ comment: '用户名称', length: 64, nullable: true })
  @ApiProperty({ description: '用户名称' })
  userName: string;

  @Column({ comment: '用户密码', nullable: true })
  @ApiProperty({ description: '用户密码' })
  password: string;

  @Column({ comment: '用户昵称', length: 64, nullable: true })
  @ApiProperty({ description: '用户昵称' })
  nickName: string;

  @Column({ comment: '电话号码', length: 64, nullable: true })
  @ApiProperty({ description: '电话号码' })
  phone: string;

  @Column({ comment: '状态', default: status.yes })
  @ApiProperty({ description: '状态' })
  status: status;

  @Column({ comment: '头像', length: 500, nullable: true })
  @ApiProperty({ description: '头像' })
  icon: string;

  @Column({ comment: '性别', type: 'int', default: genderTypes.male })
  @ApiProperty({ description: '性别' })
  gender: genderTypes;

  @Column({ comment: '生日', type: 'date', nullable: true })
  @ApiProperty({ description: '生日' })
  birthday: Date;

  @Column({ comment: '城市', length: 64, nullable: true })
  @ApiProperty({ description: '城市' })
  city: string;

  @Column({ comment: '工作', length: 100, nullable: true })
  @ApiProperty({ description: '工作' })
  job: string;

  @Column({ comment: '个性签名', length: 200, nullable: true })
  @ApiProperty({ description: '个性签名' })
  personnalizedSignature: string;

  @Column({ comment: '来源', type: 'int', default: sourceTypes.weixin })
  @ApiProperty({ description: '来源' })
  sourceType: sourceTypes;

  @Column({ comment: '积分', type: 'int', default: 0 })
  @ApiProperty({ description: '积分' })
  integration: number;

  @Column({ comment: '成长值', type: 'int', default: 0 })
  @ApiProperty({ description: '成长值' })
  growth: number;

  @Column({ comment: '消费积分', type: 'int', default: 0 })
  @ApiProperty({ description: '消费积分' })
  historyIntegration: number;

  @Column({ comment: '消费次数', type: 'int', default: 0 })
  @ApiProperty({ description: '消费次数' })
  luckeyCount: number;

  @Column({ comment: '微信小程序openId' })
  @Exclude()
  @ApiProperty({ description: '微信小程序openId' })
  openId: string;

  @Column({ comment: '微信小程序session_key' })
  @Exclude()
  @ApiProperty({ description: '微信小程序session_key' })
  sessionKey: string;

  @OneToMany(
    () => Order,
    order => order.member,
  )
  orders: Order[];

  @OneToMany(
    () => Memeberreceiveaddress,
    memeberreceiveaddress => memeberreceiveaddress.member,
  )
  address: Memeberreceiveaddress[];
}
