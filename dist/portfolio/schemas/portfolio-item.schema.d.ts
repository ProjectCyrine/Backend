import { Document } from 'mongoose';
export type PortfolioItemDocument = PortfolioItem & Document;
export declare class PortfolioItem {
    category: string;
    title: string;
    subtitle?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    description: string[];
    mediaUrl?: string;
    mediaType?: string;
    cloudinaryPublicId?: string;
    tags: string[];
    featured: boolean;
    order: number;
}
export declare const PortfolioItemSchema: import("mongoose").Schema<PortfolioItem, import("mongoose").Model<PortfolioItem, any, any, any, any, any, PortfolioItem>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PortfolioItem, Document<unknown, {}, PortfolioItem, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    category?: import("mongoose").SchemaDefinitionProperty<string, PortfolioItem, Document<unknown, {}, PortfolioItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, PortfolioItem, Document<unknown, {}, PortfolioItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    subtitle?: import("mongoose").SchemaDefinitionProperty<string | undefined, PortfolioItem, Document<unknown, {}, PortfolioItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<string | undefined, PortfolioItem, Document<unknown, {}, PortfolioItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    startDate?: import("mongoose").SchemaDefinitionProperty<string | undefined, PortfolioItem, Document<unknown, {}, PortfolioItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    endDate?: import("mongoose").SchemaDefinitionProperty<string | undefined, PortfolioItem, Document<unknown, {}, PortfolioItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string[], PortfolioItem, Document<unknown, {}, PortfolioItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mediaUrl?: import("mongoose").SchemaDefinitionProperty<string | undefined, PortfolioItem, Document<unknown, {}, PortfolioItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mediaType?: import("mongoose").SchemaDefinitionProperty<string | undefined, PortfolioItem, Document<unknown, {}, PortfolioItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cloudinaryPublicId?: import("mongoose").SchemaDefinitionProperty<string | undefined, PortfolioItem, Document<unknown, {}, PortfolioItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tags?: import("mongoose").SchemaDefinitionProperty<string[], PortfolioItem, Document<unknown, {}, PortfolioItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    featured?: import("mongoose").SchemaDefinitionProperty<boolean, PortfolioItem, Document<unknown, {}, PortfolioItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order?: import("mongoose").SchemaDefinitionProperty<number, PortfolioItem, Document<unknown, {}, PortfolioItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PortfolioItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, PortfolioItem>;
