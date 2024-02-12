import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { Types } from "mongoose";

@Schema({timestamps: true})
export class Promotion {
    @Transform(({ value }) => value.toString())
    _id: string

    @Prop({ required: true })
    photo: string

    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    description: string

    @Prop({ default: Date.now })
    createdAt!: Date

    @Prop({ default: Date.now })
    updatedAt!: Date
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion)