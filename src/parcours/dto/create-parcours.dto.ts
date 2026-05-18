import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';

export class EntreeDto {
  @ApiProperty({ example: 'Professeure de piano - Conservatoire Les Solistes' })
  @IsString()
  @IsNotEmpty()
  titre: string;

  @ApiPropertyOptional({ example: 'Tunis' })
  @IsString()
  @IsOptional()
  lieu?: string;

  @ApiProperty({ example: '2023' })
  @IsString()
  @IsNotEmpty()
  dateDebut: string;

  @ApiPropertyOptional({ example: 'Present' })
  @IsString()
  @IsOptional()
  dateFin?: string;

  @ApiPropertyOptional({
    type: [String],
    example: ['Cours individuels', 'Preparation aux concerts'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  description?: string[];

  @ApiPropertyOptional({ example: 1 })
  @IsNumber()
  @IsOptional()
  ordre?: number;
}

export class CreateParcoursDto {
  @ApiProperty({ example: 'experience' })
  @IsString()
  @IsNotEmpty()
  categorie: string;

  @ApiProperty({ example: 'Experiences professionnelles' })
  @IsString()
  @IsNotEmpty()
  label: string;

  @ApiPropertyOptional({ example: 'Piano' })
  @IsString()
  @IsOptional()
  icone?: string;

  @ApiPropertyOptional({ type: [EntreeDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EntreeDto)
  @IsOptional()
  entrees?: EntreeDto[];
}

export class UpdateParcoursDto extends PartialType(CreateParcoursDto) {}
