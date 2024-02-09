import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { Types } from "mongoose";
import { Category } from "src/category/schemas/category.schema";

@Schema({timestamps: true})
export class Dish {
    @Transform(({ value }) => value.toString())
    _id: string

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

    @Prop({ default: Date.now })
    createdAt!: Date

    @Prop({ default: Date.now })
    updatedAt!: Date
}

export const DishSchema = SchemaFactory.createForClass(Dish)