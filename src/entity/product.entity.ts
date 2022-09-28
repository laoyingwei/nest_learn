import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Brand } from './brand.entity';
import { Feighttemplate } from './feighttemplate.entity';
import { Orderitem } from './orderitem.entity';
import { Procutmemberprice } from './procutmemberprice.entity';
import { Attributecategory } from './productattributecategory.entity';
import { Category } from './productcategory.entity';
import { Productcomment } from './productcomment.entity';
import { Productfullreduction } from './productfullreduction.entity';
import { Productladder } from './productLadder.entity';
import { Skustock } from './skustock.entity';

export enum PublishStatus {
  yes = 1,
  no = 0,
}

@Entity('product')
export class Product extends Base {
  // @Column({ comment:"品牌实体", type:'bigint' })
  @ManyToOne(
    () => Brand,
    brand => brand.products,
    {
      eager: true
    }
  )
  @ApiProperty({ description: '品牌id' })
  @IsNotEmpty({ message: '品牌不能为空' })
  brand: Brand;

  // @Column({ comment:"品牌分类实体", type:'bigint' })
  @ManyToOne(
    () => Category,
    category => category.products,
    {
      eager: true
    }
  )
  @ApiProperty({ description: '品牌分类id' })
  @IsNotEmpty({ message: '品牌分类不能为空' })
  category: Category;
 
  @ManyToOne(
    () => Feighttemplate,
    feighttemplate => feighttemplate.products,
    {
      eager: true
    }
  )
  @ApiProperty({ description: '运费模板id' })
  @IsNotEmpty({ message: '运费模板不能为空' })
  feightTemplate: Feighttemplate;

  // @Column({ comment: '运费模板id' })
  // @ApiProperty({ description: '运费模板id' })
  // feightTemplateId: Feighttemplate;

  @ManyToOne(
    () => Attributecategory,
    attributecategory => attributecategory.products,
    {
      eager: true
    }
  )
  @ApiProperty({ description: '品牌属性分类id' })
  @IsNotEmpty({ message: '品牌属性分类不能为空' })
  attributecategory: Attributecategory;

  @Column({ comment: '商品名称', length: 64, unique: true })
  @ApiProperty({ description: '商品名称' })
  @IsNotEmpty({ message: '商品名称不能为空' })
  name: string;

  @Column({ comment: '图片', length: 255 })
  @ApiProperty({ description: '图片' })
  pic: string;

  @Column({ comment: '货号', length: 64 })
  @ApiProperty({ description: '货号' })
  productSn: string;

  @Column({ comment: '删除状态 0 -> 未删除 1 -> 已删除', type: 'int', default: 0 })
  @ApiProperty({ description: '删除状态' })
  deleteStatus: DelStatus;

  @Column({ comment: '上架状态 0 -> 未上架 1 -> 已上架',  default: 0,})
  @ApiProperty({ description: '上架状态' })
  publishStatus: number;

  @Column({ comment: '新品状态 0 -> 不是新品 1 -> 是新品', type: 'int', default: 0 })
  @ApiProperty({ description: '新品状态' })
  newStatus: NewStatus;

  @Column({ comment: '推荐状态 0 -> 不推荐 1 -> 推荐', type: 'int', default: 0 })
  @ApiProperty({ description: '推荐状态' })
  recommandStatus: RecommandStatus;

  @Column({ comment: '审核状态 0 -> 未审核 1 -> 审核通过', type: 'int', default: 0 })
  @ApiProperty({ description: '审核状态' })
  rerifyStatus: RerifyStatus;

  @Column({ comment: '排序', type: 'int', default: 0 })
  @ApiProperty({ description: '排序' })
  sort: number;

  @Column({ comment: '销量', type: 'int', default: 0 })
  @ApiProperty({ description: '销量' })
  sale: number;

  @Column({ comment: '价格', type: 'decimal', precision: 10, scale: 2, default: 0 })
  @ApiProperty({ description: '价格' })
  price: number;

  @Column({ comment: '促销价格', type: 'decimal', precision: 10, scale: 2, default: 0 })
  @ApiProperty({ description: '促销价格' })
  promotionPrice: number;

  @Column({ comment: '赠送的成长值', type: 'int' })
  @ApiProperty({ description: '赠送的成长值' })
  giftGrowth: number;

  @Column({ comment: '赠送的积分', type: 'int' })
  @ApiProperty({ description: '赠送的积分' })
  giftPoint: number;

  @Column({ comment: '限制使用的积分', type: 'int' })
  @ApiProperty({ description: '限制使用的积分' })
  usePontLimit: number;

  @Column({ comment: '副标题', length: 255 })
  @ApiProperty({ description: '副标题' })
  subTitle: string;

