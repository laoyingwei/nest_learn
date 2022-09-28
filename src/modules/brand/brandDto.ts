import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";



export enum statusTypes {
    yes = 1,
    no =0

}
export class createBrandDto {
  
    @IsNotEmpty({ message:"名称不能为空" })
    @ApiProperty({ description: '品牌名称' })
    name: string

  
    @ApiProperty({ description: '首字母' })
    firstLetter: string

  
    @ApiProperty({ description: '排序' })
    sort: number

   
    @ApiProperty({ description: '是否为品牌制造商 0 -> 不是; 1 -> 是' })
    factoryStatus: statusTypes


    @ApiProperty({ description: '显示状态：0->不显示；1->显示' })
    showStatus: statusTypes;

   
    @ApiProperty({ description: '产品数量'})
    productCount: number;

   
    @ApiProperty({ description: '产品评论数量'})
    productCommentCount: number;

   
    @ApiProperty({ description: '品牌logo' })
    logo: string

    
    @ApiProperty({ description: '专区大图' })
    bigPic: string


    @ApiProperty({ description: '品牌故事' })
    brandStory: string
}


export class updateBrandDto extends createBrandDto {
    @ApiProperty({ description:"id" })
    @IsNotEmpty({ message:"id不能为空" })
    id:number
}