import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
import { User } from "src/user/schemas/user.schema";

@Schema()
export class Token {
    @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'users'}})
    user: User

    @Prop({required: true, unique: true})
    token: string

    _id: Types.ObjectId
}

export const TokenSchema = SchemaFactory.createForClass(Token)