import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConnect } from './configs/mongoDB.config';
import { AuthModule } from './auth/auth.module';
// import { getMongoDBConfig } from './configs/mongoDB.config';
import { UserPostModule } from './user-post/user-post.module';
import { DataHtmlModule } from './data-html/data-html.module';
import { DataCssModule } from './data-css/data-css.module';
import { DataJsModule } from './data-js/data-js.module';

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
    AuthModule,
    UserPostModule,
    DataHtmlModule,
    DataCssModule,
    DataJsModule,
  ],
})
export class AppModule {}
