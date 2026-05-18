import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type {} from 'multer';
import { createHash } from 'crypto';

@Injectable()
export class CloudinaryService {
  constructor(private readonly configService: ConfigService) {}

  async uploadBuffer(
    file: Express.Multer.File,
    resourceType: 'image' | 'video',
    folder?: string,
  ) {
    const cloudName = this.configService.get<string>('CLOUDINARY_CLOUD_NAME');
    const apiKey = this.configService.get<string>('CLOUDINARY_API_KEY');
    const apiSecret = this.configService.get<string>('CLOUDINARY_API_SECRET');

    if (!cloudName || !apiKey || !apiSecret) {
      throw new BadRequestException(
        'Configuration Cloudinary manquante. Vérifie CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY et CLOUDINARY_API_SECRET.',
      );
    }

    if (!file?.buffer?.length) {
      throw new BadRequestException('Aucun fichier reçu');
    }

    const timestamp = Math.floor(Date.now() / 1000).toString();
    const targetFolder =
      folder ||
      this.configService.get<string>('CLOUDINARY_FOLDER') ||
      'portfolio/cyrine';
    const signaturePayload = `folder=${targetFolder}&timestamp=${timestamp}${apiSecret}`;
    const signature = createHash('sha1').update(signaturePayload).digest('hex');
    const formData = new FormData();

    const arrayBuffer = file.buffer.buffer.slice(
      file.buffer.byteOffset,
      file.buffer.byteOffset + file.buffer.byteLength,
    ) as ArrayBuffer;

    formData.append('file', new Blob([arrayBuffer]), file.originalname);
    formData.append('api_key', apiKey);
    formData.append('timestamp', timestamp);
    formData.append('folder', targetFolder);
    formData.append('signature', signature);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
      {
        method: 'POST',
        body: formData,
      },
    );

    if (!response.ok) {
      const payload = await response.text();
      throw new InternalServerErrorException(
        `Échec de l'upload Cloudinary: ${payload}`,
      );
    }

    const payload = (await response.json()) as {
      secure_url: string;
      public_id: string;
      resource_type: string;
    };

    return {
      url: payload.secure_url,
      publicId: payload.public_id,
      resourceType: payload.resource_type,
    };
  }
}
