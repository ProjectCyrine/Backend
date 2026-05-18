import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import type {} from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from '../common/decorators/public.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CloudinaryService } from './cloudinary.service';
import {
  CreatePortfolioItemDto,
  portfolioCategories,
  UpdatePortfolioItemDto,
} from './dto/create-portfolio-item.dto';
import type { PortfolioCategory } from './dto/create-portfolio-item.dto';
import { UploadMediaDto } from './dto/upload-media.dto';
import { PortfolioService } from './portfolio.service';

@ApiTags('portfolio')
@Controller('portfolio')
export class PortfolioController {
  constructor(
    private readonly portfolioService: PortfolioService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Liste publique des contenus du portfolio' })
  @ApiQuery({ name: 'category', required: false, enum: portfolioCategories })
  @ApiOkResponse()
  findAll(@Query('category') category?: PortfolioCategory) {
    return this.portfolioService.findAll(category);
  }

  @Post('admin/items')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: "Ajoute un contenu portfolio depuis l'admin" })
  @ApiCreatedResponse()
  create(@Body() dto: CreatePortfolioItemDto) {
    return this.portfolioService.create(dto);
  }

  @Patch('admin/items/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Modifie un contenu portfolio' })
  update(@Param('id') id: string, @Body() dto: UpdatePortfolioItemDto) {
    return this.portfolioService.update(id, dto);
  }

  @Delete('admin/items/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Supprime un contenu portfolio' })
  remove(@Param('id') id: string) {
    return this.portfolioService.remove(id);
  }

  @Post('admin/upload')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  @ApiBearerAuth('access-token')
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload image ou video vers Cloudinary' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
        resourceType: { type: 'string', enum: ['image', 'video'] },
        folder: { type: 'string' },
      },
      required: ['file', 'resourceType'],
    },
  })
  uploadMedia(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: UploadMediaDto,
  ) {
    return this.cloudinaryService.uploadBuffer(
      file,
      dto.resourceType,
      dto.folder,
    );
  }

  @Public()
  @Get('item/:id')
  @ApiOperation({ summary: 'Detail public d un contenu du portfolio' })
  @ApiOkResponse()
  findOne(@Param('id') id: string) {
    return this.portfolioService.findOne(id);
  }
}
