import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: AuthDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: AuthDto) {
    return dto;
  }

  @Get(':email')
  async email(@Param('email') email: string) {
    return this.authService.email(email);
  }

  @Get()
  async getUsers() {
    return this.authService.getAll();
  }

  @Delete(':email')
  async deleteUser(@Param('email') email: string) {
    return this.authService.email(email);
  }
}
