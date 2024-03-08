import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Category } from "@modules/category/schemas/category.schema";
import { AbstractSchema } from "@/core/abstract";

@Schema({timestamps: true})
export default class Dish extends AbstractSchema{
    @Prop({ required: true, unique: true })
    name: string

    @Prop({ default: null })
    photo: string

    @Prop({ default: null })
    description: string

    @Prop({ required: true })
    price: number

    // * Скидка в процентах
    @Prop({default: 0})
    discount: number

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Category' }] })
    categories: Category[]
}

export const DishSchema = SchemaFactory.createForClass(Dish)