import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export const portfolioCategories = [
  'parcours',
  'formation',
  'medaille',
  'prix',
  'image',
  'video',
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export class CreatePortfolioItemDto {
  @ApiProperty({ enum: portfolioCategories, example: 'prix' })
  @IsEnum(portfolioCategories)
  category: PortfolioCategory;

  @ApiProperty({ example: '1er Prix - Concours International' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ example: 'Institut Supérieur de Musique de Tunis' })
  @IsString()
  @IsOptional()
  subtitle?: string;

  @ApiPropertyOptional({ example: 'Tunis, Tunisie' })
  @IsString()
  @IsOptional()
  location?: string;

  @ApiPropertyOptional({ example: '2025-05-01' })
  @IsString()
  @IsOptional()
  startDate?: string;

  @ApiPropertyOptional({ example: '2025-05-01' })
  @IsString()
  @IsOptional()
  endDate?: string;

  @ApiPropertyOptional({
    type: [String],
    example: ['Participation en tant que soliste', 'Répertoire classique'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  description?: string[];

  @ApiPropertyOptional({
    example: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
  })
  @IsUrl(
    { require_tld: false },
    { message: 'mediaUrl doit être une URL valide' },
  )
  @IsOptional()
  mediaUrl?: string;

  @ApiPropertyOptional({ enum: ['image', 'video'], example: 'image' })
  @IsEnum(['image', 'video'])
  @IsOptional()
  mediaType?: 'image' | 'video';

  @ApiPropertyOptional({
    example: 'portfolio/media/sample',
    description: 'Public ID Cloudinary',
  })
  @IsString()
  @IsOptional()
  cloudinaryPublicId?: string;

  @ApiPropertyOptional({ type: [String], example: ['piano', 'festival'] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  featured?: boolean;

  @ApiPropertyOptional({ example: 1 })
  @IsNumber()
  @IsOptional()
  order?: number;
}

export class UpdatePortfolioItemDto extends PartialType(
  CreatePortfolioItemDto,
) {}
