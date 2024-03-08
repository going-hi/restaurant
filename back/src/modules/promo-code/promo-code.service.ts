import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePromoCodeDto, UpdatePromoCodeDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { PromoCode } from './schemas/promo-code.schema';
import { Model } from 'mongoose';
import {generate} from 'shortid'

@Injectable()
export class PromoCodeService {
  constructor(
    @InjectModel(PromoCode.name) private promoCodeModel: Model<PromoCode>
  ) {}

  async create(dto: CreatePromoCodeDto) {
    const code = generate()
    const promoCode = await this.promoCodeModel.create({...dto, code})
    return promoCode
  }

  async findAll() {
    const promoCodes = await this.promoCodeModel.find({}, {}, {sort: {createdAt: -1}})
    return promoCodes
  }

  async findOne(id: string) {
    const promoCode = await this.promoCodeModel.findById(id)
    if(!promoCode) throw new NotFoundException()
    return promoCode
  }

  async update(id: string, dto: UpdatePromoCodeDto) {
    await this.findOne(id)
    return await this.promoCodeModel.findOneAndUpdate({_id: id}, {...dto}, {returnDocument: 'after'})
  }

  async remove(id: string) {
    await this.findOne(id)
    await this.promoCodeModel.deleteOne({_id: id})
  }
}
