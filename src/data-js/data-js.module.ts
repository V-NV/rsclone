import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataJsController } from './data-js.controller';
import { DataJsService } from './data-js.service';
import { DataJS, DataJSSchema } from './schemas/data-js.schema';

@Module({
  controllers: [DataJsController],
  providers: [DataJsService],
  imports: [
    MongooseModule.forFeature([{ name: DataJS.name, schema: DataJSSchema }]),
  ],
})
export class DataJsModule {}
