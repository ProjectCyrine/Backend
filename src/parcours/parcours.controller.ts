import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from '../common/decorators/public.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CreateParcoursDto, UpdateParcoursDto } from './dto/create-parcours.dto';
import { ParcoursService } from './parcours.service';

@ApiTags('parcours')
@Controller('parcours')
export class ParcoursController {
  constructor(private readonly parcoursService: ParcoursService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Liste publique des sections de parcours' })
  @ApiOkResponse()
  async findAll() {
    const data = await this.parcoursService.findAll();
    return { success: true, count: data.length, data };
  }

  @Public()
  @Get(':categorie')
  @ApiOperation({ summary: 'Retourne une section de parcours par categorie' })
  @ApiOkResponse()
  async findOne(@Param('categorie') categorie: string) {
    const data = await this.parcoursService.findByCategorie(categorie);
    return { success: true, data };
  }

  @Post('admin')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Ajoute une section de parcours dynamiquement' })
  @ApiCreatedResponse()
  async create(@Body() dto: CreateParcoursDto) {
    const data = await this.parcoursService.create(dto);
    return { success: true, data };
  }

  @Patch('admin/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Modifie une section de parcours' })
  @ApiOkResponse()
  async update(@Param('id') id: string, @Body() dto: UpdateParcoursDto) {
    const data = await this.parcoursService.update(id, dto);
    return { success: true, data };
  }

  @Delete('admin/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Supprime une section de parcours' })
  @ApiNoContentResponse()
  async remove(@Param('id') id: string) {
    await this.parcoursService.remove(id);
  }
}
