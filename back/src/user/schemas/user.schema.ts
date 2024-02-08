import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform, Type } from "class-transformer";
import { Role } from "src/role/Role.enum";

@Schema({timestamps: true})
export class User {
    @Transform(({ value }) => value.toString())
    _id: string

    @Prop()
    name?: string

    @Prop({type: String, default: Role.USER, enum: Role})
    role: Role

    @Prop({ required: true, unique: true })
    phone: number

    @Prop()
    birthday?: Date

    @Prop()
    code?: number

    @Prop({default: false})
    isAuth: boolean

    @Prop({ default: Date.now })
    createdAt!: Date

    @Prop({ default: Date.now })
    updatedAt!: Date
}

export const UserSchema = SchemaFactory.createForClass(User)