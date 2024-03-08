import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { Types } from 'mongoose';
import Dish from '@modules/dish/schemas/dish.schema';
import { User } from '@modules/user/schemas/user.schema';
import { AbstractSchema } from '@/core/abstract';

@Schema({ timestamps: true })
export class Basket extends AbstractSchema {
  @Prop({ type: Types.ObjectId, ref: 'Dish', required: true })
  dish: Dish;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ required: true })
  count: number;
}

export const BasketSchema = SchemaFactory.createForClass(Basket);
