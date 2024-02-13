import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type InformesDocument = HydratedDocument<Informes>;

@Schema()
export class Informes {
    @Prop()
    nombre: string;

    @Prop()
    fecha: string;

    @Prop()
    descripcion: string;
}

export const InformesSchema = SchemaFactory.createForClass(Informes);