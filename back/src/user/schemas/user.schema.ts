import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
import { Token } from "src/auth/schemas/token.schema";

@Schema()
export class User {
    @Prop()
    name?: string

    @Prop({ required: true, unique: true })
    phone: number

    @Prop()
    birthday?: Date

    @Prop()
    code?: number

    @Prop({default: false})
    isAuth: boolean

    @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'tokens'}})
    token: Token

    _id: Types.ObjectId | string
}

export const UserSchema = SchemaFactory.createForClass(User)