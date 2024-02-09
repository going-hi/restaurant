import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Dish } from './schemas/dish.schema';
import { Model } from 'mongoose';
import { FileService } from 'src/file/file.service';
import { PaginationDishDto } from './dto';
import { ReturnPagination } from 'src/common/return-pagination.dto';

@Injectable()
export class DishService {
  constructor(
    @InjectModel(Dish.name) private dishModel: Model<Dish>,
    private readonly fileService: FileService
  ) {}
  async create(dto: CreateDishDto, photo: Express.Multer.File) {
    const oldDish = await this.dishModel.findOne({name: dto.name})
    if(oldDish) throw new BadRequestException("Блюдо с таким именем уже существует")
    const url = await this.fileService.upload(photo)
    const dish = await this.dishModel.create({...dto, photo: url})
    return dish
  }

  async findAll({categoryId, count, page}: PaginationDishDto) {
    let find = {}
    categoryId ? find['categories'] =  {$all: [categoryId]} : {}
    const categories = await this.dishModel.find(find, {}, {limit: count, skip: page * count - count, sort: {name: 1}}).populate({path: 'categories', model: 'Category'})
    const countCategory = await this.dishModel.countDocuments(find)
    return new ReturnPagination(categories, countCategory, count)
  }

  async findOne(id: string) {
    const dish = await this.dishModel.findOne({_id: id}).populate({path: 'categories', model: 'Category'})
    if(!dish) throw new NotFoundException()
    return dish
  }

  async update(id: string, dto: UpdateDishDto) {
    const dish = await this.findOne(id)
    if(dto.name) {
      const oldDish = await this.dishModel.findOne({name: dto.name})
      if(oldDish) throw new BadRequestException("Блюдо с таким именем уже существует")
    }
    return await this.dishModel.updateOne({_id: dish._id}, {...dto})
  }

  async remove(id: string) {
    await this.findOne(id)
    await this.dishModel.deleteOne({_id: id})
  }
}
