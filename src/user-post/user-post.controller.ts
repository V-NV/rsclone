import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthJwtGuard } from 'src/auth/guards/auth-jwt.guard';
import { UserPostDto } from './dto/user-post.dto';
import { UserPostService } from './user-post.service';

@Controller('user-post')
export class UserPostController {
  constructor(private userPostService: UserPostService) {}

  @Get()
  async getAllPosts() {
    return this.userPostService.getAllPosts();
  }
  @UseGuards(AuthJwtGuard)
  @UsePipes(new ValidationPipe())
  @Post('postNewPost')
  async postNewPost(@Body() dto: UserPostDto) {
    return this.userPostService.createUserPost(dto);
  }

  //TODO Сделать гварда для админа
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userPostService.deleteUserPost(id);
  }
}
