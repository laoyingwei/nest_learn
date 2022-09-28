import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./base.entity";
import { Attribute } from "./productattribute.entity";


@Entity('categoryattributerelation',{ name:'商品分类和属性的关系表' })
export class Categoryattributerelation extends Base {

    @Column({ comment:'商品分类id' })
    @ApiProperty({ description: '商品分类id' })
   
    productCategoryId: number
    
    @Column({ comment:'商品属性id' })
    @ApiProperty({ description: '商品属性id' })
    productAttributeId: number

}