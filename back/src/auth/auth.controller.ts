import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ActiveAccountDto } from './dto';
import { CookieOptions, Response } from 'express';
import { REFRESH_TOKEN_COOKIE } from './constants';
import { RefreshJwtGuard } from './guards';
import { Cookie, User } from '@/core/decorators';


@UsePipes(new ValidationPipe())
@Controller('auth')
export class AuthController {

  private optionsCookie: CookieOptions = {httpOnly: true, maxAge: 15 * 24 * 60 * 60 * 1000, path: '/'}

  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('verification')
  phoneVerificationRequest(
    @Body('phone') phone: number
  ) {
    return this.authService.phoneVerificationRequest(phone)
  }

  @HttpCode(HttpStatus.OK)
  @Post('activate')
  async activeAccountOrLogin(
    @Body() dto: ActiveAccountDto,
    @Res({passthrough: true}) res: Response
  ) {
    const data = await this.authService.activeAccount(dto)
    res.cookie(REFRESH_TOKEN_COOKIE, data.tokens.refreshToken, this.optionsCookie)
    return {
      user: data.user,
      accessToken: data.tokens.accessToken
    }
  }

  @HttpCode(HttpStatus.OK)
  @RefreshJwtGuard()
  @Get('refresh')
  async refresh(
    @User('id') id: string,
    @Cookie(REFRESH_TOKEN_COOKIE) refreshToken: string,
    @Res({passthrough: true}) res: Response
  ) {
    const {tokens, user} = await this.authService.refresh(refreshToken, id)
    res.cookie(REFRESH_TOKEN_COOKIE, tokens.refreshToken, this.optionsCookie)
    return {
      user,
      accessToken: tokens.accessToken
    }
  }
  
  @HttpCode(HttpStatus.NO_CONTENT)
  @Get('logout')
  async logout(
    @Cookie(REFRESH_TOKEN_COOKIE) refreshToken: string,
    @Res({passthrough: true}) res: Response
  ) {
    await this.authService.logout(refreshToken)
    res.clearCookie(REFRESH_TOKEN_COOKIE)
    return
  }
}
