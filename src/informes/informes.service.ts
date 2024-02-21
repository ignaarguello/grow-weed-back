import { HttpException, Injectable } from '@nestjs/common';
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

  async findOne(_id: string) {
    const checkExistInforme = await this.informesModules.findOne({ _id })
    if (!checkExistInforme) throw new HttpException('Informe no encontrado', 400)

    return checkExistInforme
  }

  async update(_id: string, updateInformeDto: UpdateInformeDto) {
    const checkExistInforme = await this.informesModules.findOneAndUpdate({ _id }, updateInformeDto, { new: true })
    if (!checkExistInforme) throw new HttpException('Informe no encontrado', 400)
    return updateInformeDto
  }

  remove(id: number) {
    return `This action removes a #${id} informe`;
  }
}
