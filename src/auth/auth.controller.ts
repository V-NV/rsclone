import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: AuthDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: AuthDto) {
    return dto;
  }

  // @Delete('byEmail/:email')
  // async email(@Param('email') email: string) {
  //   return this.authService.deleteByEmail(email);
  // }

  @Get()
  async getUsers() {
    return this.authService.getAll();
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.authService.deleteUser(id);
  }
}
