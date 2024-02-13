import { IsNotEmpty, Length } from 'class-validator'

export class CreateInformeDto {
    @IsNotEmpty()
    @Length(1,30)
    nombre: string;

    @IsNotEmpty()
    fecha: string;

    @IsNotEmpty()
    descripcion: string;
}
