import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InformesService } from './informes.service';
import { CreateInformeDto } from './dto/create-informe.dto';
import { UpdateInformeDto } from './dto/update-informe.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('informes')
@Controller('informes')
export class InformesController {
  constructor(private readonly informesService: InformesService) { }

  @Post()
  create(@Body() createInformeDto: CreateInformeDto) {
    return this.informesService.create(createInformeDto);
  }

  @Get()
  findAll() {
    return this.informesService.findAll();
  }

  //* Obtener Por ID
  @Get(':_id')
  findOneById(@Param('_id') _id: string) {
    return this.informesService.findOne(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateInformeDto: UpdateInformeDto) {
    return this.informesService.update(_id, updateInformeDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.informesService.remove(_id);
  }
}
