import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CloudinaryService } from './cloudinary.service';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';
import {
  PortfolioItem,
  PortfolioItemSchema,
} from './schemas/portfolio-item.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: PortfolioItem.name, schema: PortfolioItemSchema },
    ]),
  ],
  controllers: [PortfolioController],
  providers: [PortfolioService, CloudinaryService, JwtAuthGuard],
})
export class PortfolioModule {}
