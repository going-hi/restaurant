import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Promotion } from './schemas/promotion.schema';
import { Model } from 'mongoose';
import { FileService } from 'src/file/file.service';

@Injectable()
export class PromotionService {
  constructor(
    @InjectModel(Promotion.name) private promotionModel: Model<Promotion>,
    private readonly fileService: FileService
  ) {}
  async create(dto: CreatePromotionDto, file: Express.Multer.File) {
    const url = await this.fileService.upload(file)
    const promotion = await this.promotionModel.create({...dto, photo: url})
    return promotion
  }

  async findAll() {
    const promotions = await this.promotionModel.find().sort({createAt: 1})
    return promotions
  }

  async findOne(id: string) {
    const promotions = await this.promotionModel.findById(id)
    if(!promotions) throw new NotFoundException()
    return promotions
  }

  async update(id: string, dto: UpdatePromotionDto) {
    await this.findOne(id)
    return await this.promotionModel.findOneAndUpdate({_id: id}, {...dto}, {returnDocument: 'after'})
  }

  async remove(id: string) {
    const {photo} = await this.findOne(id)
    await this.promotionModel.deleteOne({_id: id})
    await this.fileService.delete(photo)
  }
}
