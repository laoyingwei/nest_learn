import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { Brand } from "src/entity/brand.entity"
import { Product } from "src/entity/product.entity"
import { Attributecategory } from "src/entity/productattributecategory.entity"
import { Category } from "src/entity/productcategory.entity"
import { Skustock } from "src/entity/skustock.entity"
import { createProductladderDto } from "../productladder/productladderDto"
import { createSkustockDto } from "../skustock/skustockDto"



export class createProductDto {
     @ApiProperty({ description:'品牌id' })
     @IsNotEmpty({ message:'品牌不能为空' })
     brandId: number

     @ApiProperty({ description:'商品分类id' })
     @IsNotEmpty({ message:'商品分类不能为空' })
     categoryId: number
 
 
     @ApiProperty({ description:'运费模板id' })
     feightTemplateId:number
 
     // @Column({ comment:"品牌属性分类id", type:'bigint' })
     @ApiProperty({ description:'商品属性分类id' })
     @IsNotEmpty({ message:'商品属性分类不能为空' })
     attributecategoryId: number
 
     @ApiProperty({ description:'商品名称' })
     @IsNotEmpty({ message:'商品名称不能为空' })
    
     name: string
 
     @ApiProperty({ description:'图片' })
     pic: string
 
     @ApiProperty({ description:'货号' })
     productSn: string
 

     @ApiProperty({ description:'删除状态' })
     deleteStatus:DelStatus
 
     @ApiProperty({ description:'上架状态' })
     publishStatus:PublishStatus
 
     @ApiProperty({ description:'新品状态' })
     newStatus:NewStatus
 
     @ApiProperty({ description:'推荐状态' })
     recommandStatus:RecommandStatus
 
     @ApiProperty({ description:'审核状态' })
     rerifyStatus:RerifyStatus
     @ApiProperty({ description:'排序' })
     sort:number
 
     @ApiProperty({ description:'销量' })
     sale:number
 
     @ApiProperty({ description:'价格' })
     price:number
 
     @ApiProperty({ description:'价格' })
     promotionPrice:number
 
     @ApiProperty({ description:'赠送的成长值' })
     giftGrowth:number
 
     @ApiProperty({ description:'赠送的积分' })
     giftPoint:number
 
     @ApiProperty({ description:'限制使用的积分' })
     usePontLimit:number
 
     @ApiProperty({ description:'副标题' })
     subTitle:string
 
     @ApiProperty({ description:'商品描述' })
     description:string
 
     @ApiProperty({ description:'市场价' })
     originalPrice:number
 
     @ApiProperty({ description:'库存' })
     stock:number
 
     @ApiProperty({ description:'库存预警值' })
     lowStock:number
 
     @ApiProperty({ description:'单位' })
     unit:string
 
     @ApiProperty({ description:'商品重量' })
     weight:number
 
     @ApiProperty({ description:'推荐状态' })
     previewStatus:PreviewStatus
 
     @ApiProperty({ description:'推荐状态' })
     serviceIds:string
 
     @ApiProperty({ description:'关键字' })
     keywords:string
 
     @ApiProperty({ description:'备注' })
     note:string
 
     @ApiProperty({ description:'图片' })
     albumPics:string
 
     @ApiProperty({ description:'详情标题' })
     detailTitle:string
 
     @ApiProperty({ description:'详情描述' })
     detailDesc:string
 
     @ApiProperty({ description:'产品详情网页内容' })
     detailHtml:string
 
     @ApiProperty({ description:'移动端网页详情' })
     detaiMobilelHtml:string
 
     @ApiProperty({ description:'促销开始时间' })
     promotionStartTime:Date
 
     @ApiProperty({ description:'促销结束时间' })
     promotionEndTime:Date
 
     @ApiProperty({ description:'活动限购数量' })
     promotionPerLimit:number
 
     @ApiProperty({ description:'活动限购数量' })
     promotionType:promotionTypes

     @ApiProperty({ description:'产品分类名称' })
     categoryName:string
 
     @ApiProperty({ description:'品牌名称' })
     brandName:string
     
     @ApiProperty({ description:'sku列表' })
     skustocks: createSkustockDto[];
    
     @ApiProperty({ description:'优惠券数据' })
     discount:  {
        productId: Product
        count: number
        discount: number
        price: number,
        fullPrice: number,
        reducePrice: number,
        memberLevelId:number
     }
}

export enum DelStatus {
    yes = 1,
    no = 0
}

export enum PublishStatus {
    yes = 1,
    no = 0
}

export enum NewStatus {
    yes = 1,
    no = 0
}

export enum RecommandStatus {
    yes = 1,
    no = 0
}

export enum RerifyStatus {
    yes = 1,
    no = 0
}

export enum PreviewStatus {
    yes = 1,
    no = 0
}

   // 0->没有促销使用原价;1->使用促销价；2->使用会员价；3->使用阶梯价格；4->使用满减价格；5->限时购
export enum promotionTypes {
    no = 0,
    yes = 1,
    vip = 2,
    ladder = 3,
    decrease = 4,
    purchase = 5

}
function unique() {
    throw new Error("Function not implemented.")
}

