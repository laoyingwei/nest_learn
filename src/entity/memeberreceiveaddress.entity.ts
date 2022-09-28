import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Member } from './member.entity';

@Entity('memeberreceiveaddress')
export class Memeberreceiveaddress extends Base {
  // @Column({ comment:'等级名称',length:64,unique:true })
  // @ApiProperty({ description:"等级名称" })
  // name: string

  @ManyToOne(
    () => Member,
    member => member.address,
  )
  member: Member;

  @Column({
    comment: '姓名',
    length: 100,
  })
  @ApiProperty({ description: '姓名' })
  name: string;

  @Column({
    comment: '电话号码',
    length: 64,
  })
  @ApiProperty({ description: '电话号码' })
  phoneNumber: string;

  @Column({
    comment: '是否删除 0 删除 1 未删除',
    type: 'int',
    default: 1,
  })
  defaultStatus: number;

  @Column({
    comment: '邮政编码',
    length: 100,
  })
  @ApiProperty({ description: '邮政编码' })
  postCode: string;

  @Column({
    comment: '省',
    length: 100,
  })
  @ApiProperty({ description: '省' })
  province: string;

  @Column({
    comment: '市',
    length: 100,
  })
  @ApiProperty({ description: '市' })
  city: string;

  @Column({
    comment: '区',
    length: 100,
  })
  @ApiProperty({ description: '区' })
  region: string;

  @Column({
    comment: '详细地址',
    length: 128,
  })
  @ApiProperty({ description: '详细地址' })
  detailAddress: string;
}
