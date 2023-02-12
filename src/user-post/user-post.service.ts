import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPostDto } from './dto/user-post.dto';
import { UserPost, UserPostDocument } from './schemas/user-post.schema';

@Injectable()
export class UserPostService {
  constructor(
    @InjectModel(UserPost.name) private UserPostModel: Model<UserPostDocument>,
  ) {}

  async getAllPosts() {
    return this.UserPostModel.find().exec();
  }
  async createUserPost(userPostDto: UserPostDto) {
    const newUserPost = new this.UserPostModel(userPostDto);
    return newUserPost.save();
  }
  async deleteUserPost(id: string) {
    return await this.UserPostModel.findByIdAndRemove(id);
  }
}
