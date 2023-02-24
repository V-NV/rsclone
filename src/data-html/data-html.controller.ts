import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from 'src/auth/decorators/role.decorator';
import { RoleGuard } from 'src/auth/guards/roles.guard';
import { DataHtmlService } from './data-html.service';
import { DataHtmlDto } from './dto/data-html.dto';

@Controller('data-html')
export class DataHtmlController {
  constructor(private dataHtmlService: DataHtmlService) {}

  @Get()
  async getAllDataHtml() {
    return this.dataHtmlService.getAllDataHtml();
  }
  @Roles('Admin')
  @UseGuards(RoleGuard)
  @UsePipes(new ValidationPipe())
  @Post('data-html-post')
  async postDataHtml(@Body() dto: DataHtmlDto) {
    return this.dataHtmlService.postDataHtml(dto);
  }
  @Roles('Admin')
  @UseGuards(RoleGuard)
  @Delete(':id')
  async deleteDataHtml(@Param('id') id: string) {
    return this.dataHtmlService.deleteDataHtml(id);
  }
}
