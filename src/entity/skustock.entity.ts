import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Base } from "./base.entity";
import { Orderitem } from "./orderitem.entity";
import { Product } from "./product.entity";


@Entity('skustock')
export class Skustock extends Base {
    
    @ManyToOne(()=> Product,product => product.skustocks)
    @ApiProperty({ description:'产品id' })
    @IsNotEmpty({ message:'产品id不能为空' })
    productId: Product

    @Column({ comment:'sku编码',length: 64 })
    @ApiProperty({ description:'sku编码' })
    skuCode: string

    @Column({ comment:'价格',type:'decimal',precision:10,scale:2,default:0 })
    @ApiProperty({ description:'价格' })
    price:number

    @Column({ comment:'库存',type:'int', default:0 })
    @ApiProperty({ description:'库存' })
    stock:number

    @Column({ comment:'预警库存',type:'int', default:0 })
    @ApiProperty({ description:'预警库存' })
    lowStock:number

    @Column({ comment:'规格属性1',length: 64 })
    @ApiProperty({ description:'规格属性1' })
    sp1: string

    @Column({ comment:'规格属性2',length: 64 })
    @ApiProperty({ description:'规格属性2' })
    sp2: string

    @Column({ comment:'规格属性3',length: 64 })
    @ApiProperty({ description:'规格属性3' })
    sp3: string

    @Column({ comment:'展示图片',length: 255 })
    @ApiProperty({ description:'展示图片' })
    pic: string

    @Column({ comment:'销量',type:'int', default:0 })
    @ApiProperty({ description:'销量' })
    sale:number

    @Column({ comment:'单品促销价格',type:'decimal',precision:10,scale:2,default:0 })
    @ApiProperty({ description:'单品促销价格' })
    promotionPrice:number

    @Column({ comment:'锁定库存',type:'int', default:0 })
    @ApiProperty({ description:'锁定库存' })
    lockStock:number
    
    @OneToMany(
        () => Orderitem,
        orderitem => orderitem.productSku,
      )
    orderitems: Orderitem[];
    
}