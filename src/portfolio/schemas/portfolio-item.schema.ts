import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { portfolioCategories } from '../dto/create-portfolio-item.dto';

export type PortfolioItemDocument = PortfolioItem & Document;

@Schema({ timestamps: true })
export class PortfolioItem {
  @Prop({ required: true, enum: portfolioCategories, index: true })
  category: string;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ trim: true })
  subtitle?: string;

  @Prop({ trim: true })
  location?: string;

  @Prop()
  startDate?: string;

  @Prop()
  endDate?: string;

  @Prop({ type: [String], default: [] })
  description: string[];

  @Prop()
  mediaUrl?: string;

  @Prop({ enum: ['image', 'video'] })
  mediaType?: string;

  @Prop()
  cloudinaryPublicId?: string;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ default: false })
  featured: boolean;

  @Prop({ default: 0 })
  order: number;
}

export const PortfolioItemSchema = SchemaFactory.createForClass(PortfolioItem);
