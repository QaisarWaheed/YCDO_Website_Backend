import { HydratedDocument } from 'mongoose';
export type DonationDocument = HydratedDocument<Donation>;
export declare class Donation {
    donorName: string;
    email: string;
    phone: string;
    amount: number;
    campaign: string;
    method: string;
    isZakat: boolean;
    status: string;
}
export declare const DonationSchema: import("mongoose").Schema<Donation, import("mongoose").Model<Donation, any, any, any, any, any, Donation>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Donation, import("mongoose").Document<unknown, {}, Donation, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Donation & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    donorName?: import("mongoose").SchemaDefinitionProperty<string, Donation, import("mongoose").Document<unknown, {}, Donation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Donation, import("mongoose").Document<unknown, {}, Donation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string, Donation, import("mongoose").Document<unknown, {}, Donation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    amount?: import("mongoose").SchemaDefinitionProperty<number, Donation, import("mongoose").Document<unknown, {}, Donation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    campaign?: import("mongoose").SchemaDefinitionProperty<string, Donation, import("mongoose").Document<unknown, {}, Donation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    method?: import("mongoose").SchemaDefinitionProperty<string, Donation, import("mongoose").Document<unknown, {}, Donation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isZakat?: import("mongoose").SchemaDefinitionProperty<boolean, Donation, import("mongoose").Document<unknown, {}, Donation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Donation, import("mongoose").Document<unknown, {}, Donation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Donation>;
