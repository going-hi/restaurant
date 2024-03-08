import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schemas/category.schema';
import { Model } from 'mongoose';
import { ReturnPagination, PaginationDto } from '@/core/pagination';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}
  async create(dto: CreateCategoryDto) {
    const oldCategory = await this.categoryModel.findOne({ name: dto.name });
    if (oldCategory) throw new BadRequestException();
    const category = await this.categoryModel.create({ ...dto });
    return category;
  }

  async findAll({ count, page }: PaginationDto) {
    const categories = await this.categoryModel.find(
      {},
      {},
      { limit: count, skip: page * count - count, sort: { name: 1 } },
    );
    const countCategory = await this.categoryModel.countDocuments();
    return new ReturnPagination(categories, countCategory, count);
  }

  async findOne(id: string) {
    const category = await this.categoryModel.findById(id);
    if (!category) throw new NotFoundException();
    return category;
  }

  async update(id: string, dto: CreateCategoryDto) {
    const category = await this.findOne(id);
    const oldCategory = await this.categoryModel.findOne({ name: dto.name });
    if (oldCategory)
      throw new BadRequestException('Такая категория уже существует');
    category.name = dto.name;
    return await category.save();
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.categoryModel.deleteOne({ _id: id });
  }
}
