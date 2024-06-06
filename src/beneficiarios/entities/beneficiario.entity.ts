import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity({ name: 'beneficiarios' })
export class Beneficiario {

    @PrimaryGeneratedColumn({name: 'beneficiarioid'})
    beneficiarioId: number;

    @Column()
    folio: number;      

    @Column()
    curp: string;

    @Column()
    nombre: string;

    @Column()
    estatus: string;

    @Column()
    programa: string;
}
