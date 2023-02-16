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
import { DataHtmlService } from './data-html.service';
import { DataHtmlDto } from './dto/data-html.dto';

@Controller('data-html')
export class DataHtmlController {
  constructor(private dataHtmlService: DataHtmlService) {}

  @Get()
  async getAllDataHtml() {
    return this.dataHtmlService.getAllDataHtml();
  }
  //TODO Сделать гварда для админа
  @UsePipes(new ValidationPipe())
  @Post('data-html-post')
  async postDataHtml(@Body() dto: DataHtmlDto) {
    return this.dataHtmlService.postDataHtml(dto);
  }
  //TODO Сделать гварда для админа
  @Delete(':id')
  async deleteDataHtml(@Param('id') id: string) {
    return this.dataHtmlService.deleteDataHtml(id);
  }
}
