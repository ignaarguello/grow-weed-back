import { Module } from '@nestjs/common';
import { InformesService } from './informes.service';
import { InformesController } from './informes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Informes, InformesSchema } from './schemas/informes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Informes.name,
        schema: InformesSchema,
      }
    ])
  ],
  controllers: [InformesController],
  providers: [InformesService],
})
export class InformesModule { }
