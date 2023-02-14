import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DataCSSDocument = DataCSS & Document;

@Schema()
export class DataCSS {
  @Prop({ unique: true })
  taskNum: number;
  @Prop()
  title: string;
  @Prop()
  task: string;
  @Prop()
  solution: string;
}

export const DataCSSSchema = SchemaFactory.createForClass(DataCSS);
