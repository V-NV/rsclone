import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { Roles } from './decorators/role.decorator';
import { AuthDto } from './dto/auth.dto';
import { AuthJwtGuard } from './guards/auth-jwt.guard';
import { RoleGuard } from './guards/roles.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: AuthDto) {
    const user = await this.authService.findUser(dto.email);
    if (user) {
      throw new BadRequestException('Пользователь уже зарегистрирован');
    }
    return this.authService.registerUser(dto);
  }

  @Post('login')
  async login(@Body() { email, password }: AuthDto) {
    const users = await this.authService.validateUser(email, password);

    const access = await this.authService.loginUser(users);

    const refresh = await this.authService.refreshToken(users._id);

    return { username: users.name, ...access, ...refresh };
  }

  @Roles('Admin')
  @UseGuards(RoleGuard)
  @Get()
  async getUsers() {
    return this.authService.getAllUsers();
  }

  @Roles('Admin')
  @UseGuards(RoleGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.authService.deleteUser(id);
  }

  @Roles('Admin')
  @UseGuards(RoleGuard)
  @Patch(':email')
  async getRole(@Param('email') email: string, @Body() role: string) {
    return this.authService.getRole(email, role);
  }
  @UseGuards(AuthJwtGuard)
  @Post('login-user')
  async userIsLogin(@Headers('Authorization') authorization: string) {
    const token = authorization.split(' ')[1];
    const user = this.jwtService.verify(token);
    const foundUser = this.authService.findUser(user.user.email);

    return foundUser ? true : false;
  }

  @Roles('Admin')
  @UseGuards(RoleGuard)
  @Post('is-admin')
  async isAdmin(@Headers('Authorization') authorization: string) {
    const token = authorization.split(' ')[1];
    const user = this.jwtService.verify(token);
    const foundUser = this.authService.findUser(user.user.email);

    return foundUser ? true : false;
  }
}
