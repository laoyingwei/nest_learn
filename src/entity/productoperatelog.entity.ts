import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";


@Entity('productoperatelog',{ name:"商品操作记录表"  })
export class Productoperatelog extends Base {
    @Column({ comment:'商品id',type:'bigint' })
    @ApiProperty({ description:'商品id' })
    productId:number

    @Column({ comment:'改变前价格',type:'decimal',precision:10,scale:2,default:0 })
    @ApiProperty({ description:'改变前价格' })
    priceOld:number

    @Column({ comment:'改变后价格',type:'decimal',precision:10,scale:2,default:0 })
    @ApiProperty({ description:'改变后价格' })
    priceNew:number

    @Column({ comment:'改变前优惠价',type:'decimal',precision:10,scale:2,default:0 })
    @ApiProperty({ description:'改变前优惠价' })
    salePriceOld:number

    @Column({ comment:'改变后优惠价',type:'decimal',precision:10,scale:2,default:0 })
    @ApiProperty({ description:'改变后优惠价' })
    salePriceNew:number

    @Column({ comment:'改变前积分',type:'int',})
    @ApiProperty({ description:'改变前积分' })
    giftPointOld:number

    @Column({ comment:'改变后积分',type:'int',})
    @ApiProperty({ description:'改变后积分' })
    giftPointNew:number

    @Column({ comment:'改变前积分使用限制',type:'int',})
    @ApiProperty({ description:'改变前积分使用限制' })
    giftPointLimitOld:number

    @Column({ comment:'改变后积分使用限制',type:'int',})
    @ApiProperty({ description:'改变后积分使用限制' })
    giftPointLimitNew:number

    @Column({ comment:'操作人',length:64})
    @ApiProperty({ description:'操作人' })
    operateMan:string

}