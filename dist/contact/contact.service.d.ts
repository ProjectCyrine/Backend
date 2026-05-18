import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact, ContactDocument } from './schemas/contact.schema';
export declare class ContactService {
    private contactModel;
    private readonly config;
    private readonly logger;
    constructor(contactModel: Model<ContactDocument>, config: ConfigService);
    create(dto: CreateContactDto): Promise<Contact>;
    findAll(): Promise<Contact[]>;
    private sendNotificationEmail;
}
