import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { Types } from "mongoose";
import { User } from "src/user/schemas/user.schema";

@Schema({timestamps: true})
export class Token {
    @Transform(({ value }) => value.toString())
    _id: string
  
    @Prop({ type: Types.ObjectId, ref: 'User'})
    user: User

    @Prop({required: true, unique: true})
    token: string

    @Prop({ default: Date.now })
    createdAt!: Date

    @Prop({ default: Date.now })
    updatedAt!: Date
}

export const TokenSchema = SchemaFactory.createForClass(Token)