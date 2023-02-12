import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConnect } from './configs/mongoDB.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
// import { getMongoDBConfig } from './configs/mongoDB.config';
import { UserPostModule } from './user-post/user-post.module';

// const DB_URL = `mongodb+srv://UsErPaSS:Tz4lI65pUSJjiSaS@cluster0.tc0vir6.mongodb.net/?retryWrites=true&w=majority`;
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: getMongoConnect(configService),
      }),
      inject: [ConfigService],
    }),
    // MongooseModule.forRoot(DB_URL),
    UsersModule,
    AuthModule,
    UserPostModule,
  ],
})
export class AppModule {}
