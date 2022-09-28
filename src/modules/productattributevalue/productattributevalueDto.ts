import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"


export class createProductattributevalueDto {
    @ApiProperty({ description:'商品id' })
    productId:number

    @ApiProperty({ description:'商品属性id' })
    productAttributeId:number

    @ApiProperty({ description:'手动添加规格或者参数的值,参数单值,规格有多个时以逗号隔开' })
    value:string
}

export class updateProductattributevalueDto extends createProductattributevalueDto {
    @ApiProperty({ description:'id' })
    @IsNotEmpty({ message:'id不能为空' })
    id:number
}