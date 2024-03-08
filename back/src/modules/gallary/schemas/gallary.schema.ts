import { AbstractSchema } from "@/core/abstract";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { Types } from "mongoose";

@Schema({timestamps: true})
export class Gallary extends AbstractSchema{
    @Prop({ required: true })
    photo: string

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Category' }] })
    tags: string[]
}

export const GallarySchema = SchemaFactory.createForClass(Gallary)