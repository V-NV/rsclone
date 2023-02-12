import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';
import { Auth, AuthDocument } from './schemas/auth.schemas';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name) private AuthModel: Model<AuthDocument>) {}

  async getAll(): Promise<Auth[]> {
    return this.AuthModel.find().exec();
  }

  async register(authDto: AuthDto) {
    const newRegister = new this.AuthModel(authDto);
    return newRegister.save();
  }
  async deleteUser(id: string) {
    return await this.AuthModel.findByIdAndRemove(id);
  }
}
