import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoleEnum } from '@/core/enums';
import { AbstractSchema } from '@/core/abstract';

@Schema({ timestamps: true })
export class User extends AbstractSchema{
  @Prop()
  name?: string;

  @Prop({ type: String, default: RoleEnum.USER, enum: RoleEnum })
  role: RoleEnum;

  @Prop({ required: true, unique: true })
  phone: number;

  @Prop()
  birthday?: Date;

  @Prop()
  code?: number;

  @Prop({ default: false })
  isAuth: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
