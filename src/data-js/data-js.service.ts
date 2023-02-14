import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DataJS, DataJSDocument } from './schemas/data-js.schema';
import { DataHtmlDto } from 'src/data-html/dto/data-html.dto';

@Injectable()
export class DataJsService {
  constructor(
    @InjectModel(DataJS.name) private DataJSModel: Model<DataJSDocument>,
  ) {}

  async getAllDataJS() {
    return this.DataJSModel.find().exec();
  }

  async postDataJS(dto: DataHtmlDto) {
    const newDataHtml = new this.DataJSModel(dto);
    return newDataHtml.save();
  }
  async deleteDataJS(id: string) {
    return await this.DataJSModel.findByIdAndDelete(id);
  }
}
