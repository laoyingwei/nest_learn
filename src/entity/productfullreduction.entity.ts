import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./base.entity";
import { Product } from "./product.entity";



@Entity('productfullreduction',{ name:'商品满减表' })
export class Productfullreduction extends Base {
    @ManyToOne(() => Product, product => product.ladders)
    @ApiProperty({ description:'商品优惠券商品id' })
    productId: Product

    @Column({ comment:'商品满足金额',type:'decimal',default:0,precision:10,scale:2 })
    @ApiProperty({ description:"商品满足金额" })
    fullPrice: number

    @Column({ comment:'商品减少金额',type:'decimal',default:0,precision:10,scale:2 })
    @ApiProperty({ description:"商品减少金额" })
    reducePrice: number
}