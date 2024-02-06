import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SmsModule } from 'src/sms/sms.module';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { TokenService } from './token.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Token, TokenSchema } from './schemas/token.schema';
import { AccessJwtStrategy, RefreshJwtStrategy } from './strategies';

@Module({
  imports: [
    SmsModule, 
    UserModule,
    JwtModule.register({}),
    MongooseModule.forFeature([{ name: Token.name, schema: TokenSchema }])
  ],
  controllers: [AuthController],
  providers: [AuthService, TokenService, AccessJwtStrategy, RefreshJwtStrategy],
})
export class AuthModule {}
