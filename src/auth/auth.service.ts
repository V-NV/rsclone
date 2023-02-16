import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';
import { Auth, AuthDocument } from './schemas/auth.schemas';
import { compare, genSalt, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private AuthModel: Model<AuthDocument>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async getAllUsers(): Promise<Auth[]> {
    return this.AuthModel.find().exec();
  }

  async findUser(email: string) {
    return this.AuthModel.findOne({ email }).exec();
  }

  async registerUser(authDto: AuthDto) {
    const salt = await genSalt(10);

    const newRegisterUser = new this.AuthModel({
      email: authDto.email,
      name: authDto.name,
      password: await hash(authDto.password, salt),
      role: 'User',
    });
    return newRegisterUser.save();
  }

  async validateUser(email: string, password: string) {
    const user = await this.findUser(email);
    if (!user) {
      throw new UnauthorizedException('Пользователь не зарегистрирован');
    }
    const correctPass = await compare(password, user.password);
    if (!correctPass) {
      throw new UnauthorizedException('Неверный пароль');
    }
    return user;
  }

  async deleteUser(id: string) {
    return await this.AuthModel.findByIdAndRemove(id);
  }

  async loginUser(user: AuthDto) {
    return {
      accessToken: await this.jwtService.signAsync({ user }),
    };
  }
  async refreshToken(userID: string) {
    return {
      refreshToken: await this.jwtService.signAsync(
        { userID },
        {
          secret: this.configService.get('JWT_SECRET'),
          expiresIn: '30d',
        },
      ),
    };
  }
  async getRole(email: string, role) {
    return await this.AuthModel.findOneAndUpdate({ email }, role);
  }
}
