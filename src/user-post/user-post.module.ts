import { Module } from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { UserPostController } from './user-post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPost, UserPostSchema } from './schemas/user-post.schema';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [UserPostService],
  controllers: [UserPostController],
  imports: [
    MongooseModule.forFeature([
      { name: UserPost.name, schema: UserPostSchema },
    ]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '30d' },
      }),
    }),
  ],
})
export class UserPostModule {}
