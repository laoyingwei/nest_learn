import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./base.entity";
import { Product } from "./product.entity";


@Entity('productladder',{ name:"商品阶梯价格表"  })
export class Productladder extends Base {
    @ManyToOne(() => Product, product => product.ladders)
    @ApiProperty({ description:'商品优惠券商品id' })
    productId: Product

    @Column({ comment:'满足的商品数量',type:'int',default:0 })
    @ApiProperty({ description:"满足的商品数量" })
    count: number

    @Column({ comment:'折扣',type:'decimal',default:0,precision:10,scale:2 })
    @ApiProperty({ description:"折扣" })
    discount: number

    
    @Column({ comment:'折后价格',type:'decimal',default:0,precision:10,scale:2 })
    @ApiProperty({ description:"折后价格" })
    price: number
}