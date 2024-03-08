import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(
      @InjectModel(User.name) private userModel: Model<User>
    ) {}

    async create(phone: number, code: number ) {
      const user =  await this.userModel.create({phone, code})
      return user
    }

    async byId(id: string) {
      const user = await this.userModel.findById(id)
      if(!user) throw new NotFoundException()
      return user
    }

    async byPhone(phone: number) {
      const user = await this.userModel.findOne({phone})
      if(!user) throw new NotFoundException()
      return user
    }

    async setAuth(phone: number, isAuth: boolean, code: number | null) {
      const user = await this.userModel.updateOne({phone}, {isAuth, code})
      return user
    }
}
