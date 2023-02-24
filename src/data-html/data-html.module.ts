import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { DataHtmlController } from './data-html.controller';
import { DataHtmlService } from './data-html.service';
import { DataHTML, DataHTMLSchema } from './schema/data-html.schema';

@Module({
  controllers: [DataHtmlController],
  providers: [DataHtmlService],
  imports: [
    MongooseModule.forFeature([
      { name: DataHTML.name, schema: DataHTMLSchema },
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
export class DataHtmlModule {}
