import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entity/order.entity';
import { Skustock } from 'src/entity/skustock.entity';
import { getManager, getRepository, Repository } from 'typeorm';
import { OrderitemService } from '../orderitem/orderitem.service';
import { SkustockService } from '../skustock/skustock.service';
import { createOrderDto, createOrderItemDto, OrderDto } from './orderDto';
import { add, mul, sub, div } from '../../common/utils/decimal';
import { MemeberreceiveaddressService } from '../memeberreceiveaddress/memeberreceiveaddress.service';
import { MemberService } from '../member/member.service';
import { createOrderitemDto } from '../orderitem/orderitemDto';
import { IPagination, Pagination } from 'src/common/specialModules/pagination';
import { createCompareTimeSql, createFieldSql } from 'src/common/utils/typeormUtil';
import { Raw,MoreThanOrEqual,LessThanOrEqual } from "typeorm";
const FlakeId = require('flake-idgen'),
  intformat = require('biguint-format');
@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private usersRepository: Repository<Order>,
    private readonly orderitemService: OrderitemService,
    private readonly skustockService: SkustockService,
    private readonly memeberreceiveaddressService: MemeberreceiveaddressService,
    private readonly memberService: MemberService,
  ) {}

  async createOrder(order: createOrderDto) {
    await getManager().transaction(async transactionalEntityManager => {
      const orderDto = new OrderDto();
      orderDto.orderSn = intformat(new FlakeId().next(), 'dec');
      // orderDto.totalAmount = 0

      ///查找sku数据
      const skuListMap = {};
      order.skuList.forEach(item => {
        skuListMap[item.skuId] = item;
      });
      ///计算总金额

      const skuList: Skustock[] = await this.skustockService.findSkus(
        order.skuList.map(item => item.skuId),
      );
      orderDto.totalAmount = skuList.reduce((pre, next) => {
        // const nextTarget:createOrderItemDto = order.skuList.find(item => item.skuId === next.id)
        const nextTarget: createOrderItemDto = skuListMap[next.id];
        const n: number = add(pre, mul(next.price, nextTarget.productQuantity));
        return n;
      }, 0);
      orderDto.payAmount = orderDto.totalAmount;

      ///计算运费
      let freight = 0;
      ///计算赠送积分
      let giftPointCount = 0;
      ///计算成长值
      let giftGrowthCount = 0;

      skuList.forEach((item, index) => {
        const {
          productId: {
            feightTemplate: {
              ///计算方式
              chargeType,
              continueFee,
              continueWeight,
              firstFee,
              firstWeight,
            },
            weight,
            giftGrowth,
            giftPoint,
          },
          id,
        } = item;

        const productQuantity = skuListMap[id].productQuantity;
        if (chargeType == 0) {
          ///计件
          freight = add(freight, mul(productQuantity, firstFee));
        } else {
          ///计算总重量
          const w = mul(productQuantity, weight);

          // 计算默认运费

          if (w > firstWeight) {
            ///减去默认重量 计算价格
            const computedWeight = sub(w, firstWeight);
            const markUpNum = Math.ceil(div(computedWeight, continueWeight));
            freight = add(freight, mul(markUpNum, continueFee));
          }
          freight = add(freight, firstFee);

          //计算重量
        }

        giftPointCount = add(giftPointCount, mul(productQuantity, giftPoint));
        giftGrowthCount = add(giftGrowthCount, mul(productQuantity, giftGrowth));
      });
      orderDto.freightAmount = freight;
      orderDto.totalAmount = add(orderDto.totalAmount, orderDto.freightAmount);
      orderDto.payAmount = add(orderDto.payAmount, orderDto.freightAmount);
      orderDto.deliveryCompany = '中通快递';
      orderDto.integration = giftPointCount;
      orderDto.growth = giftGrowthCount;
      const addressTarget = await this.memeberreceiveaddressService.findOneById(order.addressId);
      orderDto.receiverPhoneNumber = addressTarget.phoneNumber;
      orderDto.memberUserName = addressTarget.name;
      orderDto.receiverPostCode = addressTarget.postCode;
      orderDto.receiverProvince = addressTarget.province;
      orderDto.receiverCity = addressTarget.city;
      orderDto.receiverRegion = addressTarget.region;
      orderDto.receiverDetailAddress = addressTarget.detailAddress;
      orderDto.note = order.note;
      orderDto.member = await this.memberService.findMemberId(order.memberId);

      const orderTarget: Order = await transactionalEntityManager.save(Order, orderDto);
      if (orderTarget) {
        // skuList.forEach(item => {
        //     const {  } = item;
        // })
        const orderItem: createOrderitemDto[] = skuList.map(item => {
          const { sp1, sp2, sp3 } = item;

          return {
            sp1,
            sp2,
            sp3,
            order: orderTarget,
            orderSn: orderTarget.orderSn,
            product: item.productId,
            productName: item.productId.name,
            productPic: item.productId.pic,
            productBrand: item.productId.brandName,
            productSn: item.productId.productSn,
            productPrice: item.price,
            productQuantity: skuListMap[item.id].productQuantity,
            productSku: item,
            productSkuCode: item.skuCode,
            category: item.productId.category,
            giftIntegration: item.productId.giftPoint,
            giftGrowth: item.productId.giftGrowth,
            productAttr: JSON.stringify(skuListMap[item.id].productAttr),
          };
        });
        const items = await this.orderitemService.createOrderItems(
          orderItem,
          transactionalEntityManager,
        );
      }
    });
  }

    /**
   * 获取用户
   */
     async getOrderList(pagination: IPagination, filter: any = {}) {
        // const inviteCode = filter.inviteCode;
        const startTime = filter.startTime;
        const endTime = filter.endTime;
    
        // const inviteCodeSql = createFieldSql("inviteCode", inviteCode);
        const timeSql = createCompareTimeSql(startTime, endTime);
    
        const query = getRepository(Order)
          .createQueryBuilder('user')
        //   .andWhere(inviteCodeSql.sqlStr, inviteCodeSql.value)
          .andWhere(timeSql.sqlStr, timeSql.value)
  
          .take(pagination.limit)
          .skip(pagination.page)
          .orderBy('user.createTime', 'ASC');
    
        // console.log(query.getSql())
        const [results, total] = await query.getManyAndCount();
        return new Pagination<Order>({ results, total });
      }
      async getAllOrderListAndSet () {
        const query = await this.usersRepository
        // .find({

        //   deliveryTime:LessThanOrEqual('DATE_SUB(NOW(), INTERVAL 5 DAY)'),
        //   confirmStatus:0,
        
        // })
        .query('SELECT * FROM `order` WHERE 1=1 AND confirmStatus = 0 AND deliveryTime <= DATE_SUB(NOW(), INTERVAL 5 DAY)')
        if(query && query.length) {
          this.usersRepository.update(query.map(item => item.id), { confirmStatus: 1 });
        }
       
         
      }
      async getDetail (id:number) {
        const data = await this.usersRepository.findOne(id,{ relations:['orderitems'] })
        if(!data) {
          throw new HttpException('订单数据不存在',500)
        }
        return data
      }

}
