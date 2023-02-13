import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DataHtmlService } from './data-html.service';
import { DataHtmlDto } from './dto/data-html.dto';

@Controller('data-html')
export class DataHtmlController {
  constructor(private dataHtmlService: DataHtmlService) {}

  @Get()
  async getAllDataHtml() {
    return this.dataHtmlService.getAllDataHtml();
  }

  @Post('data-html-post')
  async postDataHtml(@Body() dto: DataHtmlDto) {
    return this.dataHtmlService.postDataHtml(dto);
  }

  @Delete(':id')
  async deleteDataHtml(@Param('id') id: string) {
    return this.dataHtmlService.deleteDataHtml(id);
  }
}
