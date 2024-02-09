import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";

@Schema({timestamps: true})
export class Category {
    @Transform(({ value }) => value.toString())
    _id: string

    @Prop({ required: true, unique: true })
    name: string

    @Prop({ default: Date.now })
    createdAt!: Date

    @Prop({ default: Date.now })
    updatedAt!: Date
}

export const CategorySchema = SchemaFactory.createForClass(Category)