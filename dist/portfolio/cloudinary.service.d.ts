import { ConfigService } from '@nestjs/config';
export declare class CloudinaryService {
    private readonly configService;
    constructor(configService: ConfigService);
    uploadBuffer(file: Express.Multer.File, resourceType: 'image' | 'video', folder?: string): Promise<{
        url: string;
        publicId: string;
        resourceType: string;
    }>;
}
