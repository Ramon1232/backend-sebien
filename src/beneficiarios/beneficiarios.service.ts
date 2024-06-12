import { Injectable } from '@nestjs/common';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';
import { UpdateBeneficiarioDto } from './dto/update-beneficiario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Beneficiario } from './entities/beneficiario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BeneficiariosService {

  constructor(
    @InjectRepository(Beneficiario)
    private beneficiarioRepository:Repository<Beneficiario>
  ){

  }
  create(createBeneficiarioDto: CreateBeneficiarioDto) {
    return 'This action adds a new beneficiario';
  }

  async findAll(): Promise<Beneficiario[]> {
    return await this.beneficiarioRepository.find();
  }

  async findByCurp(curp: string): Promise<Beneficiario[]> {
    if (!curp) {
      throw new Error('CURP no provista');
    }
    return await this.beneficiarioRepository.find({ where: { curp } });
  }

  findOne(id: number) {
    return `This action returns a #${id} beneficiario`;
  }

  update(id: number, updateBeneficiarioDto: UpdateBeneficiarioDto) {
    return `This action updates a #${id} beneficiario`;
  }

  remove(id: number) {
    return `This action removes a #${id} beneficiario`;
  }
}
