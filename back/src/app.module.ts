import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envConfigOptions, ServeStaticConfigOptions } from '@configs';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConfigOptions } from '@/configs/mongo.config';
import { AuthModule } from '@/auth/auth.module';
import { UserModule } from '@modules/user/user.module';
import { SmsModule } from '@/notification/sms/sms.module';
import { CategoryModule } from '@modules/category/category.module';
import { DishModule } from '@modules/dish/dish.module';
import { FileModule } from '@/core/file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BasketModule } from '@modules/basket/basket.module';
import { GallaryModule } from '@modules/gallary/gallary.module';
import { PromotionModule } from '@modules/promotion/promotion.module';
import { PromoCodeModule } from '@modules/promo-code/promo-code.module';

@Module({
  imports: [
    ConfigModule.forRoot(envConfigOptions),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: mongoConfigOptions,
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
    PromotionModule,
    PromoCodeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
