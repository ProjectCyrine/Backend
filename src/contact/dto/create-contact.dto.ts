import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty({ message: 'Le nom est requis' })
  @MaxLength(100, { message: 'Nom trop long (max 100 caractères)' })
  nom: string;

  @IsEmail({}, { message: 'Adresse email invalide' })
  @IsNotEmpty({ message: "L'email est requis" })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Le sujet est requis' })
  @MaxLength(200, { message: 'Sujet trop long (max 200 caractères)' })
  sujet: string;

  @IsString()
  @IsNotEmpty({ message: 'Le message est requis' })
  @MinLength(10, { message: 'Message trop court (min 10 caractères)' })
  @MaxLength(2000, { message: 'Message trop long (max 2000 caractères)' })
  message: string;
}
