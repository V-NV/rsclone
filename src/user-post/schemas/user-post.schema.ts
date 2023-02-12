import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserPostDocument = UserPost & Document;

@Schema({ timestamps: true, versionKey: false })
export class UserPost {
  @Prop()
  imgUrl: string;
  @Prop()
  title: string;
  @Prop()
  post: string;
}

export const UserPostSchema = SchemaFactory.createForClass(UserPost);
