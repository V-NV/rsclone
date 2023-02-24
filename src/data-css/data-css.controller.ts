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
import { DataHtmlDto } from 'src/data-html/dto/data-html.dto';
import { DataCssService } from './data-css.service';

@Controller('data-css')
export class DataCssController {
  constructor(private dataCSSService: DataCssService) {}

  @Get()
  async getAllDataHtml() {
    return this.dataCSSService.getAllDataCss();
  }

  @Roles('Admin')
  @UseGuards(RoleGuard)
  @UsePipes(new ValidationPipe())
  @Post('data-css-post')
  async postDataHtml(@Body() dto: DataHtmlDto) {
    return this.dataCSSService.postDataCss(dto);
  }

  @Roles('Admin')
  @UseGuards(RoleGuard)
  @Delete(':id')
  async deleteDataHtml(@Param('id') id: string) {
    return this.dataCSSService.deleteDataCss(id);
  }
}
