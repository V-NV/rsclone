import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';
import { Auth, AuthDocument } from './schemas/auth.schemas';
import { compare, genSalt, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private AuthModel: Model<AuthDocument>,
    private readonly jwtService: JwtService,
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
    });
    return newRegisterUser.save();
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Pick<Auth, 'email'>> {
    const user = await this.findUser(email);
    if (!user) {
      throw new UnauthorizedException('Пользователь не зарегистрирован');
    }
    const correctPass = await compare(password, user.password);
    if (!correctPass) {
      throw new UnauthorizedException('Неверный пароль');
    }
    return { email: user.email };
  }

  async deleteUser(id: string) {
    return await this.AuthModel.findByIdAndRemove(id);
  }

  async loginUser(email: string) {
    const encryptedDate = { email };
    return {
      accessToken: await this.jwtService.signAsync(encryptedDate),
    };
  }
}
