import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreatePortfolioItemDto,
  PortfolioCategory,
  UpdatePortfolioItemDto,
} from './dto/create-portfolio-item.dto';
import {
  PortfolioItem,
  PortfolioItemDocument,
} from './schemas/portfolio-item.schema';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(PortfolioItem.name)
    private readonly portfolioItemModel: Model<PortfolioItemDocument>,
  ) {}

  async create(dto: CreatePortfolioItemDto) {
    return this.portfolioItemModel.create(dto);
  }

  async findAll(category?: PortfolioCategory) {
    const filter = category ? { category } : {};
    return this.portfolioItemModel
      .find(filter)
      .sort({ category: 1, order: 1, createdAt: -1 })
      .exec();
  }

  async findOne(id: string) {
    const item = await this.portfolioItemModel.findById(id).exec();
    if (!item) {
      throw new NotFoundException('Élément portfolio introuvable');
    }
    return item;
  }

  async update(id: string, dto: UpdatePortfolioItemDto) {
    const item = await this.portfolioItemModel
      .findByIdAndUpdate(id, dto, { new: true, runValidators: true })
      .exec();

    if (!item) {
      throw new NotFoundException('Élément portfolio introuvable');
    }

    return item;
  }

  async remove(id: string) {
    const item = await this.portfolioItemModel.findByIdAndDelete(id).exec();
    if (!item) {
      throw new NotFoundException('Élément portfolio introuvable');
    }

    return { deleted: true, id };
  }
}
