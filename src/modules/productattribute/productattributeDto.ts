import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { Attributecategory } from "src/entity/productattributecategory.entity"


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

export class createProductattribute {
    @ApiProperty({ description:'名称' })
    name: string

    @ApiProperty({ description:'商品属性分类id' })
    attributeCategoryId: number
    
    @ApiProperty({ description:'商品属性分类实体' })
    productAttributeCategoryId: Attributecategory

    @ApiProperty({ description:'属性选择类型 0 -> 唯一; 1->单选;2->多选对应属性和参数' })
    selectType: selectTypeEnum

    @ApiProperty({ description:'属性选择类型 0 -> 唯一; 1->单选;2->多选对应属性和参数' })
    inputType: inputTypeEnum

    @ApiProperty({ description:'可选值列表,以逗号隔开' })
    inputList: string
    
    @ApiProperty({ description:'排序' })
    sort: Number

    @ApiProperty({ description:'分类筛选样式 0-> 普通 1-> 颜色' })
    filterType: filterTypeEnum

    @ApiProperty({ description:'检索类型; 0 -> 不需要进行检索 1 -> 关键字检索 2-> 范围搜索' })
    searchType:searchTypeEnum

    @ApiProperty({ description:'相同属性产品是否关联; 0->不关联;1->关联' })
    relatedStatus: relatedStatusEnum

    @ApiProperty({ description:'是否支持手动新增; 0->不支持;1-> 支持' })
    handAddStatus: handAddStatusEnum

    @ApiProperty({ description:'属性的类型; 0->规格;1-> 参数' })
    type: typeEnum
}


export class updateProductattribute extends createProductattribute {
    @ApiProperty({ description:'id' })
    @IsNotEmpty({ message:'id不能为空' })
    id:number
}
