import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DataHtmlDto } from './dto/data-html.dto';
import { DataHTML, DataHTMLDocument } from './schema/data-html.schema';

@Injectable()
export class DataHtmlService {
  constructor(
    @InjectModel(DataHTML.name) private DataHtmlModel: Model<DataHTMLDocument>,
  ) {}

  async getAllDataHtml() {
    return this.DataHtmlModel.find().exec();
  }

  async postDataHtml(dto: DataHtmlDto) {
    const newDataHtml = new this.DataHtmlModel(dto);
    return newDataHtml.save();
  }
  async deleteDataHtml(id: string) {
    return await this.DataHtmlModel.findByIdAndDelete(id);
  }
}
