import { AbstractSchema } from "@/core/abstract";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class Promotion extends AbstractSchema{
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