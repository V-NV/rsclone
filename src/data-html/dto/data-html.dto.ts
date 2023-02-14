import { IsString } from 'class-validator';

export class DataHtmlDto {
  @IsString()
  course: string;
  @IsString()
  inner_test: string;
  @IsString()
  solution: string;
  @IsString()
  text_solution: string;
}
