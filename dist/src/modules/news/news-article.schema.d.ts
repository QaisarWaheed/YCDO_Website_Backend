import { HydratedDocument } from 'mongoose';
export type NewsArticleDocument = HydratedDocument<NewsArticle>;
export declare class NewsArticle {
    title: string;
    slug: string;
    body: string;
    thumbnail: string;
    author: string;
    category: string;
    tags: string[];
    publishedAt: Date;
    isPublished: boolean;
}
export declare const NewsArticleSchema: import("mongoose").Schema<NewsArticle, import("mongoose").Model<NewsArticle, any, any, any, any, any, NewsArticle>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, NewsArticle, import("mongoose").Document<unknown, {}, NewsArticle, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<NewsArticle & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, NewsArticle, import("mongoose").Document<unknown, {}, NewsArticle, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    slug?: import("mongoose").SchemaDefinitionProperty<string, NewsArticle, import("mongoose").Document<unknown, {}, NewsArticle, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    body?: import("mongoose").SchemaDefinitionProperty<string, NewsArticle, import("mongoose").Document<unknown, {}, NewsArticle, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    thumbnail?: import("mongoose").SchemaDefinitionProperty<string, NewsArticle, import("mongoose").Document<unknown, {}, NewsArticle, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    author?: import("mongoose").SchemaDefinitionProperty<string, NewsArticle, import("mongoose").Document<unknown, {}, NewsArticle, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<string, NewsArticle, import("mongoose").Document<unknown, {}, NewsArticle, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tags?: import("mongoose").SchemaDefinitionProperty<string[], NewsArticle, import("mongoose").Document<unknown, {}, NewsArticle, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    publishedAt?: import("mongoose").SchemaDefinitionProperty<Date, NewsArticle, import("mongoose").Document<unknown, {}, NewsArticle, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isPublished?: import("mongoose").SchemaDefinitionProperty<boolean, NewsArticle, import("mongoose").Document<unknown, {}, NewsArticle, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, NewsArticle>;
