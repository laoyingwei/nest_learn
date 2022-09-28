import { ApiProperty } from "@nestjs/swagger"
import { Product } from "src/entity/product.entity"

export enum type {
    money = 1,
    discount = 0
}


export class createProductmemberpriceDto {
    @ApiProperty({ description:'商品优惠券商品id' })
    productId: Product

    @ApiProperty({ description:"会员等级id" })
    memberLevelId: number

    @ApiProperty({ description:"会员等级id" })
    type: type

    @ApiProperty({ description:"商品减少金额" })
    reducePrice: number

    @ApiProperty({ description:"折扣" })
    discount: number

    @ApiProperty({ description:"折后价格" })
    price: number
}