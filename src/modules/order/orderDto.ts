import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Member } from 'src/entity/member.entity';

export enum payTypes {
  weiixn = 2,
  zhifubao = 1,
  noPay = 0,
}

export enum sourceTypes {
  pc = 0,
  app = 1,
}
// 2->已发货；3->已完成；4->已关闭；5->无效订单
export enum statuTypes {
  noPay = 0,
  noDeliver = 1,
  deliver = 2,
  success = 3,
  close = 4,
  invalid = 5,
}

export enum orderTypes {
  plain = 0,
  seckill = 1,
}

export enum billTypes {
  no = 0,
  electron = 1,
  paper = 2,
}

export enum confirmStatus {
  no = 0,
  yes = 1,
}

export enum deleteStatus {
  no = 0,
  yes = 1,
}

export class OrderDto {
  @ApiProperty({ description: '用户id' })
  @IsNotEmpty({ message: '用户id不能为空' })
  member: Member;

  @ApiProperty({ description: '优惠券id' })
  couponId: number;

  @ApiProperty({ description: '订单编号' })
  orderSn: string;

  @ApiProperty({ description: '用户账号' })
  memberUserName: string;

  @ApiProperty({ description: '订单总金额' })
  totalAmount: number;

  @ApiProperty({ description: '应付金额（实际支付金额）' })
  payAmount: number;

  @ApiProperty({ description: '运费金额' })
  freightAmount: number;

  @ApiProperty({ description: '促销优化金额（促销价、满减、阶梯价）' })
  promotionAmount: number;

  @ApiProperty({ description: '积分抵扣金额' })
  integrationAmount: number;

  @ApiProperty({ description: '优惠券抵扣金额' })
  couponAmount: number;

  @ApiProperty({ description: '管理员后台调整订单使用的折扣金额' })
  discountAmount: number;

  @ApiProperty({ description: '支付方式 0->未支付；1->支付宝；2->微信 ' })
  payType: payTypes;

  @ApiProperty({ description: '订单来源：0->PC订单；1->app订单 ' })
  sourceType: sourceTypes;

  @ApiProperty({
    description: '订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单',
  })
  status: statuTypes;

  @ApiProperty({ description: '订单类型 0->正常订单；1->秒杀订单' })
  orderType: orderTypes;

  @ApiProperty({ description: '物流公司(配送方式)' })
  deliveryCompany: string;

  @ApiProperty({ description: '自动确认(天) 默认五天' })
  autoConfirmDay: number;

  @ApiProperty({ description: '可以获得的积分' })
  integration: number;

  @ApiProperty({ description: '可以活动的成长值' })
  growth: number;

  @ApiProperty({ description: '活动信息' })
  promotionInfo: string;

  @ApiProperty({ description: '发票类型：0->不开发票；1->电子发票；2->纸质发票' })
  billType: billTypes;

  @ApiProperty({ description: '发票抬头' })
  billHeader: string;

  @ApiProperty({ description: '发票内容' })
  billContent: string;

  @ApiProperty({ description: '收票人电话' })
  billReceiverPhone: string;

  @ApiProperty({ description: '收票人邮箱' })
  billReceiverEmail: string;

  @ApiProperty({ description: '收票人名字' })
  receiverName: string;

  @ApiProperty({ description: '收票人电话' })
  receiverPhone: string;

  @ApiProperty({ description: '收货人邮编' })
  receiverPostCode: string;

  @ApiProperty({ description: '收货人电话' })
  receiverPhoneNumber: string;

  @ApiProperty({ description: '省份/直辖市' })
  receiverProvince: string;

  @ApiProperty({ description: '城市' })
  receiverCity: string;

  @ApiProperty({ description: '区' })
  receiverRegion: string;

  @ApiProperty({ description: '详细地址' })
  receiverDetailAddress: string;

  @ApiProperty({ description: '订单备注' })
  note: string;

  @ApiProperty({ description: '确认收货状态：0->未确认；1->已确认' })
  confirmStatus: confirmStatus;

  @ApiProperty({ description: '是否删除' })
  deleteStatus: deleteStatus;

  @ApiProperty({ description: '下单时使用积分' })
  useIntegration: number;

  @ApiProperty({ description: '支付时间' })
  paymentTime: Date;

  @ApiProperty({ description: '发货时间' })
  deliveryTime: Date;

  @ApiProperty({ description: '确认收货时间' })
  receiveTime: Date;

  @ApiProperty({ description: '评价时间' })
  commentTime: Date;
}

// @ApiProperty({ description: '订单id' })
//       orderId: number;

//       @ApiProperty({ description: '订单编号' })
//       orderSn: string;

//       @ApiProperty({ description: '商品id' })
//       productId: number;

//       @ApiProperty({ description: '商品图片' })
//       productPic: string;

//       @ApiProperty({ description: '商品名称' })
//       productName: string;

//       @ApiProperty({ description: '商品品牌' })
//       productBrand: string;

//       @ApiProperty({ description: '商品条码' })
//       productSn: string;

//       @ApiProperty({ description: '销售价格' })
//       productPrice: number;

//       @ApiProperty({ description: '购买数量' })
//       productQuantity: number;

//       @ApiProperty({ description: 'skuId' })
//       productSkuId: number;

//       @ApiProperty({ description: '商品sku条码' })
//       productSkuCode: string;

//       @ApiProperty({ description: '商品分类id' })
//       categoryId: number;

//       @ApiProperty({ description: '商品属性1' })
//       sp1: string;

//       @ApiProperty({ description: '商品属性2' })
//       sp2: string;

//       @ApiProperty({ description: '商品属性3' })
//       sp3: string;

//       @ApiProperty({ description: '商品促销名称' })
//       promotionName: string;

//       @ApiProperty({ description: '商品促销分解金额' })
//       promotionAmount: number;

//       @ApiProperty({ description: '优惠券优惠分解金额' })
//       couponAmount: number;

//       @ApiProperty({ description: '积分优惠分解金额' })
//       integrationAmount: number;

//       @ApiProperty({ description: '该商品经过优惠后的分解金额' })
//       realAmount: number;

//       @ApiProperty({ description: '商品赠送积分' })
//       giftIntegration: number;

//       @ApiProperty({ description: '商品赠送成长值' })
//       giftGrowth: number;

//       @ApiProperty({
//         description: '商品销售属性 [{"key":"颜色","value":"颜色"},{"key":"容量","value":"4G"}] ',
//       })
//       productAttr: string
export class createOrderItemDto {
  skuId: number
  productQuantity: number;
}

export class createOrderDto {
  @ApiProperty({ description: '商品sku对象' })
  skuList: createOrderItemDto[];

  @ApiProperty({ description:'收货地址id' })
  addressId:number
 
  @ApiProperty({ description:'订单备注' })
  note:string

  memberId:number
  
}
