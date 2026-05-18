import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateParcoursDto, UpdateParcoursDto } from './dto/create-parcours.dto';
import { Parcours, ParcoursDocument } from './schemas/parcours.schema';

@Injectable()
export class ParcoursService {
  constructor(
    @InjectModel(Parcours.name)
    private readonly parcoursModel: Model<ParcoursDocument>,
  ) {}

  async create(dto: CreateParcoursDto): Promise<Parcours> {
    return this.parcoursModel.create(this.normalizeParcours(dto));
  }

  async findAll(): Promise<Parcours[]> {
    return this.parcoursModel.find().sort({ createdAt: -1, categorie: 1 }).exec();
  }

  async findByCategorie(categorie: string): Promise<Parcours> {
    const section = await this.parcoursModel.findOne({ categorie }).exec();
    if (!section) {
      throw new NotFoundException(`Categorie "${categorie}" introuvable`);
    }
    return section;
  }

  async update(id: string, dto: UpdateParcoursDto): Promise<Parcours> {
    const section = await this.parcoursModel
      .findByIdAndUpdate(id, this.normalizeParcours(dto), {
        new: true,
        runValidators: true,
      })
      .exec();

    if (!section) {
      throw new NotFoundException('Section de parcours introuvable');
    }

    return section;
  }

  async remove(id: string): Promise<{ deleted: true; id: string }> {
    const section = await this.parcoursModel.findByIdAndDelete(id).exec();
    if (!section) {
      throw new NotFoundException('Section de parcours introuvable');
    }

    return { deleted: true, id };
  }

  private normalizeParcours<T extends Partial<CreateParcoursDto>>(dto: T): T {
    if (!dto.entrees) {
      return dto;
    }

    return {
      ...dto,
      entrees: [...dto.entrees].sort((a, b) => (a.ordre ?? 0) - (b.ordre ?? 0)),
    };
  }
}
