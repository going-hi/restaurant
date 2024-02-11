import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { Types } from "mongoose";
import { Category } from "src/category/schemas/category.schema";
import { Dish } from "src/dish/schemas/dish.schema";
import { User } from "src/user/schemas/user.schema";

@Schema({timestamps: true})
export class Basket {
    @Transform(({ value }) => value.toString())
    _id: string

    @Prop({ type: Types.ObjectId, ref: 'Dish', required: true})
    dish: Dish

    @Prop({ type: Types.ObjectId, ref: 'User', required: true})
    user: User

    @Prop({required: true})
    count: number

    @Prop({ default: Date.now })
    createdAt!: Date

    @Prop({ default: Date.now })
    updatedAt!: Date
}

export const BasketSchema = SchemaFactory.createForClass(Basket)