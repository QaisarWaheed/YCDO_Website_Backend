import { HydratedDocument } from 'mongoose';
export type GalleryItemDocument = HydratedDocument<GalleryItem>;
export declare class GalleryItem {
    url: string;
    caption: string;
    category: string;
    date: Date;
    eventTag: string;
    type: string;
}
export declare const GalleryItemSchema: import("mongoose").Schema<GalleryItem, import("mongoose").Model<GalleryItem, any, any, any, any, any, GalleryItem>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, GalleryItem, import("mongoose").Document<unknown, {}, GalleryItem, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<GalleryItem & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    url?: import("mongoose").SchemaDefinitionProperty<string, GalleryItem, import("mongoose").Document<unknown, {}, GalleryItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    caption?: import("mongoose").SchemaDefinitionProperty<string, GalleryItem, import("mongoose").Document<unknown, {}, GalleryItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<string, GalleryItem, import("mongoose").Document<unknown, {}, GalleryItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    date?: import("mongoose").SchemaDefinitionProperty<Date, GalleryItem, import("mongoose").Document<unknown, {}, GalleryItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    eventTag?: import("mongoose").SchemaDefinitionProperty<string, GalleryItem, import("mongoose").Document<unknown, {}, GalleryItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<string, GalleryItem, import("mongoose").Document<unknown, {}, GalleryItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, GalleryItem>;
