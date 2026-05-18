export declare class EntreeDto {
    titre: string;
    lieu?: string;
    dateDebut: string;
    dateFin?: string;
    description?: string[];
    ordre?: number;
}
export declare class CreateParcoursDto {
    categorie: string;
    label: string;
    icone?: string;
    entrees?: EntreeDto[];
}
declare const UpdateParcoursDto_base: import("@nestjs/common").Type<Partial<CreateParcoursDto>>;
export declare class UpdateParcoursDto extends UpdateParcoursDto_base {
}
export {};
