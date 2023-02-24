import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { DataJsController } from './data-js.controller';
import { DataJsService } from './data-js.service';
import { DataJS, DataJSSchema } from './schemas/data-js.schema';

@Module({
  controllers: [DataJsController],
  providers: [DataJsService],
  imports: [
    MongooseModule.forFeature([{ name: DataJS.name, schema: DataJSSchema }]),
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
export class DataJsModule {}
