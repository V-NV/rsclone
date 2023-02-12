import { Module } from '@nestjs/common';
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
  ],
})
export class DataHtmlModule {}
