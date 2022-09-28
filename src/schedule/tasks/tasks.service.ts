import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { OrderService } from 'src/modules/order/order.service';

///定时任务
@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);
    
    constructor(private readonly orderService: OrderService) {}
  
    // @Cron('45 * * * * *')
    // handleCron() {
    //   this.logger.debug('该方法将在60秒标记处每分钟运行一次');

    // }
    @Interval(10 * 1000)
    async handleInterval() {
      this.orderService.getAllOrderListAndSet()
    }
  
    // @Timeout(5000)
    // handleTimeout() {
    //   this.logger.debug('我是延时5秒后的任务');
    // }
  
    // @Interval(10000)
    // sendEmail() {
    //   this.logger.debug('3');
    // }

   
  
}
