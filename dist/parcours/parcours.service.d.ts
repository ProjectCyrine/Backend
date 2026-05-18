import { Model } from 'mongoose';
import { CreateParcoursDto, UpdateParcoursDto } from './dto/create-parcours.dto';
import { Parcours, ParcoursDocument } from './schemas/parcours.schema';
export declare class ParcoursService {
    private readonly parcoursModel;
    constructor(parcoursModel: Model<ParcoursDocument>);
    create(dto: CreateParcoursDto): Promise<Parcours>;
    findAll(): Promise<Parcours[]>;
    findByCategorie(categorie: string): Promise<Parcours>;
    update(id: string, dto: UpdateParcoursDto): Promise<Parcours>;
    remove(id: string): Promise<{
        deleted: true;
        id: string;
    }>;
    private normalizeParcours;
}
