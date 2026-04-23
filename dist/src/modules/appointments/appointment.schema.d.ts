import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';
export type AppointmentDocument = HydratedDocument<Appointment>;
export declare class Appointment {
    hospitalId: Types.ObjectId;
    department: string;
    preferredDate: Date;
    patientName: string;
    phone: string;
    status: string;
}
export declare const AppointmentSchema: MongooseSchema<Appointment, import("mongoose").Model<Appointment, any, any, any, any, any, Appointment>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Appointment, import("mongoose").Document<unknown, {}, Appointment, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    hospitalId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Appointment, import("mongoose").Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    department?: import("mongoose").SchemaDefinitionProperty<string, Appointment, import("mongoose").Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    preferredDate?: import("mongoose").SchemaDefinitionProperty<Date, Appointment, import("mongoose").Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    patientName?: import("mongoose").SchemaDefinitionProperty<string, Appointment, import("mongoose").Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string, Appointment, import("mongoose").Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Appointment, import("mongoose").Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Appointment>;
