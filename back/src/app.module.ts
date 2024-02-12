import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envConfigOptions } from './configs/env.config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConfigOptions } from './configs/mongo.config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SmsModule } from './sms/sms.module';
import { CategoryModule } from './category/category.module';
import { DishModule } from './dish/dish.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ServeStaticConfigOptions } from './configs/server-static.config';
import { BasketModule } from './basket/basket.module';
import { GallaryModule } from './gallary/gallary.module';
import { PromotionModule } from './promotion/promotion.module';


@Module({
  imports: [
    ConfigModule.forRoot(envConfigOptions),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: mongoConfigOptions
    }),
    ServeStaticModule.forRoot(ServeStaticConfigOptions()),
    AuthModule,
    UserModule,
    SmsModule,
    CategoryModule,
    DishModule,
    FileModule,
    BasketModule,
    GallaryModule,
    PromotionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
