import { IsNumber, IsString } from 'class-validator';

export class DataHtmlDto {
  @IsNumber()
  taskNum: number;
  @IsString()
  title: string;
  @IsString()
  task: string;
  @IsString()
  solution: string;
}
