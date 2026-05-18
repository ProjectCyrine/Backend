import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Parcours, ParcoursSchema } from './schemas/parcours.schema';
import { ParcoursService } from './parcours.service';
import { ParcoursController } from './parcours.controller';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: Parcours.name, schema: ParcoursSchema },
    ]),
  ],
  controllers: [ParcoursController],
  providers: [ParcoursService, JwtAuthGuard],
})
export class ParcoursModule {}
