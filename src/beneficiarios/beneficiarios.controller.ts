import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BeneficiariosService } from './beneficiarios.service';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';
import { UpdateBeneficiarioDto } from './dto/update-beneficiario.dto';
import { Beneficiario } from './entities/beneficiario.entity';

@Controller('beneficiarios')
export class BeneficiariosController {
  constructor(private readonly beneficiariosService: BeneficiariosService) {}

  @Post()
  create(@Body() createBeneficiarioDto: CreateBeneficiarioDto) {
    return this.beneficiariosService.create(createBeneficiarioDto);
  }

  @Get()
  findAll() {
    return this.beneficiariosService.findAll();
  }

  @Get('curp/:curp')
  async findByCurp(@Param('curp') curp: string): Promise<Beneficiario[]> {
    return this.beneficiariosService.findByCurp(curp);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beneficiariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeneficiarioDto: UpdateBeneficiarioDto) {
    return this.beneficiariosService.update(+id, updateBeneficiarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beneficiariosService.remove(+id);
  }
}
