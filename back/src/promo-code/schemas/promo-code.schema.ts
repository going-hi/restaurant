import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { Transform } from "class-transformer";

export enum DiscountType {
    PERCENT = 'percent',
    STATIC_INT = 'static int'
}

type discountKey = 'count' | 'type'

@Schema({timestamps: true})
export class PromoCode {
    @Transform(({ value }) => value.toString())
    _id: string

    @Prop({ required: true })
    code: string

    @Prop(raw({
        count: {type: Number},
        type: {type: String, enum: DiscountType }
    }))
    discount: Record<discountKey, number | DiscountType>

    @Prop({default: null})
    description: string

    @Prop({ default: Date.now })
    createdAt!: Date

    @Prop({ default: Date.now })
    updatedAt!: Date
}


export const PromoCodeSchema = SchemaFactory.createForClass(PromoCode)