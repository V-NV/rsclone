import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DataHTMLDocument = DataHTML & Document;

@Schema()
export class DataHTML {
  @Prop({ unique: true })
  taskNum: number;
  @Prop()
  title: string;
  @Prop()
  task: string;
  @Prop()
  solution: string;
}

export const DataHTMLSchema = SchemaFactory.createForClass(DataHTML);
