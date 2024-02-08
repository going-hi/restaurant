import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/schemas/user.schema";
import { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } from "./constants/auth.constant";
import { InjectModel } from "@nestjs/mongoose";
import { Token } from "./schemas/token.schema";
import { Model, Types } from "mongoose";

@Injectable()
export class TokenService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        @InjectModel(Token.name) private tokenModel: Model<Token>
    ) {}

    generateTokens({phone, name, _id}: User) {
        const payload = {id: _id, phone, name}
        const accessToken = this.jwtService.sign(payload, {expiresIn: '30m', secret: this.configService.get(ACCESS_JWT_SECRET)})
        const refreshToken = this.jwtService.sign(payload, {expiresIn: '15d', secret: this.configService.get(REFRESH_JWT_SECRET)})
        return {accessToken, refreshToken}
    }

    async saveToken(refreshToken: string, userId: string) {
        const tokenData = await this.tokenModel.findOne({user: userId })
        if(tokenData) {
            tokenData.token = refreshToken
            tokenData.save()
        }
        const token = await this.tokenModel.create({token: refreshToken, user: userId})
        return token
    }

    async delete(id: string) {
        await this.tokenModel.deleteOne({_id: id})
    }

    async byToken(refreshToken: string) {
        const token = await this.tokenModel.findOne({token: refreshToken})
        return token
    }
}