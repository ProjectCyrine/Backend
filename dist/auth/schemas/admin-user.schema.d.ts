import { Document } from 'mongoose';
export type AdminUserDocument = AdminUser & Document;
export declare class AdminUser {
    username: string;
    email: string;
    passwordHash: string;
    isActive: boolean;
}
export declare const AdminUserSchema: import("mongoose").Schema<AdminUser, import("mongoose").Model<AdminUser, any, any, any, any, any, AdminUser>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AdminUser, Document<unknown, {}, AdminUser, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<AdminUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    username?: import("mongoose").SchemaDefinitionProperty<string, AdminUser, Document<unknown, {}, AdminUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AdminUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, AdminUser, Document<unknown, {}, AdminUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AdminUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    passwordHash?: import("mongoose").SchemaDefinitionProperty<string, AdminUser, Document<unknown, {}, AdminUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AdminUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, AdminUser, Document<unknown, {}, AdminUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AdminUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, AdminUser>;
