import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Member } from './member.entity';
import { Orderitem } from './orderitem.entity';
import { Orderoperatehistory } from './orderoperatehistory.entity';

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

@Entity('order', { name: '订单表' })
export class Order extends Base {
  @ManyToOne(
    () => Member,
    member => member.orders,
  )
  @ApiProperty({ description: '用户id' })
  @IsNotEmpty({ message: '用户id不能为空' })
  member: Member;

  @Column({ comment: '优惠券id', nullable: true })
  @ApiProperty({ description: '优惠券id' })
  couponId: number;

  @Column({ comment: '订单编号', length: 64 })
  @ApiProperty({ description: '订单编号' })
  orderSn: string;

  @Column({ comment: '用户账号', length: 64 })
  @ApiProperty({ description: '用户账号' })
  memberUserName: string;

  @Column({ comment: '订单总金额',  type: 'decimal', precision: 10, scale:2, default: 0 })
  @ApiProperty({ description: '订单总金额' })
  totalAmount: number;

  @Column({ comment: '应付金额（实际支付金额）', type: 'decimal', precision: 10, scale:2, default: 0 })
  @ApiProperty({ description: '应付金额（实际支付金额）' })
  payAmount: number;

  @Column({ comment: '运费金额', type: 'decimal', precision: 10, scale:2, default: 0 })
  @ApiProperty({ description: '运费金额' })
  freightAmount: number;

  @Column({ comment: '促销优化金额（促销价、满减、阶梯价）', type: 'decimal', precision: 10, scale:2, default: 0 })
  @ApiProperty({ description: '促销优化金额（促销价、满减、阶梯价）' })
  promotionAmount: number;

  @Column({ comment: '积分抵扣金额', type: 'decimal', precision: 10, scale:2, default: 0 })
  @ApiProperty({ description: '积分抵扣金额' })
  integrationAmount: number;

  @Column({ comment: '优惠券抵扣金额', type: 'decimal', precision: 10, scale:2, default: 0 })
  @ApiProperty({ description: '优惠券抵扣金额' })
  couponAmount: number;

  @Column({ comment: '管理员后台调整订单使用的折扣金额', type: 'decimal', precision: 10, scale:2, default: 0 })
  @ApiProperty({ description: '管理员后台调整订单使用的折扣金额' })
  discountAmount: number;

  @Column({
    comment: '支付方式 0->未支付；1->支付宝；2->微信 ',
    type: 'int',
    default: payTypes.noPay,
  })
  @ApiProperty({ description: '支付方式 0->未支付；1->支付宝；2->微信 ' })
  payType: payTypes;

  @Column({ comment: '订单来源：0->PC订单；1->app订单 ', type: 'int', default: sourceTypes.app })
  @ApiProperty({ description: '订单来源：0->PC订单；1->app订单 ' })
  sourceType: sourceTypes;

  @Column({
    comment: '订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单',
    type: 'int',
    default: statuTypes.noPay,
  })
  @ApiProperty({
    description: '订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单',
  })
  status: statuTypes;

  @Column({ comment: '订单类型 0->正常订单；1->秒杀订单', default: orderTypes.plain })
  @ApiProperty({ description: '订单类型 0->正常订单；1->秒杀订单' })
  orderType: orderTypes;

  @Column({ comment: '物流公司(配送方式)' })
  @ApiProperty({ description: '物流公司(配送方式)' })
  deliveryCompany: string;

  @Column({ comment: '自动确认(天) 默认五天', type: 'int', default: 5 })
  @ApiProperty({ description: '自动确认(天) 默认五天' })
  autoConfirmDay: number;

  @Column({ comment: '可以获得的积分', type: 'int', default: 0 })
  @ApiProperty({ description: '可以获得的积分' })
  integration: number;

  @Column({ comment: '可以活动的成长值', type: 'int', default: 0 })
  @ApiProperty({ description: '可以活动的成长值' })
  growth: number;

  @Column({ comment: '活动信息', length: 100,default:'', nullable:true })
  @ApiProperty({ description: '活动信息' })
  promotionInfo: string;

  @Column({ comment: '发票类型：0->不开发票；1->电子发票；2->纸质发票', default: billTypes.no })
  @ApiProperty({ description: '发票类型：0->不开发票；1->电子发票；2->纸质发票' })
  billType: billTypes;

  @Column({ comment: '发票抬头', length: 200,nullable:true })
  @ApiProperty({ description: '发票抬头' })
  billHeader: string;

  @Column({ comment: '发票内容', length: 200,nullable:true })
  @ApiProperty({ description: '发票内容' })
  billContent: string;

  @Column({ comment: '收票人电话', length: 32,nullable:true })
  @ApiProperty({ description: '收票人电话' })
  billReceiverPhone: string;

  @Column({ comment: '收票人邮箱', length: 32,nullable:true })
  @ApiProperty({ description: '收票人邮箱' })
  billReceiverEmail: string;

  @Column({ comment: '收票人名字', length: 100,nullable:true })
  @ApiProperty({ description: '收票人名字' })
  receiverName: string;

  @Column({ comment: '收票人电话', length: 32,nullable:true })
  @ApiProperty({ description: '收票人电话' })
  receiverPhone: string;

  @Column({ comment: '收货人邮编', length: 32,nullable:true })
  @ApiProperty({ description: '收货人邮编' })
  receiverPostCode: string;

  @Column({ comment: '收货人电话', length: 32 })
  @ApiProperty({ description: '收货人电话' })
  receiverPhoneNumber: string;

  @Column({ comment: '省份/直辖市', length: 32 })
  @ApiProperty({ description: '省份/直辖市' })
  receiverProvince: string;

  @Column({ comment: '城市', length: 32 })
  @ApiProperty({ description: '城市' })
  receiverCity: string;

  @Column({ comment: '区', length: 32 })
  @ApiProperty({ description: '区' })
  receiverRegion: string;

  @Column({ comment: '详细地址', length: 200 })
  @ApiProperty({ description: '详细地址' })
  receiverDetailAddress: string;

  @Column({ comment: '订单备注', length: 500,nullable:true })
  @ApiProperty({ description: '订单备注' })
  note: string;

  @Column({ comment: '确认收货状态：0->未确认；1->已确认', type: 'int', default: confirmStatus.no })
  @ApiProperty({ description: '确认收货状态：0->未确认；1->已确认' })
  confirmStatus: confirmStatus;

  @Column({ comment: '是否删除', type: 'int', default: deleteStatus.no })
  @ApiProperty({ description: '是否删除' })
  deleteStatus: deleteStatus;

  @Column({ comment: '下单时使用积分', type: 'int', default: 0 })
  @ApiProperty({ description: '下单时使用积分' })
  useIntegration: number;

  @Column({ comment: '支付时间', type: 'datetime', nullable: true })
  @ApiProperty({ description: '支付时间' })
  paymentTime: Date;

  @Column({ comment: '发货时间', type: 'datetime', nullable: true })
  @ApiProperty({ description: '发货时间' })
  deliveryTime: Date;

  @Column({ comment: '确认收货时间', type: 'datetime', nullable: true })
  @ApiProperty({ description: '确认收货时间' })
  receiveTime: Date;

  @Column({ comment: '评价时间', type: 'datetime', nullable: true })
  @ApiProperty({ description: '评价时间' })
  commentTime: Date;

  @OneToMany(
    () => Orderitem,
    orderitem => orderitem.order,
  )
  orderitems: Orderitem[];

  @OneToMany(
    () => Orderoperatehistory,
    orderoperatehistory => orderoperatehistory.orderId,
  )
  orderoperatehistorys: Orderoperatehistory[];
}
