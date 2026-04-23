import { HydratedDocument } from 'mongoose';
export type VolunteerDocument = HydratedDocument<Volunteer>;
export declare class Volunteer {
    name: string;
    email: string;
    phone: string;
    skills: string[];
    availability: string;
    status: string;
}
export declare const VolunteerSchema: import("mongoose").Schema<Volunteer, import("mongoose").Model<Volunteer, any, any, any, any, any, Volunteer>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Volunteer, import("mongoose").Document<unknown, {}, Volunteer, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Volunteer & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Volunteer, import("mongoose").Document<unknown, {}, Volunteer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Volunteer, import("mongoose").Document<unknown, {}, Volunteer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string, Volunteer, import("mongoose").Document<unknown, {}, Volunteer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    skills?: import("mongoose").SchemaDefinitionProperty<string[], Volunteer, import("mongoose").Document<unknown, {}, Volunteer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    availability?: import("mongoose").SchemaDefinitionProperty<string, Volunteer, import("mongoose").Document<unknown, {}, Volunteer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Volunteer, import("mongoose").Document<unknown, {}, Volunteer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Volunteer>;
