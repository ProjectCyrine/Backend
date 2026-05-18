import { CreateContactDto } from './dto/create-contact.dto';
import { ContactService } from './contact.service';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    create(dto: CreateContactDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: any;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        data: import("./schemas/contact.schema").Contact[];
    }>;
}
