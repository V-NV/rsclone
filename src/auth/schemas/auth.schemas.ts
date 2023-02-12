import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;
// export interface Auth extends Base {}

@Schema()
export class Auth extends TimeStamps {
  @Prop({ unique: true })
  email: string;

  @Prop()
  name: string;

  @Prop()
  password: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
