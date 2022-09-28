import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./base.entity";

@Entity('attributevalue',{ name:'商品属性值表' })
export class Attributevalue extends Base {
    
    @Column({ comment:'商品id' })
    @ApiProperty({ description:'商品id' })
    productId:number

    @Column({ comment:'商品属性id' })
    @ApiProperty({ description:'商品属性id' })
    productAttributeId:number

    @Column({ comment:'手动添加规格或者参数的值,参数单值,规格有多个时以逗号隔开',length:64 })
    @ApiProperty({ description:'手动添加规格或者参数的值,参数单值,规格有多个时以逗号隔开' })
    value:string

}