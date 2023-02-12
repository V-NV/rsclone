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

  @Get('allUsers')
  async getUsers() {
    return this.authService.getAll();
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.authService.deleteUser(id);
  }
}