  @Column({ comment: '商品描述', type: 'text' })
  @ApiProperty({ description: '商品描述' })
  description: string;

  @Column({ comment: '市场价', type: 'decimal', precision: 10, scale: 2, default: 0 })
  @ApiProperty({ description: '市场价' })
  originalPrice: number;

  @Column({ comment: '库存', type: 'int' })
  @ApiProperty({ description: '库存' })
  stock: number;

  @Column({ comment: '库存预警值', type: 'int' })
  @ApiProperty({ description: '库存预警值' })
  lowStock: number;

  @Column({ comment: '单位', length: 16 })
  @ApiProperty({ description: '单位' })
  unit: string;

  @Column({ comment: '商品重量,默认为克', type: 'decimal', precision: 10, scale: 2, default: 0 })
  @ApiProperty({ description: '商品重量' })
  weight: number;

  @Column({ comment: '是否为预告商品 0 -> 不是 1 -> 是', type: 'int', default: 0 })
  @ApiProperty({ description: '推荐状态' })
  previewStatus: PreviewStatus;

  @Column({ comment: '以逗号分割的产品服务:1 -> 无忧退货 2 -> 快速退货 3-> 免费包邮' })
  @ApiProperty({ description: '推荐状态' })
  serviceIds: string;

  @Column({ comment: '关键字', length: 255 })
  @ApiProperty({ description: '关键字' })
  keywords: string;

  @Column({ comment: '备注', length: 255 })
  @ApiProperty({ description: '备注' })
  note: string;

  @Column({ comment: '图片', length: 255 })
  @ApiProperty({ description: '图片' })
  albumPics: string;

  @Column({ comment: '详情标题', length: 255 })
  @ApiProperty({ description: '详情标题' })
  detailTitle: string;

  @Column({ comment: '详情描述', type: 'text' })
  @ApiProperty({ description: '详情描述' })
  detailDesc: string;

  @Column({ comment: '产品详情网页内容', type: 'text' })
  @ApiProperty({ description: '产品详情网页内容' })
  detailHtml: string;

  @Column({ comment: '移动端网页详情', type: 'text' })
  @ApiProperty({ description: '移动端网页详情' })
  detaiMobilelHtml: string;

  @Column({ comment: '促销开始时间', type: 'datetime' })
  @ApiProperty({ description: '促销开始时间' })
  promotionStartTime: Date;

  @Column({ comment: '促销结束时间', type: 'datetime' })
  @ApiProperty({ description: '促销结束时间' })
  promotionEndTime: Date;

  @Column({ comment: '活动限购数量', type: 'int' })
  @ApiProperty({ description: '活动限购数量' })
  promotionPerLimit: number;

  @Column({
    comment:
      '促销类型：0->没有促销使用原价;1->使用促销价；2->使用会员价；3->使用阶梯价格；4->使用满减价格；5->限时购',
    type: 'int',
    default: 0,
  })
  @ApiProperty({
    description:
      '促销类型：0->没有促销使用原价;1->使用促销价；2->使用会员价；3->使用阶梯价格；4->使用满减价格；5->限时购',
  })
  promotionType: promotionTypes;

  @Column({ comment: '产品分类名称', length: 255 })
  @ApiProperty({ description: '产品分类名称' })
  categoryName: string;

  @Column({ comment: '品牌名称', length: 255 })
  @ApiProperty({ description: '品牌名称' })
  brandName: string;

  @OneToMany(
    () => Skustock,
    skustock => skustock.productId,
    {
      eager: true
    }
  )
  skustocks: Skustock[];

  @OneToMany(
    () => Productladder,
    productladder => productladder.productId,
  )
  ladders: Productladder[] | Productfullreduction[] | Procutmemberprice[];

  @OneToMany(
    () => Productcomment,
    productcomment => productcomment.productId,
  )
  comments: Productcomment[];

  @OneToMany(
    () => Orderitem,
    orderitem => orderitem.product,
  )
  orderitems: Orderitem[];

}

export enum DelStatus {
  yes = 1,
  no = 0,
}



export enum NewStatus {
  yes = 1,
  no = 0,
}

export enum RecommandStatus {
  yes = 1,
  no = 0,
}

export enum RerifyStatus {
  yes = 1,
  no = 0,
}

export enum PreviewStatus {
  yes = 1,
  no = 0,
}

// 0->没有促销使用原价;1->使用促销价；2->使用会员价；3->使用阶梯价格；4->使用满减价格；5->限时购
export enum promotionTypes {
  no = 0,
  yes = 1,
  vip = 2,
  ladder = 3,
  decrease = 4,
  purchase = 5,
}
