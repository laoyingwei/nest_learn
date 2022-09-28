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
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Base } from './base.entity';
import { Attributecategory } from './productattributecategory.entity';
import { Category } from './productcategory.entity';


export enum selectTypeEnum {
    only = 0,
    single = 1,
    many = 2
}

export enum inputTypeEnum {
    manual = 0,
    list = 1
}

export enum filterTypeEnum {
    ordinary = 0,
    color = 1
}

export enum searchTypeEnum {
    no = 0,
    keyword = 1,
    range = 2
}

export enum relatedStatusEnum {
    no = 0,
    yes = 1
}

export enum handAddStatusEnum {
    no = 0,
    yes = 1
}

export enum typeEnum {
    spec = 0,
    parameter = 1
}

@Entity('attribute',{ name:'商品属性表' })
export class Attribute extends Base {
   
    @Column({ comment:"名称",length: 64 })
    @ApiProperty({ description:'名称' })
    name: string

    // @Column({ comment:"商品属性分类id",type:'bigint' })
  
    
    @Column({ comment: '属性选择类型 0 -> 唯一; 1->单选;2->多选对应属性和参数',default: selectTypeEnum.only })
    @ApiProperty({ description:'属性选择类型 0 -> 唯一; 1->单选;2->多选对应属性和参数' })
    selectType: selectTypeEnum

    @Column({ comment: '属性选择类型 0 -> 唯一; 1->单选;2->多选对应属性和参数',default: inputTypeEnum.manual })
    @ApiProperty({ description:'属性选择类型 0 -> 唯一; 1->单选;2->多选对应属性和参数' })
    inputType: inputTypeEnum

    @Column({ comment:'可选值列表,以逗号隔开',length: 255 })
    @ApiProperty({ description:'可选值列表,以逗号隔开' })
    inputList: string
    
    @Column({ comment:'排序',type:'int' })
    @ApiProperty({ description:'排序' })
    sort: Number

    @Column({ comment:'分类筛选样式 0-> 普通 1-> 颜色', default: filterTypeEnum.ordinary })
    @ApiProperty({ description:'分类筛选样式 0-> 普通 1-> 颜色' })
    filterType: filterTypeEnum

    @Column({ comment:'检索类型; 0 -> 不需要进行检索 1 -> 关键字检索 2-> 范围搜索', default: searchTypeEnum.no })
    @ApiProperty({ description:'检索类型; 0 -> 不需要进行检索 1 -> 关键字检索 2-> 范围搜索' })
    searchType:searchTypeEnum

    @Column({ comment:'相同属性产品是否关联; 0->不关联;1->关联', default: relatedStatusEnum.no })
    @ApiProperty({ description:'相同属性产品是否关联; 0->不关联;1->关联' })
    relatedStatus: relatedStatusEnum

    @Column({ comment:'是否支持手动新增; 0->不支持;1-> 支持', default:handAddStatusEnum.no })
    @ApiProperty({ description:'是否支持手动新增; 0->不支持;1-> 支持' })
    handAddStatus: handAddStatusEnum

    @Column({ comment:'属性的类型; 0->规格;1-> 参数', default:typeEnum.spec })
    @ApiProperty({ description:'属性的类型; 0->规格;1-> 参数' })
    type: typeEnum

    @ManyToMany(() => Category)
    categories: Category[];

    @ManyToOne(() => Attributecategory, attributecategory => attributecategory.attributes)
    @ApiProperty({ description:'商品属性分类id' })
    productAttributeCategoryId: Attributecategory
    // @OneToMany(() => Attribute, attributes => attributes.productAttributeCategoryId)
    // attributes: Attribute[];
    // @ManyToOne(() => Attributecategory, attributecategory => attributecategory.attributes)
    // attributecategory: Attributecategory;

}

