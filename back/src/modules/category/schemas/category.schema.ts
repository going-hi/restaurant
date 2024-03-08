import { AbstractSchema } from "@/core/abstract";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class Category extends AbstractSchema{
    @Prop({ required: true, unique: true })
    name: string
}

export const CategorySchema = SchemaFactory.createForClass(Category)