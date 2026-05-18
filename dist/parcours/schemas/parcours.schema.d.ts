import { Document } from 'mongoose';
export type ParcoursDocument = Parcours & Document;
export declare class Entree {
    titre: string;
    lieu?: string;
    dateDebut: string;
    dateFin: string;
    description: string[];
    ordre: number;
}
export declare const EntreeSchema: import("mongoose").Schema<Entree, import("mongoose").Model<Entree, any, any, any, any, any, Entree>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Entree, Document<unknown, {}, Entree, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Entree & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    titre?: import("mongoose").SchemaDefinitionProperty<string, Entree, Document<unknown, {}, Entree, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Entree & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lieu?: import("mongoose").SchemaDefinitionProperty<string | undefined, Entree, Document<unknown, {}, Entree, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Entree & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dateDebut?: import("mongoose").SchemaDefinitionProperty<string, Entree, Document<unknown, {}, Entree, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Entree & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dateFin?: import("mongoose").SchemaDefinitionProperty<string, Entree, Document<unknown, {}, Entree, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Entree & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string[], Entree, Document<unknown, {}, Entree, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Entree & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ordre?: import("mongoose").SchemaDefinitionProperty<number, Entree, Document<unknown, {}, Entree, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Entree & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Entree>;
export declare class Parcours {
    categorie: string;
    label: string;
    icone: string;
    entrees: Entree[];
}
export declare const ParcoursSchema: import("mongoose").Schema<Parcours, import("mongoose").Model<Parcours, any, any, any, any, any, Parcours>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Parcours, Document<unknown, {}, Parcours, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Parcours & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    categorie?: import("mongoose").SchemaDefinitionProperty<string, Parcours, Document<unknown, {}, Parcours, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Parcours & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    label?: import("mongoose").SchemaDefinitionProperty<string, Parcours, Document<unknown, {}, Parcours, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Parcours & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    icone?: import("mongoose").SchemaDefinitionProperty<string, Parcours, Document<unknown, {}, Parcours, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Parcours & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    entrees?: import("mongoose").SchemaDefinitionProperty<Entree[], Parcours, Document<unknown, {}, Parcours, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Parcours & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Parcours>;
