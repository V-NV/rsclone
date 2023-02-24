import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataCssController } from './data-css.controller';
import { DataCSS, DataCSSSchema } from './schemas/data-css.schema';
import { DataCssService } from './data-css.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [DataCssController],
  providers: [DataCssService],
  imports: [
    MongooseModule.forFeature([{ name: DataCSS.name, schema: DataCSSSchema }]),
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
export class DataCssModule {}
