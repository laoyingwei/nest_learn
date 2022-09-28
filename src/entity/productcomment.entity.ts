import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Product } from './product.entity';
import { Productcommentreplay } from './productcommentreplay.entity';

export enum startType {
  zero = 0,
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
}
export enum showStatus {
  no = 0,
  yes = 1,
}

@Entity('productcomment', { name: '商品评价表' })
export class Productcomment extends Base {
  @ManyToOne(
    () => Product,
    product => product.ladders,
  )
  @ApiProperty({ description: '商品id' })
  productId: Product;

  @Column({ comment: '会员名称', length: 255 })
  @ApiProperty({ description: '会员名称' })
  memberNickName: string;

  @Column({ comment: '商品名称', length: 255 })
  @ApiProperty({ description: '商品名称' })
  productName: string;

  @Column({ comment: '评分星数', type: 'int', default: startType.three })
  @ApiProperty({ description: '评分星数' })
  start: startType;

  @Column({ comment: '评价的ip', length: 64 })
  @ApiProperty({ description: '评价的ip' })
  memberIp: string;

  @Column({ comment: '是否显示', type: 'int', default: showStatus.no })
  @ApiProperty({ description: '是否显示' })
  showStatus: showStatus;

  @Column({ comment: '购买时的商品属性', length: 255 })
  @ApiProperty({ description: '购买时的商品属性' })
  productAttribute: string;

  @Column({ comment: '收藏数', type: 'int',default:0 })
  @ApiProperty({ description: '收藏数' })
  collectCount: number;

  @Column({ comment: '阅读数', type: 'int',default:0 })
  @ApiProperty({ description: '阅读数' })
  readCount: number;

  @Column({ comment: '内容', type: 'text' })
  @ApiProperty({ description: '内容' })
  content: string;

  @Column({ comment: '上传图片的地址，以逗号隔开', length: 1000 })
  @ApiProperty({ description: '上传图片的地址，以逗号隔开' })
  pics: string;

  @Column({ comment: '评论用户头像', length: 255 })
  @ApiProperty({ description: '评论用户头像' })
  memberIcon: string;

  @Column({ comment: '回复数', type: 'int',default:0 })
  @ApiProperty({ description: '回复数' })
  replayCount: number;


  @OneToMany(
    () => Productcommentreplay,
    productcomment => productcomment.commentId,
  )
  productcommentreplays: Productcommentreplay[];
}
