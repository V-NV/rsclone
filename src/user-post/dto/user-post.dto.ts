import { IsString } from 'class-validator';

export class UserPostDto {
  @IsString()
  imgUrl: string;
  @IsString()
  title: string;
  @IsString()
  post: string;
  @IsString()
  username: string;
}
