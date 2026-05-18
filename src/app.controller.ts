import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from './common/decorators/public.decorator';

@ApiTags('health')
@Controller()
export class AppController {
  @Public()
  @Get()
  @ApiOperation({ summary: 'Vérifie que l’API répond' })
  @ApiOkResponse({
    schema: {
      example: {
        success: true,
        service: 'cyrine-portfolio-backend',
        version: '1.0.0',
      },
    },
  })
  getRoot() {
    return {
      success: true,
      service: 'cyrine-portfolio-backend',
      version: '1.0.0',
    };
  }
}
