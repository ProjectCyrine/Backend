import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema({ timestamps: true })
export class Contact {
  @Prop({ required: true, trim: true, maxlength: 100 })
  nom: string;

  @Prop({ required: true, trim: true, lowercase: true })
  email: string;

  @Prop({ required: true, trim: true, maxlength: 200 })
  sujet: string;

  @Prop({ required: true, trim: true, maxlength: 2000 })
  message: string;

  @Prop({ default: false })
  lu: boolean;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
