import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInformeDto } from './dto/create-informe.dto';
import { UpdateInformeDto } from './dto/update-informe.dto';
import { Informes, InformesDocument } from './schemas/informes.schema';
import { Model } from 'mongoose'

@Injectable()
export class InformesService {
  constructor(
    @InjectModel(Informes.name) private informesModules: Model<InformesDocument>) { }

  async create(createInformeDto: CreateInformeDto) {
    const informeCreado = await this.informesModules.create(createInformeDto)
    return `Informe creado correctamente ${informeCreado}`;
  }

  async findAll() {
    const lista = await this.informesModules.find({});
    return lista;
  }

  findOne(id: number) {
    return `This action returns a #${id} informe`;
  }

  update(id: number, updateInformeDto: UpdateInformeDto) {
    return `This action updates a #${id} informe`;
  }

  remove(id: number) {
    return `This action removes a #${id} informe`;
  }
}
