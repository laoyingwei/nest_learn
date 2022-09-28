import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Tree,
  TreeChildren,
  TreeParent,
  Entity,
  CreateDateColumn,
} from 'typeorm';
import { Base } from './base.entity';
import { Product } from './product.entity';
import { Attribute } from './productattribute.entity';

@Entity('attributecategory',{ name:'商品属性分类表' })
export class Attributecategory extends Base {
   
    @Column({ comment:"分类名称",length: 64 })
    @ApiProperty({ description:'分类名称' })
    name: string

    @Column({ comment:"属性数量",type:"int", default:0 })
    @ApiProperty({ description:'属性数量' })
    attributeCount: number

    @Column({ comment:"参数数量",type:"int", default:0 })
    @ApiProperty({ description:'参数数量' })
    paramCount: number


    @OneToMany(() => Attribute, attributes => attributes.productAttributeCategoryId)
    attributes: Attribute[];


    @OneToMany(() => Product, product => product.attributecategory)
    products: Product[];
}

