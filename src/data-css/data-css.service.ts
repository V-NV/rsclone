import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DataCSS, DataCSSDocument } from './schemas/data-css.schema';
import { DataHtmlDto } from 'src/data-html/dto/data-html.dto';

@Injectable()
export class DataCssService {
  constructor(
    @InjectModel(DataCSS.name) private DataCSSModel: Model<DataCSSDocument>,
  ) {}

  async getAllDataCss() {
    return this.DataCSSModel.find().exec();
  }

  async postDataCss(dto: DataHtmlDto) {
    const newDataHtml = new this.DataCSSModel(dto);
    return newDataHtml.save();
  }
  async deleteDataCss(id: string) {
    return await this.DataCSSModel.findByIdAndDelete(id);
  }
}
