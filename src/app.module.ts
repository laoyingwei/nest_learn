import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import customConfig from './config/index';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './common/globalGuard/roles.guard';
import { GlobalAuthGuard } from './common/globalGuard/auth.guard';
import { AuthModule } from './common/specialModules/auth/auth.module';
import { ProductcategoryModule } from './modules/productcategory/productcategory.module';
import { BrandModule } from './modules/brand/brand.module';
import { ProductattributecategoryModule } from './modules/productattributecategory/productattributecategory.module';
import { ProductattributeModule } from './modules/productattribute/productattribute.module';
import { ProductattributevalueModule } from './modules/productattributevalue/productattributevalue.module';
import { ProductModule } from './modules/product/product.module';
import { SkustockModule } from './modules/skustock/skustock.module';
import { ProductladderModule } from './modules/productladder/productladder.module';
import { ProductfullreductionModule } from './modules/productfullreduction/productfullreduction.module';
import { ProductmemberpriceModule } from './modules/productmemberprice/produuctmemberprice.module';
import { MemberlevelModule } from './modules/memberlevel/memberlevel.module';
import { ProductcommentModule } from './modules/productcomment/productcomment.module';
import { ProductcommentreplayModule } from './modules/productcommentreplay/productcommentreplay.module';
import { ProductvertifyrecordModule } from './modules/productvertifyrecord/productvertifyrecord.module';
import { ProductoperatelogModule } from './modules/productoperatelog/productoperatelog.module';
import { MemberModule } from './modules/member/member.module';
import { OrderModule } from './modules/order/order.module';
import { OrderitemModule } from './modules/orderitem/orderitem.module';
import { OrderoperatehistoryModule } from './modules/orderoperatehistory/orderoperatehistory.module';
import { WeixinModule } from './modules/weixin/weixin.module';
import { FeighttemplateModule } from './modules/feighttemplate/feighttemplate.module';
import { MemeberreceiveaddressModule } from './modules/memeberreceiveaddress/memeberreceiveaddress.module';
// import { ScheduleModule } from '@nestjs/schedule';
// import { TasksService } from './schedule/tasks/tasks.service';
import { TasksModule } from './schedule/tasks/tasks.module';
import { ScheduleModule } from '@nestjs/schedule';
import { QueueModule } from './modules/queue/queue.module';
import { UploadModule } from './modules/upload/upload.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 作用于全局
      load: [customConfig], // 加载自定义配置项
    }),
   
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // 数据库配置项依赖于ConfigModule，需在此引入
      useFactory: (configService: ConfigService) => configService.get('DATABASE_CONFIG'),
      inject: [ConfigService], // 记得注入服务，不然useFactory函数中获取不到ConfigService
    }),
    UserModule,
    AuthModule,
    ProductcategoryModule,
    BrandModule,
    ProductattributecategoryModule,
    ProductattributeModule,
    ProductattributevalueModule,
    ProductModule,
    SkustockModule,
    ProductladderModule,
    ProductfullreductionModule,
    ProductmemberpriceModule,
    MemberlevelModule,
    ProductcommentModule,
    ProductcommentreplayModule,
    ProductvertifyrecordModule,
    ProductoperatelogModule,
    MemberModule,
    OrderModule,
    OrderitemModule,
    OrderoperatehistoryModule,
    WeixinModule,
    FeighttemplateModule,
    MemeberreceiveaddressModule,
    ScheduleModule.forRoot(),
    TasksModule,
    QueueModule,
    UploadModule,
    
  ],
  providers: [
    {
      // 设置全局守卫
      provide: APP_GUARD,
      useClass: GlobalAuthGuard,
    },
    {
      // 设置全局角色守卫
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    // TasksService
  ]
})
export class AppModule { }
