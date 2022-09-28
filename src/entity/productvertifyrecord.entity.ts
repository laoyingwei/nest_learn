import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from './base.entity';

export enum bitchStatus {
  no = 0,
  yes = 1,
}

@Entity('productvertifyrecord', { name: '商品审核记录表' })
export class Productvertifyrecord extends Base {
  @Column({ comment: '商品id',type:'bigint' })
  @ApiProperty({ description: '商品id' })
  productId: number;

  @Column({ comment: '审核人', length: 64 })
  @ApiProperty({ description: '审核人' })
  vertifyMan: string;

  @Column({ comment: '审核后的状态 0 -> 未通过 1 ->已通过', type: 'int', default: bitchStatus.no })
  @ApiProperty({ description: '审核后的状态 0 -> 未通过 1 ->已通过' })
  status: bitchStatus;

  @Column({ comment: '反馈详情', length: 255 })
  @ApiProperty({ description: '反馈详情' })
  detail: string;
}
