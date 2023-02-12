import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserPostDto } from './dto/user-post.dto';
import { UserPostService } from './user-post.service';

@Controller('user-post')
export class UserPostController {
  constructor(private userPostService: UserPostService) {}

  @Get('getAllPosts')
  async getAllPosts() {
    return this.userPostService.getAllPosts();
  }

  @Post('postNewPost')
  async postNewPost(@Body() dto: UserPostDto) {
    return this.userPostService.createUserPost(dto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userPostService.deleteUserPost(id);
  }
}
