import { AbstractSchema } from "@/core/abstract";
import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { Transform } from "class-transformer";

export enum DiscountType {
    PERCENT = 'percent',
    STATIC_INT = 'static int'
}

type discountKey = 'count' | 'type'

@Schema({timestamps: true})
export class PromoCode extends AbstractSchema{
    @Prop({ required: true })
    code: string

    @Prop(raw({
        count: {type: Number},
        type: {type: String, enum: DiscountType }
    }))
    discount: Record<discountKey, number | DiscountType>

    @Prop({default: null})
    description: string
}


export const PromoCodeSchema = SchemaFactory.createForClass(PromoCode)