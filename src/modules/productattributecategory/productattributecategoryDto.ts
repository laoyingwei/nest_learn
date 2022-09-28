import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"



export class CreateProductAttributecategoryDto {

    @ApiProperty({ description:'分类名称' })
    name: string


    @ApiProperty({ description:'属性数量' })
    attributeCount: number

    @ApiProperty({ description:'参数数量' })
    paramCount: number
}

export class UpdateProductAttributecategoryDto extends CreateProductAttributecategoryDto {
    @ApiProperty({ description:'id' })
    @IsNotEmpty({ message:'id不能为空' })
    id:number
}