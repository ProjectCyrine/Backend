import { Model } from 'mongoose';
import { CreatePortfolioItemDto, PortfolioCategory, UpdatePortfolioItemDto } from './dto/create-portfolio-item.dto';
import { PortfolioItem, PortfolioItemDocument } from './schemas/portfolio-item.schema';
export declare class PortfolioService {
    private readonly portfolioItemModel;
    constructor(portfolioItemModel: Model<PortfolioItemDocument>);
    create(dto: CreatePortfolioItemDto): Promise<import("mongoose").Document<unknown, {}, PortfolioItemDocument, {}, import("mongoose").DefaultSchemaOptions> & PortfolioItem & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(category?: PortfolioCategory): Promise<(import("mongoose").Document<unknown, {}, PortfolioItemDocument, {}, import("mongoose").DefaultSchemaOptions> & PortfolioItem & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, PortfolioItemDocument, {}, import("mongoose").DefaultSchemaOptions> & PortfolioItem & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdatePortfolioItemDto): Promise<import("mongoose").Document<unknown, {}, PortfolioItemDocument, {}, import("mongoose").DefaultSchemaOptions> & PortfolioItem & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
}
