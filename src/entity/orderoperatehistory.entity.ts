import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./base.entity";
import { Order } from "./order.entity";

export enum orderStatus {
    noPay = 0,
    noDeliver = 1,
    deliver = 2,
    success = 3,
    close = 4,
    invalid = 5,
}

@Entity('orderoperatehistory', { name: '订单操作记录表' })
export class Orderoperatehistory extends Base {

    @ManyToOne(
        () => Order,
        order => order.orderoperatehistorys,
      )
      orderId: Order;

    @Column({ comment:'操作人：用户；系统；后台管理员',length:100 })
    @ApiProperty({ description: '操作人：用户；系统；后台管理员' })
    operateMan:string
    
    @Column({ comment:'订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单', type:'int',default:orderStatus.noPay })
    @ApiProperty({ description: '订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单' })
    orderStatus:orderStatus
    
    @Column({ comment:'备注',length:500 })
    @ApiProperty({ description: '备注' })
    note:string
}
// order_id             bigint comment '订单id',
// operate_man          varchar(100) comment '操作人：用户；系统；后台管理员',
// create_time          datetime comment '操作时间',
// order_status         int(1) comment '订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单',
// note                 varchar(500) comment '备注',