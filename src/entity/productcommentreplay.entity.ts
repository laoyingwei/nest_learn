import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from './base.entity';
import { Productcomment } from './productcomment.entity';

export enum typeStatus {
    vip = 0,
    admin = 1
}

@Entity('productcommentreplay', { name: '商品评价回复表' })
export class Productcommentreplay extends Base {
  @ManyToOne(
    () => Productcomment,
    productcomment => productcomment.productcommentreplays,
  )
  @ApiProperty({ description: '评论id' })
  commentId: Productcomment;

  @Column({ comment:'会员昵称',length:255 })
  @ApiProperty({ description: '会员昵称' })
  memberNickName:string

  @Column({ comment:'会员头像',length:255 })
  @ApiProperty({ description: '会员头像' })
  memberIcon:string

  @Column({ comment:'内容',length:1000 })
  @ApiProperty({ description: '内容' })
  content:string

  @Column({ comment:'评论人员类型 0 -> 会员 1-> 管理员',type:'int', default:typeStatus.vip })
  @ApiProperty({ description: '评论人员类型' })
  type:typeStatus
}
