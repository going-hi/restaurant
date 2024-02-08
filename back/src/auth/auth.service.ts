import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { generateCode } from 'src/common/generate-code';
import { SmsService } from 'src/sms/sms.service';
import { UserService } from 'src/user/user.service';
import { ActiveAccountDto } from './dto/active-account.dto';
import { User } from 'src/user/schemas/user.schema';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly smsService: SmsService,
    private readonly userService: UserService,
    private readonly tokenService: TokenService
  ) {}
  async phoneVerificationRequest(phone: number) {
    const code = generateCode()
    console.log(code)
    const updatedUser = await this.userService.setAuth(phone, true, code)
    console.log(updatedUser, 'updated')
    if(!updatedUser.modifiedCount) {
      const user = await this.userService.create(phone, code)
      console.log(user)
    }
    // await this.smsService.sendSms(code, phone)
    return
  }


  async activeAccount(dto: ActiveAccountDto) {
    const user = await this.userService.byPhone(dto.phone)
    if(!user.code) throw new BadRequestException("Не было запроса на подтверждения кода")
    if(user.code !== dto.code) throw new BadRequestException("Неверный код")
    await this.userService.setAuth(dto.phone, true, null)
    const data = await this.generateAndSaveToken(user)
    return data
  }

  async generateAndSaveToken(user: User) {
    const dto = {
      id: user._id,
      phone: user.phone,
      name: user.name,
      role: user.role
    }
    const tokens = this.tokenService.generateTokens(user)
    await this.tokenService.saveToken(tokens.refreshToken, user._id)
    return {
      tokens,
      user: dto
    }
  }

  async refresh(refreshToken: string, id: string) {
    const token = await this.tokenService.byToken(refreshToken)
    const user = await this.userService.byId(id)
    if(!user || !token) throw new UnauthorizedException()
    await this.tokenService.delete(token._id)
    const data = await this.generateAndSaveToken(user)
    return data
  }


  async logout(refreshToken: string) {
    if(!refreshToken) return
    const token = await this.tokenService.byToken(refreshToken)
    if(!token) return
    await this.tokenService.delete(token._id)
  }
}
