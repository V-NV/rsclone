import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataCssController } from './data-css.controller';
import { DataCSS, DataCSSSchema } from './schemas/data-css.schema';
import { DataCssService } from './data-css.service';

@Module({
  controllers: [DataCssController],
  providers: [DataCssService],
  imports: [
    MongooseModule.forFeature([{ name: DataCSS.name, schema: DataCSSSchema }]),
  ],
})
export class DataCssModule {}
