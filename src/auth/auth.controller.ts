import {
  BadRequestException,
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
import { JwtService } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { AuthJwtGuard } from './guards/auth-jwt.guard';

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
    // const det = this.jwtService.decode(access.accessToken);

    // const verify = this.jwtService.verifyAsync(access.accessToken);
    // console.log(verify);
    return { username: users.name, ...access, ...refresh };
    // return det;
  }

  @UseGuards(AuthJwtGuard)
  @Get()
  async getUsers() {
    return this.authService.getAllUsers();
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.authService.deleteUser(id);
  }
}

// interface test {
//   user: {
//     _id: string;
//     email: string;
//     name: string;
//     password: string;
//     createdAt: string;
//     updatedAt: string;
//   };
//   iat: number;
// }
