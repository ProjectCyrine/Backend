import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UploadMediaDto {
  @ApiProperty({ enum: ['image', 'video'], example: 'image' })
  @IsEnum(['image', 'video'])
  resourceType: 'image' | 'video';

  @ApiPropertyOptional({ example: 'portfolio/cyrine' })
  @IsString()
  @IsOptional()
  folder?: string;
}
