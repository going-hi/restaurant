import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ACCESS_JWT_SECRET, ACCESS_JWT_STRATEGY } from '../constants/'

@Injectable()
export class AccessJwtStrategy extends PassportStrategy(Strategy, ACCESS_JWT_STRATEGY) {
  constructor(
    private configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get(ACCESS_JWT_SECRET),
    });
  }

   validate(payload: any) {
    return payload
  }
}
