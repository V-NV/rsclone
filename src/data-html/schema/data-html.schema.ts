import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DataHTMLDocument = DataHTML & Document;

@Schema()
export class DataHTML {
  @Prop()
  course: string;

  @Prop()
  inner_test: string;

  @Prop()
  solution: string;

  @Prop()
  text_solution: string;
}

export const DataHTMLSchema = SchemaFactory.createForClass(DataHTML);
