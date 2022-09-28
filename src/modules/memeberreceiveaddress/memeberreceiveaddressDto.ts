import { ApiProperty } from '@nestjs/swagger';
import { Member } from 'src/entity/member.entity';

export class createMemeberreceiveaddressDto {
  @ApiProperty({
    description: '用户id',
  })
  memeberId: number;

  @ApiProperty({
    description: '姓名',
  })
  name: string;

  @ApiProperty({
    description: '手机号码',
  })
  phoneNumber: string;

  @ApiProperty({ description: '邮政编码' })
  postCode: string;

  @ApiProperty({ description: '省' })
  province: string;

  @ApiProperty({ description: '市' })
  city: string;

  @ApiProperty({ description: '区' })
  region: string;

  @ApiProperty({ description: '详细地址' })
  detailAddress: string;
}

// @Column({
//     comment: '收货地址',
//     length: 100,
//   })
//   @ApiProperty({ description: '收货地址' })
//   name: string;

//   @Column({
//     comment: '电话号码',
//     length: 64,
//   })
//   @ApiProperty({ description: '电话号码' })
//   phoneNumber: string;

//   @Column({
//     comment: '是否删除 0 删除 1 未删除',
//     type: 'int',
//     default: 1,
//   })
//   defaultStatus: number;

//   @Column({
//     comment: '邮政编码',
//     length: 100,
//   })
//   @ApiProperty({ description: '邮政编码' })
//   postCode: string;

//   @Column({
//     comment: '省',
//     length: 100,
//   })
//   @ApiProperty({ description: '省' })
//   province: string;

//   @Column({
//     comment: '市',
//     length: 100,
//   })
//   @ApiProperty({ description: '市' })
//   city: string;

//   @Column({
//     comment: '区',
//     length: 100,
//   })
//   @ApiProperty({ description: '区' })
//   region: string;

//   @Column({
//     comment: '详细地址',
//     length: 128,
//   })
//   @ApiProperty({ description: '详细地址' })
//   detailAddress: string;
