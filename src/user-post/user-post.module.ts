import { Module } from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { UserPostController } from './user-post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPost, UserPostSchema } from './schemas/user-post.schema';

@Module({
  providers: [UserPostService],
  controllers: [UserPostController],
  imports: [
    MongooseModule.forFeature([
      { name: UserPost.name, schema: UserPostSchema },
    ]),
  ],
})
export class UserPostModule {}
