import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./base.entity";
import { Product } from "./product.entity";

export enum type {
    money = 1,
    discount = 0
}

@Entity('procutmemberprice')
export class Procutmemberprice extends Base {
    @ManyToOne(() => Product, product => product.ladders)
    @ApiProperty({ description:'商品优惠券商品id' })
    productId: Product

    @Column({ comment:'会员等级id'})
    @ApiProperty({ description:"会员等级id" })
    memberLevelId: number

    @Column({ comment:'会员等级id', default: type.money})
    @ApiProperty({ description:"会员等级id" })
    type: type

    @Column({ comment:'商品减少金额',type:'decimal',default:0,precision:10,scale:2 })
    @ApiProperty({ description:"商品减少金额" })
    reducePrice: number

    @Column({ comment:'折扣',type:'decimal',default:0,precision:10,scale:2 })
    @ApiProperty({ description:"折扣" })
    discount: number

    @Column({ comment:'折后价格',type:'decimal',default:0,precision:10,scale:2 })
    @ApiProperty({ description:"折后价格" })
    price: number
}

