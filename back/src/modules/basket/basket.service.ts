import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBasketDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Basket } from './schemas/basket.schema';
import { Model } from 'mongoose';
import { PaginationDto } from '@core/pagination';
import { ReturnPagination } from '@/core/pagination/return-pagination.dto';

@Injectable()
export class BasketService {
  constructor(@InjectModel(Basket.name) private basketModel: Model<Basket>) {}
  async create(dto: CreateBasketDto, userId: string) {
    const oldBasket = await this.basketModel.findOne({
      user: userId,
      dish: dto.dishId,
    });
    if (oldBasket) throw new BadRequestException('Такая запись уже есть');
    const basket = await this.basketModel.create({
      user: userId,
      dish: dto.dishId,
      count: dto.count,
    });
    return basket;
  }

  async findAll({ count, page }: PaginationDto, userId: string) {
    const find = { user: userId };
    const basket = await this.basketModel
      .find(
        find,
        {},
        { limit: count, skip: page * count - count, sort: { createAt: 1 } },
      )
      .populate('dish');
    const basketSumPrice = await this.basketModel.find(find).populate('dish');
    const sum = basketSumPrice.reduce(
      (acc, basket) => (acc += basket.count * basket.dish.price),
      0,
    );
    const countBasket = await this.basketModel.countDocuments(find);
    return { ...new ReturnPagination(basket, countBasket, count), sum };
  }

  async findOne(id: string) {
    const basket = await this.basketModel
      .findOne({ _id: id })
      .populate('dish')
      .populate('user', { name: true, _id: true, role: true });
    if (!basket) throw new NotFoundException();
    return basket;
  }

  async update(id: string, count: number, userId: string) {
    const basket = await this.findOne(id);
    if (userId !== basket.user._id.toString()) throw new ForbiddenException();
    basket.count = count;
    return basket.save();
  }

  async remove(id: string, userId: string) {
    const basket = await this.findOne(id);
    if (userId !== basket.user._id.toString()) throw new ForbiddenException();
    await this.basketModel.deleteOne({ _id: id });
  }
}
