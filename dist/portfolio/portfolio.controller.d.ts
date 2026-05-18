import { CloudinaryService } from './cloudinary.service';
import { CreatePortfolioItemDto, UpdatePortfolioItemDto } from './dto/create-portfolio-item.dto';
import type { PortfolioCategory } from './dto/create-portfolio-item.dto';
import { UploadMediaDto } from './dto/upload-media.dto';
import { PortfolioService } from './portfolio.service';
export declare class PortfolioController {
    private readonly portfolioService;
    private readonly cloudinaryService;
    constructor(portfolioService: PortfolioService, cloudinaryService: CloudinaryService);
    findAll(category?: PortfolioCategory): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/portfolio-item.schema").PortfolioItemDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/portfolio-item.schema").PortfolioItem & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    create(dto: CreatePortfolioItemDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/portfolio-item.schema").PortfolioItemDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/portfolio-item.schema").PortfolioItem & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdatePortfolioItemDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/portfolio-item.schema").PortfolioItemDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/portfolio-item.schema").PortfolioItem & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
        id: string;
    }>;
    uploadMedia(file: Express.Multer.File, dto: UploadMediaDto): Promise<{
        url: string;
        publicId: string;
        resourceType: string;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/portfolio-item.schema").PortfolioItemDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/portfolio-item.schema").PortfolioItem & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
}
