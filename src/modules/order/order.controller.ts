import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { NoAuth } from 'src/common/decorator/customize';
import { Paginations } from 'src/common/decorator/pagination';
import { IPagination } from 'src/common/specialModules/pagination';
import { OrderService } from './order.service';
import { createOrderDto, OrderDto } from './orderDto';

@Controller('order')
export class OrderController {
  constructor (
    private readonly orderService:OrderService
  ) {}

  @Post()
  // @NoAuth()
  async createOrder (@Request() req, @Body() order:createOrderDto) {
    order.memberId = req.user.id
    this.orderService.createOrder(order)
  }


  @Get()
  @NoAuth()
  @ApiOperation({ description: '获取产品列表' })
  async userList(@Paginations() paginationDto: IPagination,@Request() req) {
    return await this.orderService.getOrderList(paginationDto);
  }

  @Get(':id')
  @NoAuth()
  @ApiOperation({ description:'获取订单详情' })
  async getOrderDetail (@Param('id') id:number) {
    // await new Promise((resolve,reject) =>{
    //   setTimeout(() => {
    //     resolve('')
    //   },2000)
    // })
    return await this.orderService.getDetail(id)
   
  }

}
