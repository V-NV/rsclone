import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DataJSDocument = DataJS & Document;

@Schema()
export class DataJS {
  @Prop({ unique: true })
  taskNum: number;
  @Prop()
  title: string;
  @Prop()
  task: string;
  @Prop()
  solution: string;
}

export const DataJSSchema = SchemaFactory.createForClass(DataJS);
