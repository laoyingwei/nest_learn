import { Module } from '@nestjs/common';
import { QueneService } from './queue.service';
import { BullModule } from '@nestjs/bull';
import { QueueController } from './queue.controller';
@Module({
 imports:[
   BullModule.registerQueueAsync({
    name: 'audio',
    useFactory: () => ({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  })
 ],
  providers: [QueneService],
  controllers: [QueueController]
})
export class QueueModule {}
