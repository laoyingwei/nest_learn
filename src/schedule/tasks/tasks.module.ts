import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { OrderModule } from 'src/modules/order/order.module';
import { TasksService } from './tasks.service';
@Module({
    imports:[
        OrderModule
    ],
    providers:[
        TasksService
    ]
})
export class TasksModule {}
