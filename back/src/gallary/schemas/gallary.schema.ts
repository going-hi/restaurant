import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { Types } from "mongoose";
import { Category } from "src/category/schemas/category.schema";

@Schema({timestamps: true})
export class Gallary {
    @Transform(({ value }) => value.toString())
    _id: string

    @Prop({ required: true })
    photo: string

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Category' }] })
    tags: string[]

    @Prop({ default: Date.now })
    createdAt!: Date

    @Prop({ default: Date.now })
    updatedAt!: Date
}

export const GallarySchema = SchemaFactory.createForClass(Gallary)