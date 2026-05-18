import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as nodemailer from 'nodemailer';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact, ContactDocument } from './schemas/contact.schema';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(
    @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
    private readonly config: ConfigService,
  ) {}

  async create(dto: CreateContactDto): Promise<Contact> {
    const contact = await this.contactModel.create(dto);

    this.sendNotificationEmail(dto).catch((err) =>
      this.logger.warn(`Email non envoye: ${err.message}`),
    );

    return contact;
  }

  async findAll(): Promise<Contact[]> {
    return this.contactModel.find().sort({ createdAt: -1 }).exec();
  }

  //Notification email to admin when a new contact message is received
  private async sendNotificationEmail(dto: CreateContactDto): Promise<void> {
    const user = this.config.get<string>('EMAIL_USER');
    const pass = this.config.get<string>('EMAIL_PASS');
    const to = this.config.get<string>('EMAIL_TO');

    if (!user || !pass || !to) {
      this.logger.warn('Configuration email incomplète, notification ignorée');
      return;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Portfolio Cyrine" <${user}>`,
      to,
      subject: `Nouveau message de ${dto.nom} - ${dto.sujet}`,
      html: `
        <h2 style="color:#1a1a2e">Nouveau message via le portfolio</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Nom</td><td>${dto.nom}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email</td><td>${dto.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Sujet</td><td>${dto.sujet}</td></tr>
        </table>
        <hr/>
        <p style="white-space:pre-line">${dto.message}</p>
      `,
    });

    this.logger.log(`Email envoye a ${to}`);
  }
}
