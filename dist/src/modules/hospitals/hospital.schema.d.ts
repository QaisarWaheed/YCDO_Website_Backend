import { HydratedDocument } from 'mongoose';
export type HospitalDocument = HydratedDocument<Hospital>;
export declare class Hospital {
    name: string;
    address: string;
    city: string;
    phone: string;
    services: string[];
    timings: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    photos: string[];
    isActive: boolean;
}
export declare const HospitalSchema: import("mongoose").Schema<Hospital, import("mongoose").Model<Hospital, any, any, any, any, any, Hospital>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Hospital, import("mongoose").Document<unknown, {}, Hospital, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Hospital & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Hospital, import("mongoose").Document<unknown, {}, Hospital, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    address?: import("mongoose").SchemaDefinitionProperty<string, Hospital, import("mongoose").Document<unknown, {}, Hospital, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    city?: import("mongoose").SchemaDefinitionProperty<string, Hospital, import("mongoose").Document<unknown, {}, Hospital, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string, Hospital, import("mongoose").Document<unknown, {}, Hospital, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    services?: import("mongoose").SchemaDefinitionProperty<string[], Hospital, import("mongoose").Document<unknown, {}, Hospital, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    timings?: import("mongoose").SchemaDefinitionProperty<string, Hospital, import("mongoose").Document<unknown, {}, Hospital, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    coordinates?: import("mongoose").SchemaDefinitionProperty<{
        lat: number;
        lng: number;
    }, Hospital, import("mongoose").Document<unknown, {}, Hospital, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photos?: import("mongoose").SchemaDefinitionProperty<string[], Hospital, import("mongoose").Document<unknown, {}, Hospital, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Hospital, import("mongoose").Document<unknown, {}, Hospital, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Hospital>;
