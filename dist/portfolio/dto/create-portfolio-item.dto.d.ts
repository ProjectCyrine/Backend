export declare const portfolioCategories: readonly ["parcours", "formation", "medaille", "prix", "image", "video"];
export type PortfolioCategory = (typeof portfolioCategories)[number];
export declare class CreatePortfolioItemDto {
    category: PortfolioCategory;
    title: string;
    subtitle?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    description?: string[];
    mediaUrl?: string;
    mediaType?: 'image' | 'video';
    cloudinaryPublicId?: string;
    tags?: string[];
    featured?: boolean;
    order?: number;
}
declare const UpdatePortfolioItemDto_base: import("@nestjs/common").Type<Partial<CreatePortfolioItemDto>>;
export declare class UpdatePortfolioItemDto extends UpdatePortfolioItemDto_base {
}
export {};
