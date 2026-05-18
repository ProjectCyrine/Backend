import { CreateParcoursDto, UpdateParcoursDto } from './dto/create-parcours.dto';
import { ParcoursService } from './parcours.service';
export declare class ParcoursController {
    private readonly parcoursService;
    constructor(parcoursService: ParcoursService);
    findAll(): Promise<{
        success: boolean;
        count: number;
        data: import("./schemas/parcours.schema").Parcours[];
    }>;
    findOne(categorie: string): Promise<{
        success: boolean;
        data: import("./schemas/parcours.schema").Parcours;
    }>;
    create(dto: CreateParcoursDto): Promise<{
        success: boolean;
        data: import("./schemas/parcours.schema").Parcours;
    }>;
    update(id: string, dto: UpdateParcoursDto): Promise<{
        success: boolean;
        data: import("./schemas/parcours.schema").Parcours;
    }>;
    remove(id: string): Promise<void>;
}
