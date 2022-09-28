import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/entity/product.entity";
import { ManyToOne } from "typeorm";

export enum startType {
    zero = 0,
    one = 1,
    two = 2,
    three = 3,
    four = 4,
    five = 5,
  }
  export enum showStatus {
    no = 0,
    yes = 1,
  }
export class CreateProductcommentDto {
    @ManyToOne(
        () => Product,
        product => product.ladders,
      )
      @ApiProperty({ description: '商品id' })
      productId: Product;

      @ApiProperty({ description: '会员名称' })
      memberNickName: string;
    
      @ApiProperty({ description: '商品名称' })
      productName: string;
    

      @ApiProperty({ description: '评分星数' })
      start: startType;
    

      @ApiProperty({ description: '评价的ip' })
      memberIp: string;
    
      @ApiProperty({ description: '是否显示' })
      showStatus: showStatus;
    
      @ApiProperty({ description: '购买时的商品属性' })
      productAttribute: string;
    
      @ApiProperty({ description: '收藏数' })
      collectCount: number;
    
      @ApiProperty({ description: '阅读数' })
      readCount: number;
    
      @ApiProperty({ description: '内容' })
      content: string;
    
      @ApiProperty({ description: '上传图片的地址，以逗号隔开' })
      pics: string;

      @ApiProperty({ description: '评论用户头像' })
      memberIcon: string;

      @ApiProperty({ description: '回复数' })
      replayCount: number;
    
}



