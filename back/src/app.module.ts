import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envConfigOptions } from './configs/env.config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConfigOptions } from './configs/mongo.config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SmsModule } from './sms/sms.module';


@Module({
  imports: [
    ConfigModule.forRoot(envConfigOptions),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: mongoConfigOptions
    }),
    AuthModule,
    UserModule,
    SmsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
