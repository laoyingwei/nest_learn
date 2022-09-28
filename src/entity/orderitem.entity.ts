import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from './base.entity';
import { Order } from './order.entity';
import { Product } from './product.entity';
import { Category } from './productcategory.entity';
import { Skustock } from './skustock.entity';

@Entity('orderitem', { name: '订单商品信息表' })
export class Orderitem extends Base {
  @ManyToOne(
    () => Order,
    order => order.orderitems,
  )
  order: Order;

  @Column({ comment: '订单编号', length: 64 })
  @ApiProperty({ description: '订单编号' })
  orderSn: string;

  @ManyToOne(
    () => Product,
    product => product.orderitems,
  )
  product: Product;

  @Column({ comment: '商品图片', length: 500 })
  @ApiProperty({ description: '商品图片' })
  productPic: string;

  @Column({ comment: '商品名称', length: 200 })
  @ApiProperty({ description: '商品名称' })
  productName: string;

  @Column({ comment: '商品品牌', length: 200 })
  @ApiProperty({ description: '商品品牌' })
  productBrand: string;

  @Column({ comment: '商品条码', length: 64 })
  @ApiProperty({ description: '商品条码' })
  productSn: string;

  @Column({ comment: '销售价格', type: 'decimal', precision: 10, scale: 2 })
  @ApiProperty({ description: '销售价格' })
  productPrice: number;

  @Column({ comment: '购买数量', type: 'int', default: 0 })
  @ApiProperty({ description: '购买数量' })
  productQuantity: number;

  //   @Column({ comment:'商品sku编号' })
  //   @ApiProperty({ description:"商品sku编号" })
  //   productSkuId:number

  @ManyToOne(
    () => Skustock,
    skustock => skustock.orderitems,
  )
  productSku: Skustock;

  @Column({ comment: '商品sku条码', length: 50 })
  @ApiProperty({ description: '商品sku条码' })
  productSkuCode: string;
  
  
  @ManyToOne(
    () => Category,
    category => category.orderitems,
  )
  category: Category;

  @Column({ comment: '商品属性1', length: 100 })
  @ApiProperty({ description: '商品属性1' })
  sp1: string;

  @Column({ comment: '商品属性2', length: 100 })
  @ApiProperty({ description: '商品属性2' })
  sp2: string;

  @Column({ comment: '商品属性3', length: 100 })
  @ApiProperty({ description: '商品属性3' })
  sp3: string;

  @Column({ comment: '商品促销名称', length: 100,nullable:true })
  @ApiProperty({ description: '商品促销名称' })
  promotionName: string;

  @Column({ comment: '商品促销分解金额', type: 'decimal', precision: 10, scale: 2, default: 0 })
  @ApiProperty({ description: '商品促销分解金额' })
  promotionAmount: number;

  @Column({ comment: '优惠券优惠分解金额', type: 'decimal', precision: 10, scale: 2, default: 0 })
  @ApiProperty({ description: '优惠券优惠分解金额' })
  couponAmount: number;

  @Column({ comment: '积分优惠分解金额', type: 'decimal', precision: 10, scale: 2, default: 0 })
  @ApiProperty({ description: '积分优惠分解金额' })
  integrationAmount: number;

  @Column({
    comment: '该商品经过优惠后的分解金额',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  @ApiProperty({ description: '该商品经过优惠后的分解金额' })
  realAmount: number;

  @Column({ comment: '商品赠送积分', type: 'int', default: 0 })
  @ApiProperty({ description: '商品赠送积分' })
  giftIntegration: number;

  @Column({ comment: '商品赠送成长值', type: 'int', default: 0 })
  @ApiProperty({ description: '商品赠送成长值' })
  giftGrowth: number;

  @Column({
    comment: '商品销售属性[{"key":"颜色","value":"颜色"},{"key":"容量","value":"4G"}]',
    length: 500,
  })
  @ApiProperty({
    description: '商品销售属性 [{"key":"颜色","value":"颜色"},{"key":"容量","value":"4G"}] ',
  })
  productAttr: string;
}
