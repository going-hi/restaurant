import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { Types } from "mongoose";
import { User } from "@modules/user/schemas/user.schema";
import { AbstractSchema } from "@/core/abstract";

@Schema({timestamps: true})
export class Token extends AbstractSchema{
    @Prop({ type: Types.ObjectId, ref: 'User'})
    user: User

    @Prop({required: true, unique: true})
    token: string
}

export const TokenSchema = SchemaFactory.createForClass(Token)