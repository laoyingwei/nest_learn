import { ApiProperty } from "@nestjs/swagger"
import { Product } from "src/entity/product.entity"


export class createProductfullreductionDto {
    @ApiProperty({ description:'商品优惠券商品id' })
    productId: Product

    
    @ApiProperty({ description:"商品满足金额" })
    fullPrice: number

    @ApiProperty({ description:"商品减少金额" })
    reducePrice: number
}