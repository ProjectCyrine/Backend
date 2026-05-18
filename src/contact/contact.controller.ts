import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ThrottlerGuard } from '@nestjs/throttler';
import { Public } from '../common/decorators/public.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactService } from './contact.service';

@ApiTags('contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Public()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(ThrottlerGuard)
  @ApiOperation({ summary: 'Envoie un message de contact public' })
  @ApiCreatedResponse()
  async create(@Body() dto: CreateContactDto) {
    const contact = await this.contactService.create(dto);
    return {
      success: true,
      message: 'Message reçu avec succès.',
      data: { id: contact['_id'] },
    };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Liste admin des messages de contact' })
  @ApiOkResponse()
  async findAll() {
    const data = await this.contactService.findAll();
    return { success: true, count: data.length, data };
  }
}
