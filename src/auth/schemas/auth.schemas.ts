import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;
// export interface Auth extends Base {}

@Schema({ timestamps: true, versionKey: false })
export class Auth {
  @Prop({ unique: true })
  email: string;

  @Prop()
  name: string;

  @Prop()
  password: string;
  @Prop()
  role: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
