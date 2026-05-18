import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ParcoursDocument = Parcours & Document;

@Schema({ _id: false })
export class Entree {
  @Prop({ required: true, trim: true })
  titre: string;

  @Prop({ trim: true })
  lieu?: string;

  @Prop({ required: true })
  dateDebut: string;

  @Prop({ default: 'Present' })
  dateFin: string;

  @Prop({ type: [String], default: [] })
  description: string[];

  @Prop({ default: 0 })
  ordre: number;
}

export const EntreeSchema = SchemaFactory.createForClass(Entree);

@Schema({ timestamps: true })
export class Parcours {
  @Prop({ required: true, unique: true, trim: true })
  categorie: string;

  @Prop({ required: true, trim: true })
  label: string;

  @Prop({ default: 'Musique' })
  icone: string;

  @Prop({ type: [EntreeSchema], default: [] })
  entrees: Entree[];
}

export const ParcoursSchema = SchemaFactory.createForClass(Parcours);
