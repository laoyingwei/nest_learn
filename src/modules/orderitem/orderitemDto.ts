import { ApiProperty } from "@nestjs/swagger";
import { Order } from "src/entity/order.entity";
import { Product } from "src/entity/product.entity";
import { Category } from "src/entity/productcategory.entity";
import { Skustock } from "src/entity/skustock.entity";


export class createOrderitemDto  {
      @ApiProperty({ description: '订单id' })
      order: Order;

      @ApiProperty({ description: '订单编号' })
      orderSn: string;
        
      @ApiProperty({ description: '商品id' })
      product: Product;
    
      @ApiProperty({ description: '商品图片' })
      productPic: string;
    
      @ApiProperty({ description: '商品名称' })
      productName: string;
    
      @ApiProperty({ description: '商品品牌' })
      productBrand: string;

      @ApiProperty({ description: '商品条码' })
      productSn: string;
    
      @ApiProperty({ description: '销售价格' })
      productPrice: number;
    
      @ApiProperty({ description: '购买数量' })
      productQuantity: number;
    
      @ApiProperty({ description: 'skuId' })
      productSku: Skustock;
    

      @ApiProperty({ description: '商品sku条码' })
      productSkuCode: string;
    
      @ApiProperty({ description: '商品分类id' })
      category: Category;
    
      @ApiProperty({ description: '商品属性1' })
      sp1: string;
    

      @ApiProperty({ description: '商品属性2' })
      sp2: string;
    
      @ApiProperty({ description: '商品属性3' })
      sp3: string;
    
      // @ApiProperty({ description: '商品促销名称' })
      // promotionName: string;
    
      // @ApiProperty({ description: '商品促销分解金额' })
      // promotionAmount: number;
    
      // @ApiProperty({ description: '优惠券优惠分解金额' })
      // couponAmount: number;
    

      // @ApiProperty({ description: '积分优惠分解金额' })
      // integrationAmount: number;
    
     
      // @ApiProperty({ description: '该商品经过优惠后的分解金额' })
      // realAmount: number;
    
     
      @ApiProperty({ description: '商品赠送积分' })
      giftIntegration: number;
    

      @ApiProperty({ description: '商品赠送成长值' })
      giftGrowth: number;
    
      @ApiProperty({
        description: '商品销售属性 [{"key":"颜色","value":"颜色"},{"key":"容量","value":"4G"}] ',
      })
      productAttr: string;
}