import { ApiProperty } from "@nestjs/swagger";
import { isEmpty, IsNotEmpty, isNumber } from "class-validator";
import { Attribute } from "src/entity/productattribute.entity";


export class CreateProductcategoryDto {

    @IsNotEmpty({ message: '名称不能为空' })
    @ApiProperty({ description: '名称' })
    name: string;
    

    @ApiProperty({ description: '等级' })
    level: type;
  
    
    @ApiProperty({ description: '商品数量' })
    productCount: number;
  
    
    @ApiProperty({ description: '商品单位' })
    productUnit: string;
  
    
    @ApiProperty({ description: '是否显示在导航栏：0->不显示；1->显示' })
    navStatus: type;
  
  
    @ApiProperty({ description: '显示状态：0->不显示；1->显示' })
    showStatus: type;
  
    
    @ApiProperty({ description: '排序' })
    sort: number;
  
   
    @ApiProperty({ description: '图标' })
    icon: string;
  
   
    @ApiProperty({ description: '关键字' })
    keywords: string;
  
    @ApiProperty({ description: '描述' })
    text: string;
   
    @ApiProperty({ description: '父级id' })
    parentId: number;
   
    @ApiProperty({ description:'商品分类绑定的属性id' })
    attributes: any[]
   
}

export class UpdateProductcategoryDto extends  CreateProductcategoryDto {

    @IsNotEmpty({message:'id不能为空'})
    id:number
}

export enum type {
    have = 1,
    no = 0
}