import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DataHtmlDto } from 'src/data-html/dto/data-html.dto';
import { DataCssService } from './data-css.service';

@Controller('data-css')
export class DataCssController {
  constructor(private dataCSSService: DataCssService) {}

  @Get()
  async getAllDataHtml() {
    return this.dataCSSService.getAllDataCss();
  }
  //TODO Сделать гварда для админа
  @UsePipes(new ValidationPipe())
  @Post('data-css-post')
  async postDataHtml(@Body() dto: DataHtmlDto) {
    return this.dataCSSService.postDataCss(dto);
  }

  //TODO Сделать гварда для админа
  @Delete(':id')
  async deleteDataHtml(@Param('id') id: string) {
    return this.dataCSSService.deleteDataCss(id);
  }
}
