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
import { DataJsService } from './data-js.service';

@Controller('data-js')
export class DataJsController {
  constructor(private dataJSService: DataJsService) {}

  @Get()
  async getAllDataHtml() {
    return this.dataJSService.getAllDataJS();
  }
  @UsePipes(new ValidationPipe())
  @Post('data-js-post')
  async postDataHtml(@Body() dto: DataHtmlDto) {
    return this.dataJSService.postDataJS(dto);
  }

  @Delete(':id')
  async deleteDataHtml(@Param('id') id: string) {
    return this.dataJSService.deleteDataJS(id);
  }
}
