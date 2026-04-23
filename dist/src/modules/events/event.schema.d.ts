import { HydratedDocument } from 'mongoose';
export type EventDocument = HydratedDocument<Event>;
export declare class Event {
    title: string;
    date: Date;
    endDate: Date;
    location: string;
    description: string;
    registrationLink: string;
    isActive: boolean;
}
export declare const EventSchema: import("mongoose").Schema<Event, import("mongoose").Model<Event, any, any, any, any, any, Event>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Event, import("mongoose").Document<unknown, {}, Event, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Event & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Event, import("mongoose").Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    date?: import("mongoose").SchemaDefinitionProperty<Date, Event, import("mongoose").Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    endDate?: import("mongoose").SchemaDefinitionProperty<Date, Event, import("mongoose").Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<string, Event, import("mongoose").Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Event, import("mongoose").Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    registrationLink?: import("mongoose").SchemaDefinitionProperty<string, Event, import("mongoose").Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Event, import("mongoose").Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Event>;
