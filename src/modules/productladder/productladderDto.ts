import { ApiProperty } from "@nestjs/swagger"
import { Product } from "src/entity/product.entity"


export class createProductladderDto {
    @ApiProperty({ description:'商品优惠券商品id' })
    productId: Product

    @ApiProperty({ description:"满足的商品数量" })
    count: number

    @ApiProperty({ description:"折扣" })
    discount: number

    @ApiProperty({ description:"折后价格" })
    price: number
}